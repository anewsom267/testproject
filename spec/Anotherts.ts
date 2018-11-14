import { element, by, browser, ExpectedConditions } from "protractor";
import {async} from "q";

describe ('Bankmanager Testing', function()
{
    it('launch and enter value in Bankmanager', async()=>{
        await browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
    });

    it('click on bank manager login button',async()=>{
        await element(by.xpath("//button[contains(text(),'Bank Manager Login')]")).click(); 
    });

    it('click on add customer button', async()=>{
        await element(by.xpath("//button[@ng-class = 'btnClass1")).click();
    });

    it('enter the first name value', async()=>{
        await element (by.xpath("//input[@ng-model = 'fName']")).sendKeys("TestFirstName");
    });

    it('click on last name value', async()=>{
        await element (by.xpath("//input[@ng-model = 'lName']")).sendKeys("TestLastName");
    });

    it('click on Postal Code Value', async()=>{
        await element (by.xypath("//input[@ng-model = 'psotCd']")).sendKeys("12322");
    });

    it('Click on add customer button', async()=>{
        await element (by.xpath("//button[@type='submit']")).click();
    });
    


})