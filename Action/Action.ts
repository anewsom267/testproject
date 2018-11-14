import { element, by, ExpectedConditions, browser } from 'protractor';

export class Actions{

    myClick(locator, logname){
       let ele: any= element(by.xpath(locator));
      
       browser.wait(ExpectedConditions.presenceOf(ele),2000).then(()=>{
           ele.click().then(()=>{
               console.log("Clicking "+logname);
           },function(err){
                console.log("Issue while Clicking"+logname);
           
       })
    },function(err){
        console.log("Issue while finding"+logname)
    })
}

sendKey(locator,logname,keys) {
    let name = element(by.model(locator));
    browser.wait(ExpectedConditions.presenceOf(name),5000).then(function() {
        name.sendKeys(keys).then(function() {
            console.log("search for text box: " + logname);
        }, function(err) { 
            console.log("issue in sending keys: " + logname);
        });
    }, function(err) {
        console.log("Issue in senKeys path: " + locator);
    });
}

       dropDown(locator, logname){
           let ele=element(by.xpath(locator));
           browser.wait(ExpectedConditions.elementToBeClickable(ele),2000).then(function(){
            ele.click().then(function(){
                console.log("clicked "+logname);
            },function(err){
                console.log("Issue while clicking"+logname)
            })
        },function(){
            console.log("Issue while finding"+logname)
        })
}

    validateText(locator,logname,keys1){
       let ele= element(by.xpath(locator));
       browser.wait(ExpectedConditions.presenceOf(ele),2000).then(()=>{
        ele.getText().then((text)=>{
            console.log("Verifying "+text)
            expect(text).toEqual(keys1)
        },function(err){
            console.log("Issue while verifying "+logname)
       })
    },function(err){
        console.log("Issue while Text to be Valid"+locator)
    })
    }    