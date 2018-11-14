import {browser, element, by } from "protractor";

describe('Launch URL',funciton() 

it('Verifiy Title', ()=>{
    browser.actions().mouseMove({x:50,y:0}).doubleClick()
    var obj1; any=broswer.get(:http://ww.way2automation.com/angularjs-protractor/banking/#)
    var text: any = eleemtn(by.className('mainheading'));
    expect(text.getText()).toBe('XYZ Bank');

    
}))