const { test, expect } = require('@playwright/test')

test('Prod check fast @prod', async ({ page }) => {

    //await page.goto('https://portal.ringrx.com/login')
    //test.setTimeout(10000);
    //await page.pause();
    await page.goto('https://portal.ringrx.com/login');
    await page.fill('[placeholder="Enter Login"]', 'test');
    await page.fill('[placeholder="kfkfkf"]', 'test');
    await page.click('button', { name: "Sig in" });
    //await page.waitForSelector('');
    await page.getByTitle('Dismiss this notification').locator('path').click();

})