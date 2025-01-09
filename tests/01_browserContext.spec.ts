import{chromium, test}from '@playwright/test';
test("browser context",async()=>{
    const browser= await chromium.launch();
    const context= await browser.newContext();
    const page= await context.newPage();
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await page.waitForTimeout(2000);
    await page.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']");
    await page.locator("//span[normalize-space()='Login']").click();
    //await page.waitForTimeout(1000);
    await page.locator("#input-email").fill("yuga@gmail.com");
    //await page.waitForTimeout(1000);
    await page.locator("#input-password").fill("yuga");
    await page.locator("//input[@value='Login']").click();
    
    const page1= await context.newPage();
    await page1.goto("https://ecommerce-playground.lambdatest.io");
    //await page.waitForTimeout(2000);
    


    const context2= await browser.newContext();
    const page2 =  await context2.newPage();
    await page2.waitForTimeout(1000)
    await page2.goto("https://ecommerce-playground.lambdatest.io");
    //await page.waitForTimeout(1000)

})