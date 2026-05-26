from playwright.sync_api import sync_playwright

def run_cuj(page):
    # This is a static site without a build step, opening file directly.
    # The preloader needs 8 seconds to finish (from memory).
    page.goto("file:///app/index.html")
    page.wait_for_timeout(8500)

    # Scroll to the bottom to trigger the minigame
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(2000)

    # Click the gift tab
    page.locator("#gift-container").click()
    page.wait_for_timeout(3000) # Wait for Felicidades modal

    # Close the felicidades modal
    page.locator("#close-prize-btn").click()
    page.wait_for_timeout(3000) # Wait for terminal hack

    # Take screenshot of the terminal
    page.screenshot(path="/home/jules/verification/screenshots/terminal_hack_final.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()  # MUST close context to save the video
            browser.close()
