
const puppeteer = require("puppeteer");
//

//
(async () => {
  
  const browser = await puppeteer.launch({userDataDir: 'C:\Users\Josh\AppData\Local\Google\Chrome\User Data',headless: false});
    const page = await browser.newPage();
    
  b="Vincent, Dianna ; Oronia, Jesus; Mancill, Kaleb"

  const myArray = b.split(";")
  for (let j = 0; j < myArray.length; j++) {
    
  
    var a=2000;
    
    
    console.log(7);
    console.log(myArray[j]);
    console.log(myArray.length);
    
    await page.waitForTimeout(1000);
    await page.goto("https://accounts.google.com/o/oauth2/auth/identifier?response_type=code&redirect_uri=https%3A%2F%2Ffmhs.flexisched.net%2FgoogleLogin.php&client_id=418948195496-fvrrvu52kn6rlcvhvn5td7t48i784vmm.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&access_type=online&approval_prompt=auto&flowName=GeneralOAuthFlow");
    //await page.waitForSelector('#identifierId');
    
   //await page.type('#identifierId', "josh.traxler@fmcsd.org");
    //await page.click('#identifierId')
    
    //await page.keyboard.press('Enter');
    //await page.waitForTimeout(2000)
    //await page.keyboard.type('FortMad123')
    //await page.keyboard.press('Enter');
    //await page.waitForTimeout(2000)
    //await page.waitForTimeout(2000)
    await page.waitForTimeout(2000)
    await page.keyboard.type("error");
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.type(b.split(";")[j]);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000)
    for (let i = 0; i < 13; i++) {
        await page.keyboard.press('Tab');;
      }
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000)
    for (let i = 0; i < 30; i++) {
      await page.keyboard.press('Tab');;
    }
    page.keyboard.type("t");
    await page.waitForTimeout(2000)
    page.keyboard.type("s");
    page.keyboard.type("s");
    
    for (let i = 0; i < 11; i++) {
        await page.keyboard.press('Tab');;
      }
    await page.keyboard.press('Enter');
    //await page.waitForSelector('#password');
    //await page.click('#password')
    //await page.type('#password', 123);
    //await page.waitForSelector('[data-path="Next"]')
    //console.log("test12");
    
    //await page.click('[data-path="Next"]')
    

    //await page.click()
    }  
})();
