import { test,expect } from "@playwright/test";
import { equal } from "assert";
test("handlingAlerts",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    page.on("dialog",async(alert1)=>{
        console.log("Is this alert Yes : " + alert1.type());
        console.log(alert1.message());

        await alert1.accept();
   })
   await page.locator("p[class='text-gray-900 text-size-16 mt-10 text-black font-bold'] button[type='button']").click();
   //page.waitForTimeout(1000);
   await page.context().close();
   await page.close() // good practice to close the context and page after each execution
});

test("handlingAlerts Cancel",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    page.on("dialog",async(alert2)=>{
        console.log(alert2.type());
        console.log(alert2.message());
        await alert2.dismiss();
   })
   await page.waitForTimeout(4000)
   await page.locator("p[class='text-gray-900 text-size-16 mt-10 text-black font-bold'] button[type='button']").click();
   const disMsg = page.locator("#confirm-demo");
   await disMsg.waitFor({ state: 'visible', timeout: 10000 });
   console.log(disMsg.innerText());
   expect(disMsg).toHaveText("You pressed Cancel!");
   await page.context().close();
   await page.close() // good practice to close the context and page after each execution
});

test.only("handling promt",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    await page.on("dialog",async(prompt)=>{
        const promptMsg = prompt.message();
        console.log(promptMsg);
        prompt.accept("vanitha");
        })
     await page.locator("//div[3]//p[1]//button[1]").click(); 
     const outputMsg = await page.locator("#prompt-demo");
     console.log(outputMsg.innerText())

     await expect(outputMsg).toHaveText("You have entered 'vanitha' !")
})