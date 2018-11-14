//* Author: Swaydizzle* //
//* Creation Date: 11/7/2018* //

import { element, by ,browser }  from 'protractor';
import { async } from 'q';
//import { DataProvider} from '../dataprovider/dataprovider';
//let using = require('jasmine-data-provider');
let jsd= require('../Data/testData');

//using(DataProvider.Common, async function (data)

describe('launch webpage', function(){
        it('launch and enter value Bankmanager',async()=>
    { console.log("adsfas");
        try 
        {console.log("this is getting old");
         browser.get(jsd.CustomerData1.url);
        console.log("webpage found ");
    } 
    catch (error) {
        console.log("where the hood, where the hood, where the hood at?");      
    }

     });     

    //});

        it ('click on bank manager login button', async()=>{
       
       try 
       {
        const btnlogin = element(by.xpath("//button[contains(text(),'Bank Manager Login')]"));
       if (btnlogin.isDisplayed()) 
        {
            btnlogin.click();
           console.log("bank manager button clicked like a boss");
       } else 
        {
           console.log("can't find the dang button");
                  
       } 
       }
       catch (error) {
            console.log(" error has been dispalyed");   
       }
       
    });

        it('click add customer', async()=>{
        const custbtn = element(by.xpath("//button[@ng-class='btnClass1']"));
        if (custbtn.isDisplayed())
         {
             custbtn.click();
             console.log("clicked add customer button like a boss");
            
        } else {
            console.log("can't find the freaking button");
            
        }
    });

        it('fname',async()=>{
        const firstName = element(by.xpath("//input[@ng-model = 'fName']"));
    
        if (firstName.isDisplayed())
     {
        await firstName.sendKeys(jsd.CustomerData1.firstname);
        console.log("first name typed like a boss");
    } 
        else {
        console.log("no freaking first name available");
    }
    });
        it('last name',async()=>{
        const lastName = element(by.xpath("//input[@ng-model = 'lName']"));
   
        if (lastName.isDisplayed()) 
    {
        await lastName.sendKeys(jsd.CustomerData1.lastname);
        console.log("last name typed like a boss");
        
    } else {
        console.log("I shall remain nameless"); 

    }
    });
        it('post code',async()=>{
        const postCode = element(by.xpath("//input[@ng-model = 'postCd']"));
        
            if (postCode.isDisplayed()) 
        {
            await postCode.sendKeys(jsd.CustomerData1.Code);
            console.log(" post code entered like a boss");

        } 
            else {
                console.log(" what is a post code");           
        }
    });
        it('second add customer',async()=>{
        const secondAddCustomer = element(by.xpath("//button[@type='submit']"));
        
            if (secondAddCustomer.isDisplayed())
         {
            secondAddCustomer.click();
            console.log("clicked the second add customer like a boss");
        } 
            else {
            console.log("second add customer button is freaking missing");
            
    }
       const alertDialog = browser.switchTo().alert();
        alertDialog.accept();
        var text: any= alertDialog.getText();
        console.log(text);
              
    });
   // });
});
        
