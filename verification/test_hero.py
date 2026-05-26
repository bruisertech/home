from playwright.sync_api import sync_playwright

def run_test(page):
    page.on("console", lambda msg: print(f"CONSOLE: {msg.text}"))
    page.on("pageerror", lambda err: print(f"ERROR: {err}"))
    page.goto("file:///app/index.html")
    page.wait_for_timeout(9000)
    page.screenshot(path="/home/jules/verification/screenshots/hero_debug.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        run_test(page)
        browser.close()
