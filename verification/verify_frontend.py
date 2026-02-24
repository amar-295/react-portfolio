from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print("Navigating to http://localhost:5173/...")
        try:
            page.goto("http://localhost:5173/", timeout=60000)

            # Wait for some content to load to ensure it didn't crash
            # I'll wait for the "Contact" text which is on the page
            print("Waiting for content...")
            page.wait_for_selector("text=Contact", timeout=10000)

            print("Taking screenshot...")
            page.screenshot(path="verification/verification.png")
            print("Screenshot saved to verification/verification.png")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
