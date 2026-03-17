#!/bin/bash
# Script to close remaining PRs after successful merges
# Run this after verifying all merges are successful

echo "Closing duplicate and merged PRs..."
echo ""

# Close PR #88 (duplicate of #91)
echo "Closing PR #88 (duplicate alt-text PR)..."
gh pr close 88 --comment "Closing in favor of #91, which includes both JSX accessibility linting and more descriptive alt text ('Profile picture of Amarnath'). Thank you for the contribution!"

# Close PR #93 (duplicate of #91)
echo "Closing PR #93 (duplicate alt-text PR)..."
gh pr close 93 --comment "Closing in favor of #91, which provides more descriptive alt text ('Profile picture of Amarnath' vs just 'Amarnath'). Thank you for the contribution!"

# Close PR #90 (sub-PR merged into #89)
echo "Closing PR #90 (sub-PR)..."
gh pr close 90 --comment "Changes from this sub-PR have been merged into parent PR #89, which has now been successfully merged to main. Thank you for the fix!"

echo ""
echo "✅ All duplicate and merged PRs closed successfully!"
echo ""
echo "Remaining open PRs:"
gh pr list --state open
