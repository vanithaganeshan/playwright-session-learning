import {test,expect} from '@playwright/test';
import { text } from 'stream/consumers';
test("select single item from dropdown",async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    const dropdownmenu = page.locator("#select-demo");
    await page.waitForTimeout(1000);
    await page.selectOption("#select-demo",{index:5});
    await page.waitForTimeout(1000);
    await page.selectOption("#select-demo",{label:"Friday"});
    await page.waitForTimeout(1000);
    await page.selectOption("#select-demo",{value:"Sunday"});
      
   
   // Assertions on the dropdown items
    const droptdownoptions = page.locator("#select-demo option");
    const droptdownoptionsArray = await page.$$("#select-demo option");
    console.log(droptdownoptionsArray.length);
    console.log(await droptdownoptions.count());



    console.log(await droptdownoptions.allInnerTexts());
    await expect(dropdownmenu).toHaveValue("Sunday");
    await expect(droptdownoptions).toHaveCount(8);
    //await expect(droptdownoptions).toHaveAttribute("fdprocessedid","266yit")
})

    //TextContent(),tobeTruthy()-

    test("assertion-tobeTruthy",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    const dropdownmenu1 = page.locator("#select-demo");
    const dropdownmenuContent= await dropdownmenu1.textContent();
    await expect(dropdownmenuContent?.includes("Saturday")).toBeTruthy();

   })
// array of items using foreach()
    
    test.only("assertion-foreach()",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    const dropdownOptionArray = await page.$$("#select-demo option");
    await page.waitForTimeout(2000);
    let statusIs=false;
    for(const items of dropdownOptionArray){
        console.log("Object Items is : ", items);
        let textItem= await items.textContent();
        console.log(items);
        if(textItem==="Friday")
        {
            statusIs= true;
            break;
        }
    }
    expect(statusIs).toBeTruthy();
    expect(dropdownOptionArray.length).toBe(8);
    const dropdownOptionArrayAssertion= await (dropdownOptionArray[2]).textContent();
    expect(dropdownOptionArrayAssertion).toContain("Monday")

    })





    