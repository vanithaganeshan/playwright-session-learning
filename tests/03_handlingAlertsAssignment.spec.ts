import { test,expect } from "@playwright/test";
test("handlingAlerts",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    page.on("dialog",async(alert1)=>{
        console.log(alert1.type());
        console.log(alert1.message());

        await alert1.accept();
   })
   await page.locator("p[class='text-gray-900 text-size-16 mt-10 text-black font-bold'] button[type='button']").click();
   //page.waitForTimeout(1000);
   await page.context().close();
   await page.close() // good practice to close the context and page after each execution
});