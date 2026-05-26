import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto('https://bruiser.tech/')
        await page.wait_for_timeout(8000)
        await page.screenshot(path='live_site.png', full_page=True)
        await browser.close()

asyncio.run(main())
