from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1280, "height": 800})
        page.goto("http://localhost:8000")

        # Wait for preloader to finish (it seems it takes a few seconds based on the pure red screenshot)
        page.wait_for_selector("#hero", state="visible", timeout=10000)
        time.sleep(4) # extra wait for animations

        # Screenshot Hero to see the new button
        page.screenshot(path="verification/screenshots/hero_with_btn_post_load.png")

        # Scroll down to Project 01
        page.evaluate("window.scrollBy(0, window.innerHeight * 2.5)")
        time.sleep(2)
        page.screenshot(path="verification/screenshots/gallery_grid_post_load.png")

        browser.close()

if __name__ == "__main__":
    run()
