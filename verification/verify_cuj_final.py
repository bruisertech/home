from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("file:///app/index.html")
    page.wait_for_timeout(8500)

    # Let the ferrofluid run for a bit
    page.wait_for_timeout(2000)
    page.screenshot(path="/home/jules/verification/screenshots/ferrofluid_final.png")

    # Scroll to the bottom to trigger the minigame
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(2000)
    page.screenshot(path="/home/jules/verification/screenshots/gift_final.png")

    # Click the gift close tab
    page.locator("#close-gift-btn").click()
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/gift_closed_final.png")

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
            context.close()
            browser.close()
