from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("file:///app/index.html")
    page.wait_for_timeout(8500)

    # Let the ferrofluid run for a bit
    page.wait_for_timeout(2000)

    # take screenshot of the ferrofluid running to verify
    page.screenshot(path="/home/jules/verification/screenshots/ferrofluid_running.png")
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
            context.close()
            browser.close()
