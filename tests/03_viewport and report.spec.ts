import {test,expect, chromium, firefox, webkit} from '@playwright/test';
test("viewport", async()=>{
    const browser= await chromium.launch();
    const context= await browser.newContext();  
    // {viewport:{
    //     height:300,
    //     width:200
    // }});
    const mypage= await context.newPage();
    // mypage.setViewportSize({
    //     width:1900,
    //     height:900
    // });
    await mypage.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");



})


//-- browser level viewport settings--
// deviceScaleFactor:undefined,
// viewport:null,
// launchOptions:{
//   args:['--start-maximized']
// };
// -- test level viewport settings -- 
// test.use({
//     viewport:{
//         height:150,
//         width:500
//     }
// })