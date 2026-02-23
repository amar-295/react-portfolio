from playwright.sync_api import sync_playwright, expect

def verify_contact_form():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            page.goto("http://localhost:5173/")

            # Wait for form to be visible
            expect(page.locator("form")).to_be_visible(timeout=10000)

            # Scroll to form
            page.locator("form").scroll_into_view_if_needed()

            # Test 1: Submit empty form and check validation
            print("Testing empty form submission...")
            page.get_by_role("button", name="Send Message").click()

            # Check for error messages
            expect(page.locator("text=Name is required")).to_be_visible()
            expect(page.locator("text=Email is required")).to_be_visible()
            expect(page.locator("text=Subject is required")).to_be_visible()
            expect(page.locator("text=Message is required")).to_be_visible()
            print("Validation errors visible.")

            # Take screenshot of errors
            page.screenshot(path="verification/contact_form_errors.png")

            # Test 2: Fill valid data
            print("Testing valid form input...")
            page.get_by_placeholder("Full Name").fill("Test User")
            page.get_by_placeholder("hello@yourcompany.com").fill("test@example.com")
            page.get_by_placeholder("How can I help you today?").fill("Test Subject")
            page.get_by_placeholder("Share some details about your vision, goals, or just say hello...").fill("Test Message")

            # Take screenshot of filled form
            page.screenshot(path="verification/contact_form_filled.png")
            print("Form filled and screenshot taken.")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
            raise e
        finally:
            browser.close()

if __name__ == "__main__":
    verify_contact_form()
