#!/bin/bash

# PR Management Quick Actions Script
# Repository: amar-295/react-portfolio
# This script helps manage all open pull requests efficiently

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  PR Management Quick Actions${NC}"
echo -e "${BLUE}  Repository: amar-295/react-portfolio${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Function to display menu
show_menu() {
    echo "Select an action:"
    echo ""
    echo "  ${GREEN}Infrastructure Fixes:${NC}"
    echo "  1. Check local build (verify no build errors)"
    echo "  2. Run tests locally"
    echo "  3. Check Vercel deployment status for all PRs"
    echo ""
    echo "  ${YELLOW}PR Management:${NC}"
    echo "  4. Close duplicate alt-text PRs (#88, #93)"
    echo "  5. Merge sub-PR #90 into parent PR #89"
    echo "  6. List all open PRs with status"
    echo "  7. View specific PR details"
    echo ""
    echo "  ${BLUE}Merge Operations:${NC}"
    echo "  8. Merge PR (with checks)"
    echo "  9. Merge PRs in recommended order (batch)"
    echo ""
    echo "  ${RED}Other:${NC}"
    echo "  10. Create PR management report"
    echo "  11. Exit"
    echo ""
    read -p "Enter choice [1-11]: " choice
    echo ""
}

# Function to check local build
check_build() {
    echo -e "${BLUE}Checking local build...${NC}"
    if npm run build; then
        echo -e "${GREEN}✓ Build successful!${NC}"
        return 0
    else
        echo -e "${RED}✗ Build failed! Fix errors before merging PRs.${NC}"
        return 1
    fi
}

# Function to run tests
run_tests() {
    echo -e "${BLUE}Running tests...${NC}"
    if npm test; then
        echo -e "${GREEN}✓ All tests passed!${NC}"
        return 0
    else
        echo -e "${RED}✗ Tests failed!${NC}"
        return 1
    fi
}

# Function to check Vercel status
check_vercel_status() {
    echo -e "${BLUE}Checking Vercel deployment status...${NC}"
    echo ""

    declare -a prs=(95 94 93 92 91 90 89 88)

    for pr in "${prs[@]}"; do
        echo -e "${YELLOW}PR #$pr:${NC}"
        gh pr view "$pr" --json statusCheckRollup --jq '.statusCheckRollup[] | select(.context == "Vercel") | "  Status: \(.state) - \(.description)"' || echo "  Could not fetch status"
        echo ""
    done
}

# Function to close duplicate PRs
close_duplicates() {
    echo -e "${YELLOW}Closing duplicate alt-text PRs...${NC}"
    echo ""

    read -p "This will close PRs #88 and #93 in favor of #91. Continue? (y/n): " confirm
    if [ "$confirm" != "y" ]; then
        echo "Cancelled."
        return
    fi

    echo "Closing PR #88..."
    gh pr close 88 --comment "Closing this PR in favor of #91, which includes both the JSX accessibility linting setup and better alt text description ('Profile picture of Amarnath')." || true

    echo "Closing PR #93..."
    gh pr close 93 --comment "Closing this PR in favor of #91, which provides more descriptive alt text ('Profile picture of Amarnath' vs just 'Amarnath')." || true

    echo -e "${GREEN}✓ Duplicate PRs closed successfully!${NC}"
}

# Function to merge sub-PR into parent
merge_sub_pr() {
    echo -e "${YELLOW}Merging sub-PR #90 into parent PR #89...${NC}"
    echo ""

    read -p "This will merge copilot/sub-pr-89 into aurora-project-card-glow-3706439520198146184. Continue? (y/n): " confirm
    if [ "$confirm" != "y" ]; then
        echo "Cancelled."
        return
    fi

    # Save current branch
    CURRENT_BRANCH=$(git branch --show-current)

    echo "Fetching latest changes..."
    git fetch origin

    echo "Checking out parent PR branch..."
    git checkout aurora-project-card-glow-3706439520198146184

    echo "Merging sub-PR branch..."
    if git merge origin/copilot/sub-pr-89 --no-ff -m "Merge sub-PR #90: Scope ProjectCard glow to image container"; then
        echo "Pushing changes..."
        git push origin aurora-project-card-glow-3706439520198146184

        echo "Closing sub-PR #90..."
        gh pr close 90 --comment "Changes merged into parent PR #89. This sub-PR is no longer needed." || true

        echo -e "${GREEN}✓ Sub-PR merged and closed successfully!${NC}"
    else
        echo -e "${RED}✗ Merge failed! Please resolve conflicts manually.${NC}"
    fi

    # Return to original branch
    git checkout "$CURRENT_BRANCH"
}

# Function to list open PRs
list_open_prs() {
    echo -e "${BLUE}Open Pull Requests:${NC}"
    echo ""
    gh pr list --state open --json number,title,headRefName,isDraft,createdAt,author --template '{{range .}}{{printf "#%v" .number}} - {{.title}}
  Branch: {{.headRefName}}
  Author: {{.author.login}}
  Created: {{timeago .createdAt}}
  Draft: {{.isDraft}}

{{end}}'
}

# Function to view PR details
view_pr_details() {
    read -p "Enter PR number: " pr_num
    echo ""
    gh pr view "$pr_num"
}

# Function to merge PR with checks
merge_pr() {
    read -p "Enter PR number to merge: " pr_num
    echo ""

    echo -e "${BLUE}Checking PR #$pr_num status...${NC}"

    # Check if PR is mergeable
    MERGEABLE=$(gh pr view "$pr_num" --json mergeable --jq '.mergeable')
    STATE=$(gh pr view "$pr_num" --json state --jq '.state')

    if [ "$STATE" != "OPEN" ]; then
        echo -e "${RED}✗ PR #$pr_num is not open (state: $STATE)${NC}"
        return 1
    fi

    if [ "$MERGEABLE" != "MERGEABLE" ]; then
        echo -e "${RED}✗ PR #$pr_num is not mergeable (status: $MERGEABLE)${NC}"
        echo "  Please resolve conflicts or wait for checks to complete."
        return 1
    fi

    echo -e "${GREEN}✓ PR #$pr_num is ready to merge${NC}"
    echo ""

    read -p "Merge strategy? (s=squash, m=merge, r=rebase) [s]: " strategy
    strategy=${strategy:-s}

    case $strategy in
        s)
            echo "Merging with squash..."
            gh pr merge "$pr_num" --squash --delete-branch
            ;;
        m)
            echo "Merging with merge commit..."
            gh pr merge "$pr_num" --merge --delete-branch
            ;;
        r)
            echo "Merging with rebase..."
            gh pr merge "$pr_num" --rebase --delete-branch
            ;;
        *)
            echo "Invalid strategy. Cancelled."
            return 1
            ;;
    esac

    echo -e "${GREEN}✓ PR #$pr_num merged successfully!${NC}"
}

# Function to merge PRs in recommended order
batch_merge() {
    echo -e "${YELLOW}Batch merge PRs in recommended order${NC}"
    echo ""
    echo "This will merge PRs in this order:"
    echo "  1. PR #91 (Alt text - foundation)"
    echo "  2. PR #92 (TechTag hover)"
    echo "  3. PR #94 (ContactInfo glow)"
    echo "  4. PR #89 (ProjectCard glow)"
    echo ""

    read -p "Continue with batch merge? (y/n): " confirm
    if [ "$confirm" != "y" ]; then
        echo "Cancelled."
        return
    fi

    declare -a prs_to_merge=(91 92 94 89)

    for pr in "${prs_to_merge[@]}"; do
        echo ""
        echo -e "${BLUE}Processing PR #$pr...${NC}"

        # Check if mergeable
        MERGEABLE=$(gh pr view "$pr" --json mergeable --jq '.mergeable')

        if [ "$MERGEABLE" == "MERGEABLE" ]; then
            echo -e "${GREEN}✓ PR #$pr is mergeable${NC}"
            read -p "Merge PR #$pr now? (y/n/q to quit): " merge_confirm

            if [ "$merge_confirm" == "q" ]; then
                echo "Batch merge cancelled."
                return
            elif [ "$merge_confirm" == "y" ]; then
                gh pr merge "$pr" --squash --delete-branch
                echo -e "${GREEN}✓ PR #$pr merged!${NC}"
                sleep 2  # Wait a bit between merges
            else
                echo "Skipping PR #$pr"
            fi
        else
            echo -e "${RED}✗ PR #$pr is not mergeable (status: $MERGEABLE)${NC}"
            echo "  Stopping batch merge. Please fix this PR first."
            return 1
        fi
    done

    echo ""
    echo -e "${GREEN}✓ Batch merge completed!${NC}"
}

# Function to create report
create_report() {
    echo -e "${BLUE}PR Management Report already exists:${NC}"
    echo "  Location: PR_MANAGEMENT_REPORT.md"
    echo ""
    read -p "Open in editor? (y/n): " open_editor
    if [ "$open_editor" == "y" ]; then
        ${EDITOR:-nano} PR_MANAGEMENT_REPORT.md
    fi
}

# Main loop
while true; do
    show_menu

    case $choice in
        1)
            check_build
            ;;
        2)
            run_tests
            ;;
        3)
            check_vercel_status
            ;;
        4)
            close_duplicates
            ;;
        5)
            merge_sub_pr
            ;;
        6)
            list_open_prs
            ;;
        7)
            view_pr_details
            ;;
        8)
            merge_pr
            ;;
        9)
            batch_merge
            ;;
        10)
            create_report
            ;;
        11)
            echo -e "${GREEN}Goodbye!${NC}"
            exit 0
            ;;
        *)
            echo -e "${RED}Invalid option. Please try again.${NC}"
            ;;
    esac

    echo ""
    read -p "Press Enter to continue..."
    echo ""
done
