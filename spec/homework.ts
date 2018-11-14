import { element, by, browser } from "protractor";
import { async } from "q";

describe('bankmanager',function()
{
    it('launch and enter value in Bankmanager', async()=> {
        await browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login")
        await element(by.xpath("//button[contains(text(),'Bank Manager Login')]")).click();


    })
});
