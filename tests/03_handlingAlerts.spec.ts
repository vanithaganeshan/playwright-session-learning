import { test,expect } from "@playwright/test";
test("handlingAlerts",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    page.on("dialog",async(alert)=>{
        const msg=alert.message();
        console.log(msg);
       await alert.accept();
   })
   await page.locator("button[class='btn btn-dark my-30 mx-10 hover:bg-lambda-900 hover:border-lambda-900']").click();
   //page.waitForTimeout(2000);
   await page.context().close();
   await page.close() // good practice to close the context and page after each execution
});