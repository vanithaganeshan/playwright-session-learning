import {test,expect, chromium, firefox, webkit} from '@playwright/test';
test("script", async()=>{
    const browser= await chromium.launch();
    const context= await browser.newContext();  
    const mypage= await context.newPage();
    
    await mypage.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
})
// run using npm below settings needed under package.json script object
//"tests":"npx playwright test"