from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1280, "height": 800})
        page.goto("http://localhost:8000")

        # Screenshot Hero to see the new button
        page.screenshot(path="verification/screenshots/hero_with_btn.png")

        # Scroll down to Project 01
        page.evaluate("window.scrollBy(0, window.innerHeight * 2.5)")
        page.wait_for_timeout(500)
        page.screenshot(path="verification/screenshots/gallery_grid.png")

        browser.close()

if __name__ == "__main__":
    run()
