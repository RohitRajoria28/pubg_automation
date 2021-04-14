const puppet = require("puppeteer");
 
let scout = "scoutop";
let id = "pekoso3758@0pppp.com";   
let pass = "archie@0001";   
let mortalname = "Mortal";
let scoutname = "Sc0utOP";
let mortalig = "ig_mortal";
let kronton = " krontengaming";
let kronten = "Kronten";
let tab;
async function main() {
    let browser = await puppet.launch({
        headless: false,
        defaultViewport: false,
        args: ["--start-maximized"]
    });
    let pages = await browser.pages();
    tab = pages[0];
    await tab.goto("https://www.pubgesports.com/")
    await tab.waitForSelector(".close");
    await tab.click(".close");

    setTimeout(function () {
        tab.goto("https://www.instagram.com/");
    }, 5000)

    await tab.waitForSelector("input[name='username']"); //wait to enter the username
    await tab.type("input[name='username']", id); // enter the fake  username 
    await tab.type(" input[name='password']", pass); // enter the fake password 
    await tab.click(".sqdOP.L3NKy.y3zKF"); //click on login button
    await tab.waitForSelector(".XTCLo.x3qfX"); // wait for search bar of instagram 
    await tab.type(".XTCLo.x3qfX", scout); // enter the player name 
    await tab.waitForSelector(".AC7dP.Igw0E.IwRSH.eGOV_._4EzTm.WKY0a"); // wait for the player name to show 
    await tab.click(".AC7dP.Igw0E.IwRSH.eGOV_._4EzTm.WKY0a"); // click on verified profile 

    await tab.waitForSelector("img[alt='Photo by sc0ut on April 11, 2021. May be an image of 1 person, standing and indoor.']"); //wait for player image to show 
    await tab.click("img[alt='Photo by sc0ut on April 11, 2021. May be an image of 1 person, standing and indoor.']") // select player image
    await setTimeout(function () {
        tab.goto("https://liquipedia.net/"); // to show player image properly
    }, 5000)
    await tab.waitForSelector("#pubg") //  wait for pubg to show 
    await tab.click("#pubg"); // select Pubg as a game 
    await tab.waitForSelector("#searchInput"); //click on search bar
    await tab.type("#searchInput", scoutname); //type the player name
    await tab.keyboard.press("Enter"); //Enter the player name
    await tab.waitForSelector(".toclevel-1.tocsection-2 a[href='#Achievements']");
    await tab.click("a[title='Sc0utOP/Results']"); // to click on player result
    await tab.waitForSelector(".nav.nav-tabs.navigation-not-searchable.tabs.tabs3");
    await tab.click(".nav.nav-tabs.navigation-not-searchable.tabs.tabs3") // to click on nav bar 
    for (let i = 0; i < 40; i++) {

        tab.keyboard.down('ArrowDown')
        //to scroll the page 
    }

    // MORTAL SCRIPT
    setTimeout(function () {
        tab.goto("https://www.instagram.com/");
    }, 5000)
    await tab.waitForSelector(".XTCLo.x3qfX"); // wait for search bar of instagram 
    await tab.type(".XTCLo.x3qfX", mortalig);
    await tab.click(".aOOlW.HoLwm ");
    await tab.waitForSelector(".glyphsSpriteVerified_small.u-__7")
    await tab.click(".glyphsSpriteVerified_small.u-__7");
    await tab.waitForSelector(".-vDIg")
    await tab.click(".-vDIg");
    await tab.waitForSelector('img[alt="Photo shared by Naman Mathur on April 03, 2021 tagging @corsairin. May be a black-and-white image of one or more people."]');
    await tab.click('img[alt="Photo shared by Naman Mathur on April 03, 2021 tagging @corsairin. May be a black-and-white image of one or more people."]');
    setTimeout(function () {
        tab.goto("https://liquipedia.net/"); // to show player image properly
    }, 5000)

    await tab.waitForSelector("#pubg") //  wait for pubg to show 
    await tab.click("#pubg"); // select Pubg as a game 
    await tab.waitForSelector("#searchInput"); //click on search bar
    await tab.type("#searchInput", mortalname); //type the player name
    await tab.keyboard.press("Enter"); //Enter the player name

    await tab.waitForSelector(".toclevel-1.tocsection-2 a[href='#Achievements']");
    await tab.click("a[title='Mortal/Results']"); // to click on player result
    await tab.waitForSelector(".nav.nav-tabs.navigation-not-searchable.tabs.tabs3");
    await tab.click(".nav.nav-tabs.navigation-not-searchable.tabs.tabs3") // to click on nav bar 
    for (let i = 0; i < 40; i++) {

        tab.keyboard.down('ArrowDown')
        //to scroll the page 
    }

    // Kronten SCRIPT 
    setTimeout(function () {
        tab.goto("https://www.instagram.com/");
    }, 5000)
    await tab.waitForSelector(".XTCLo.x3qfX"); // wait for search bar of instagram 
    await tab.type(".XTCLo.x3qfX", kronton);
    // await tab.click(".aOOlW.HoLwm ");
    await tab.waitForSelector(".glyphsSpriteVerified_small.u-__7")
    await tab.click(".glyphsSpriteVerified_small.u-__7");
    await tab.waitForSelector(".-vDIg")
    await tab.click(".-vDIg");
    await tab.waitForSelector('img[alt="Photo by Chetan Chandgude in Pune, Maharashtra. May be an image of 1 person, footwear and outdoors."]');
    await tab.click('img[alt="Photo by Chetan Chandgude in Pune, Maharashtra. May be an image of 1 person, footwear and outdoors."]');
    setTimeout(function () {
        tab.goto("https://liquipedia.net/"); // to show player image properly
    }, 5000)

    await tab.waitForSelector("#pubg") //  wait for pubg to show 
    await tab.click("#pubg"); // select Pubg as a game 
    await tab.waitForSelector("#searchInput"); //click on search bar
    await tab.type("#searchInput", kronten); //type the player name
    await tab.keyboard.press("Enter"); //Enter the player name

    await tab.waitForSelector(".toclevel-1.tocsection-2 a[href='#Achievements']");
    await tab.click("a[title='Kronten/Results']"); // to click on player result

    await tab.waitForSelector("#firstHeading");
    await tab.click("#firstHeading");
    for (let i = 0; i < 20; i++) {

        tab.keyboard.down('ArrowDown')
        //to scroll the page 
    }
    

    setTimeout(function () {

        tab.goto("https://www.pubgmobile.in/");
    }, 5000)




}
async function Video() {
    let browser1 = await puppet.launch({
        headless: false,
        defaultViewport: false,
        args: ["--start-maximized"]
    });
    let pages = await browser1.pages();
    let tab1 = pages[0];

    tab1.goto("https://www.youtube.com/watch?v=ncCDdqybio0");

    await tab1.waitForSelector(".ytp-play-button.ytp-button");
    await tab1.click(".ytp-play-button.ytp-button");
    await tab1.waitForSelector(".ytp-fullscreen-button.ytp-button");
    await tab1.click(".ytp-fullscreen-button.ytp-button");
   //  await browser1.close();
    setTimeout(function () {
        browser1.close();
    }, 49000)
    // await browser1.close();

};
Video();

setTimeout(() => {
    main();
}, 51000);