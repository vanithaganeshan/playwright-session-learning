import{test,expect,Page}from '@playwright/test';
//import { TIMEOUT } from 'dns';
//import { text } from 'stream/consumers';
test("Handling Single-Child Window",async({page})=>{
    page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    const childWinPromise = page.waitForEvent('popup');
    await page.getByRole('link',{name:"Follow On Twitter"}).click();
    const childwindow = await childWinPromise;
    console.log("URL of the childwindow is : ", childwindow.url());
    await childwindow.getByTestId('login').click();
    await childwindow.getByLabel("Phone, email, or username").fill("abc@gmail.com")
    await childwindow.waitForTimeout(2000);
    await childwindow.close();
})
    test.only("Handling Multiple Windows",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    const multiChildPromise = page.waitForEvent('popup');
    await page.click("#followboth");
    const multiChildObj=await multiChildPromise;
    const multiWinPromiseArray = await multiChildObj.context().pages();
    console.log("No of Windows opened : ",multiWinPromiseArray.length)
    // for(let windowEle of multiWinPromiseArray) {
    //        console.log('URL is :',windowEle.url());
    //     }
    let twitterPage:Page=getCurrentPageUrl(multiWinPromiseArray,"https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    //let facebookPage:Page=getCurrentPageUrl(multiWinPromiseArray,"https://www.facebook.com/lambdatest/");
        function getCurrentPageUrl(multipagesArray: Page[], urlNeeded: string): Page{
            let returningPage: Page;
        
            for(let windowEle of multipagesArray ){
                let currentWindowURL = windowEle.url()
        
                if(currentWindowURL == urlNeeded){
                    returningPage = windowEle;
                }
             }
        
            return returningPage;
        }

    await twitterPage.getByRole('link',{name:"Follow On Twitter"}).click();
    });