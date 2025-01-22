import {test,expect} from "@playwright/test"
test("iframe and childframes",async({page})=>{
   await page.goto("https://letcode.in/frame");
   const allFrames=page.frames();
   console.log("No of Frames is :",allFrames.length);//find the total number of frames in the page
   // find the name and title for all the frames
   for( const frameObj of allFrames){
    console.log("Frame Name: ", frameObj.name());
    console.log("Frame Title: ", await frameObj.title());
   }

   // find the second frame
   const secondFrame = allFrames[1];
   console.log("Second Frame Name ",secondFrame.name());

  // find the first frame and its childframes objects
   const firstFrame = page.frame("firstFr");
   const childFra = firstFrame?.childFrames();

  // log the child frame 
   if(childFra && childFra?.length>0)
    {
    for(const childObj of childFra){
    const childName=childObj.name();
    const childTitle=childObj.title();
    console.log(`Name of child frame is ${childName} and title is ${childTitle}`);
     }
   }
else
console.log("no child found");

    await page.waitForTimeout(2000)
    await firstFrame?.fill("input[name='fname']","vanitha");
    await page.waitForTimeout(2000)
    await firstFrame?.fill("input[name='lname']","ganeshan");
    await page.waitForTimeout(2000)

// locate the child frame of first frame
const childFrame = firstFrame?.frameLocator("iFrame[src='innerFrame']");
await childFrame.locator("input[name='email']").scrollIntoViewIfNeeded();
await page.waitForTimeout(1000);
await childFrame.locator("input[name='email']").fill("abc@gmail.com");
})
