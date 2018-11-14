var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = {
        description: '',
        passed: true,
        failed: true,
        pending: true,
        withLog: true,
    };

    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        $scope.searchSettings.passed = true;
        $scope.searchSettings.failed = true;
        $scope.searchSettings.pending = true;
        $scope.searchSettings.withLog = true;
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.specLevel = function (str) {
        var arr = str.split('|');
        str = "";
        if (arr.length < 3) {
            return true;
        }
        return false;
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };


    this.nToBr = function (str) {
        return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };


    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh == 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number)/1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {passCount++};
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {pendingCount++};
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {failCount++}
        }
        return failCount;
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results =[
    {
        "description": "Open the xyz bank url|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00d500c5-00ae-0065-0066-00d9003e0085.png",
        "timestamp": 1539687006654,
        "duration": 35581
    },
    {
        "description": "click on bank manager button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "003400fd-0040-009d-0031-00d700060046.png",
        "timestamp": 1539687047560,
        "duration": 1277
    },
    {
        "description": "Click on Add Customer button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "008f0016-0047-0066-0084-001d000500f6.png",
        "timestamp": 1539687049535,
        "duration": 172
    },
    {
        "description": "Enter the first name|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "009e009c-00ed-0057-004e-0074004f0087.png",
        "timestamp": 1539687050525,
        "duration": 1205
    },
    {
        "description": "Enter the last name|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00b10019-000b-00f9-0035-00860088007b.png",
        "timestamp": 1539687052225,
        "duration": 190
    },
    {
        "description": "Enter the post code|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00a60014-0073-00b7-00cd-003d00a0005a.png",
        "timestamp": 1539687052827,
        "duration": 225
    },
    {
        "description": "Click on Add Customer Button to generte Customer ID|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "008100d2-00a6-00ca-00dd-00c3004b00b0.png",
        "timestamp": 1539687053482,
        "duration": 623
    },
    {
        "description": "Go to homePage|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ce00f1-0082-00cf-0042-000c008000d9.png",
        "timestamp": 1539687054862,
        "duration": 153
    },
    {
        "description": "Click on Bank Manager Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ce004c-0002-0027-00f0-00f7003c0085.png",
        "timestamp": 1539687055915,
        "duration": 170
    },
    {
        "description": "click on open account button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ca000d-0078-0095-00f6-0028007f00d5.png",
        "timestamp": 1539687056427,
        "duration": 183
    },
    {
        "description": "select customer name|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "008a0010-000d-0092-00e0-00bf00d000ff.png",
        "timestamp": 1539687056975,
        "duration": 210
    },
    {
        "description": "select currency |BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "009d0029-00e9-008f-0012-003a000d00be.png",
        "timestamp": 1539687057675,
        "duration": 290
    },
    {
        "description": "click on Process button to generate account no|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00130007-00c6-000d-00e0-00ee00ab00a6.png",
        "timestamp": 1539687058407,
        "duration": 210
    },
    {
        "description": "After generating account number go to homePage|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "008300c7-00cc-00c6-0011-0089008100bd.png",
        "timestamp": 1539687059367,
        "duration": 158
    },
    {
        "description": "Click on Bank Manager Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00b600e6-0048-0018-0021-00ee00d60004.png",
        "timestamp": 1539687059990,
        "duration": 175
    },
    {
        "description": "Click on Customer Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "009f004c-00b7-0013-004e-002300d000a1.png",
        "timestamp": 1539687060582,
        "duration": 145
    },
    {
        "description": "Click on Customer Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00750074-0003-00ae-0084-008f00060058.png",
        "timestamp": 1539687061077,
        "duration": 253
    },
    {
        "description": "Click on Customer Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00b800ee-001a-00bd-0078-005800a300db.png",
        "timestamp": 1539687061800,
        "duration": 215
    },
    {
        "description": "Go to homePage|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "007c00bd-00b7-00fa-000c-002b0078004f.png",
        "timestamp": 1539687062425,
        "duration": 157
    },
    {
        "description": "Launch XYZ|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 2024,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "008c0033-0049-009c-0089-005b00ab0037.png",
        "timestamp": 1539773809870,
        "duration": 4898
    },
    {
        "description": "Launch XYZ|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12244,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00e5002f-00d8-007b-006d-00bf007e00bf.png",
        "timestamp": 1539774957883,
        "duration": 4569
    },
    {
        "description": "Open the browser|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12244,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00840048-00e9-00e4-00e5-00f800c9008d.png",
        "timestamp": 1539774966062,
        "duration": 2461
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12244,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Failed: name.split is not a function",
        "trace": "TypeError: name.split is not a function\n    at className (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\by.js:138:22)\n    at call (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:1068:28)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:907:19\n    at ManagedPromise.invokeCallback_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)\nFrom: Task: WebDriver.call(function)\n    at Driver.call (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:901:23)\n    at Driver.findElementsInternal_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:1068:17)\n    at Driver.findElements (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:1043:19)\n    at ptor.waitForAngular.then (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:159:44)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as getText] (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as getText] (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at UserContext.<anonymous> (C:\\Users\\E001105.CIGNITIGLOBAL\\Desktop\\JbHunt\\Protractor_typeScriptProject (1)\\Protractor_typeScriptProject\\xyz_bank\\Specs\\test.js:14:21)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\nFrom: Task: Run it(\"Verify Title\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\E001105.CIGNITIGLOBAL\\Desktop\\JbHunt\\Protractor_typeScriptProject (1)\\Protractor_typeScriptProject\\xyz_bank\\Specs\\test.js:12:5)\n    at addSpecsToSuite (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\E001105.CIGNITIGLOBAL\\Desktop\\JbHunt\\Protractor_typeScriptProject (1)\\Protractor_typeScriptProject\\xyz_bank\\Specs\\test.js:4:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00e60031-00d3-00dc-00e6-00d7001600d9.png",
        "timestamp": 1539774970648,
        "duration": 60
    },
    {
        "description": "Launch XYZ|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9000,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00060038-00bc-00b3-00cf-00e300980049.png",
        "timestamp": 1539775562778,
        "duration": 3408
    },
    {
        "description": "Open the browser|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9000,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ca0009-009f-0097-00d5-001d00300089.png",
        "timestamp": 1539775567314,
        "duration": 3882
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9000,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Expected 'XYZ Bank' to be 'mainHeading'.",
        "trace": "Error: Failed expectation\n    at UserContext.<anonymous> (C:\\Users\\E001105.CIGNITIGLOBAL\\Desktop\\JbHunt\\Protractor_typeScriptProject (1)\\Protractor_typeScriptProject\\xyz_bank\\Specs\\test.js:14:32)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7",
        "browserLogs": [],
        "screenShotFile": "00b90047-004a-00ee-007e-0043008100e2.png",
        "timestamp": 1539775571806,
        "duration": 145
    },
    {
        "description": "Launch XYZ|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8272,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00a0003d-004d-00bb-0043-0036004300ed.png",
        "timestamp": 1539775830589,
        "duration": 2967
    },
    {
        "description": "Open the browser|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8272,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "004d002f-00b9-003a-000d-00c500d900cd.png",
        "timestamp": 1539775834049,
        "duration": 6341
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8272,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Expected 'XYZ Bank' to be 'mainHeading'.",
        "trace": "Error: Failed expectation\n    at UserContext.<anonymous> (C:\\Users\\E001105.CIGNITIGLOBAL\\Desktop\\JbHunt\\Protractor_typeScriptProject (1)\\Protractor_typeScriptProject\\xyz_bank\\Specs\\test.js:16:32)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7",
        "browserLogs": [],
        "screenShotFile": "000400f5-0015-00c6-00ff-0000006c009e.png",
        "timestamp": 1539775840823,
        "duration": 2196
    },
    {
        "description": "Launch XYZ|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9608,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "003100c5-00c5-002d-00aa-00f8009800bd.png",
        "timestamp": 1539776011457,
        "duration": 2310
    },
    {
        "description": "Open the browser|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9608,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "003f0074-0004-0025-000c-002900240058.png",
        "timestamp": 1539776014544,
        "duration": 6699
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9608,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Expected 'XYZ Bank' to be 'mainHeading'.",
        "trace": "Error: Failed expectation\n    at UserContext.<anonymous> (C:\\Users\\E001105.CIGNITIGLOBAL\\Desktop\\JbHunt\\Protractor_typeScriptProject (1)\\Protractor_typeScriptProject\\xyz_bank\\Specs\\test.js:19:32)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7",
        "browserLogs": [],
        "screenShotFile": "00e300e2-00f0-00ac-0047-00f200ac002f.png",
        "timestamp": 1539776021680,
        "duration": 1219
    },
    {
        "description": "Launch XYZ|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8092,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "006f0088-000d-000e-0019-00cf00e1006f.png",
        "timestamp": 1539776173880,
        "duration": 2880
    },
    {
        "description": "Open the browser|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8092,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00180068-002f-00c9-0069-009b00ca0097.png",
        "timestamp": 1539776177595,
        "duration": 6303
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8092,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "009a00cc-007a-006b-0052-00c600f90051.png",
        "timestamp": 1539776184265,
        "duration": 1079
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11664,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00db006f-001a-00eb-0059-004200a30019.png",
        "timestamp": 1539776349257,
        "duration": 1756
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 2524,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00b500bd-00ab-00c9-0085-0047002800fa.png",
        "timestamp": 1539776544821,
        "duration": 1552
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6612,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "008100bc-0041-00ec-000e-00c9005c002f.png",
        "timestamp": 1539787319382,
        "duration": 2749
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10344,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Expected 'XYZ Bank' to be 'XYZ1 Bank'.",
        "trace": "Error: Failed expectation\n    at UserContext.<anonymous> (C:\\Users\\E001105.CIGNITIGLOBAL\\Desktop\\JbHunt\\Protractor_typeScriptProject (1)\\Protractor_typeScriptProject\\xyz_bank\\Specs\\test.js:17:32)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7",
        "browserLogs": [],
        "screenShotFile": "006200eb-0003-0037-00c3-00d000480016.png",
        "timestamp": 1539788347685,
        "duration": 4663
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 19832,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Expected 'XYZ Bank' to be 'XYZ1 Bank'.",
        "trace": "Error: Failed expectation\n    at UserContext.<anonymous> (C:\\Users\\jisasa4\\Desktop\\JBhunt\\Code\\xyz_bank\\xyz_bank\\Specs\\test.js:17:32)\n    at C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7",
        "browserLogs": [],
        "screenShotFile": "00620040-00dd-0071-003f-00fe007500bd.png",
        "timestamp": 1541050797453,
        "duration": 4194
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 680,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Expected 'XYZ Bank' to be 'XYZ1 Bank'.",
        "trace": "Error: Failed expectation\n    at UserContext.<anonymous> (C:\\Users\\jisasa4\\Desktop\\JBhunt\\Code\\xyz_bank\\xyz_bank\\Specs\\test.js:17:32)\n    at C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7",
        "browserLogs": [],
        "screenShotFile": "00ff00a6-0045-00f2-0045-003900aa007e.png",
        "timestamp": 1541053299096,
        "duration": 3738
    },
    {
        "description": "Open the browser|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0064000f-00bf-00a0-007d-000c00550069.png",
        "timestamp": 1541053603758,
        "duration": 3725
    },
    {
        "description": "Verify Title|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "001b007f-009f-00c0-0096-00b800690073.png",
        "timestamp": 1541053607849,
        "duration": 633
    },
    {
        "description": "Color of Customer Login before MouseOver|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "009400d1-0059-0036-0098-00bb00bb001c.png",
        "timestamp": 1541053608832,
        "duration": 40
    },
    {
        "description": "click customer login button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00bc0095-001b-006b-0045-009f00580084.png",
        "timestamp": 1541053609191,
        "duration": 90
    },
    {
        "description": "Select Customer from Drop Down|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "007b007e-000e-00a6-00e9-004900b1008c.png",
        "timestamp": 1541053609621,
        "duration": 657
    },
    {
        "description": "Click on Login button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "009d00b6-00aa-00a1-00fa-001a000200f2.png",
        "timestamp": 1541053610619,
        "duration": 100
    },
    {
        "description": "verify customer title|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "008c00ed-004d-0047-0009-00e200ad00ba.png",
        "timestamp": 1541053611062,
        "duration": 176
    },
    {
        "description": "Click on Deposit Button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0043008e-003f-009d-004d-009d001d00d1.png",
        "timestamp": 1541053611514,
        "duration": 2099
    },
    {
        "description": "Deposit amount|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00520023-00a7-0087-0033-004900790003.png",
        "timestamp": 1541053613891,
        "duration": 105
    },
    {
        "description": "Click deposit button after entering amount|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ef00c4-0011-00d5-001e-0016005b008d.png",
        "timestamp": 1541053614361,
        "duration": 96
    },
    {
        "description": "Verify Deposit Amount Message|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00690051-0088-0018-002a-008f00b300b1.png",
        "timestamp": 1541053614778,
        "duration": 102
    },
    {
        "description": "Amount deposited Value is: |CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "004300ce-0085-009f-001b-00c5002b0037.png",
        "timestamp": 1541053615245,
        "duration": 68
    },
    {
        "description": "Click on WithDrawl Button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "004f0096-0041-00e2-0028-004f000500b8.png",
        "timestamp": 1541053615751,
        "duration": 226
    },
    {
        "description": "WithDraw Amount|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "000d00f2-00ec-0015-00bc-003e00c000ba.png",
        "timestamp": 1541053616474,
        "duration": 151
    },
    {
        "description": "Click on WithDrawl Button after Entering Amount|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "007f0072-00e2-0058-0090-0017006800d5.png",
        "timestamp": 1541053616944,
        "duration": 139
    },
    {
        "description": "Verify Withdraw Amount Message|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "0083004a-0092-00ab-00bc-00a800f9009f.png",
        "timestamp": 1541053617515,
        "duration": 204
    },
    {
        "description": "Remaining Balance is |CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0023004b-000e-0043-000b-00b3009f00dd.png",
        "timestamp": 1541053618047,
        "duration": 1060
    },
    {
        "description": "Amount Debited in Transactions page|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "001f0019-003c-0017-0056-00d900040008.png",
        "timestamp": 1541053619482,
        "duration": 4116
    },
    {
        "description": "Credited Amount is |CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "001300ce-0090-0009-00d2-00f200d100b1.png",
        "timestamp": 1541053623950,
        "duration": 69
    },
    {
        "description": "Debited Amount is |CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00df0046-00fa-00a8-0037-009b00c400cc.png",
        "timestamp": 1541053624350,
        "duration": 50
    },
    {
        "description": "Click On Logout Button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00eb005b-004c-004e-0000-007800570038.png",
        "timestamp": 1541053624743,
        "duration": 185
    },
    {
        "description": "Click on Home Button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00360064-001d-00d5-004b-00e200990061.png",
        "timestamp": 1541053625278,
        "duration": 1625
    },
    {
        "description": "verify title|launch XYZ",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 3912,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: protractor_1.by.classname is not a function",
        "trace": "TypeError: protractor_1.by.classname is not a function\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\testlaunch.js:8:57)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\nFrom: Task: Run it(\"verify title\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\testlaunch.js:5:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\testlaunch.js:4:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "005700eb-000d-00e2-00c9-0003005200ce.png",
        "timestamp": 1541100757689,
        "duration": 10
    },
    {
        "description": "verify title|launch XYZ",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12196,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: protractor_1.by.classname is not a function",
        "trace": "TypeError: protractor_1.by.classname is not a function\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\testlaunch.js:8:57)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\nFrom: Task: Run it(\"verify title\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\testlaunch.js:5:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\testlaunch.js:4:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "006300b1-000d-0094-0036-007d003900b7.png",
        "timestamp": 1541100860061,
        "duration": 10
    },
    {
        "description": "verify title|launch XYZ",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7728,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00bc001c-00bd-0053-007c-003100c6007c.png",
        "timestamp": 1541101002062,
        "duration": 7189
    },
    {
        "description": "verify title|launch XYZ",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 4172,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "007a001a-005a-00bb-00d0-002b008e00d0.png",
        "timestamp": 1541542133307,
        "duration": 4545
    },
    {
        "description": "verify title|launch XYZ",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9644,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "005900fa-00ce-0076-003d-00fc00570020.png",
        "timestamp": 1541542400016,
        "duration": 4457
    },
    {
        "description": "launch and enter value in Bankmanager|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17332,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00b00076-00a2-008f-0088-00a700fd00b9.png",
        "timestamp": 1541542844555,
        "duration": 4
    },
    {
        "description": "click on Bank manager login button|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17332,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)\nFrom: Task: Run it(\"click on Bank manager login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:46:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "001e0058-009a-001f-00de-00a5008c00d7.png",
        "timestamp": 1541542844998,
        "duration": 31
    },
    {
        "description": "click on add customer button|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17332,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:65:125)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:62:61)\nFrom: Task: Run it(\"click on add customer button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:62:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "004200c2-00c5-0061-008f-0045009c0048.png",
        "timestamp": 1541542845342,
        "duration": 18
    },
    {
        "description": "enter the first name value|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17332,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:75:122)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:72:59)\nFrom: Task: Run it(\"enter the first name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:72:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00190070-0051-0004-00d4-00a2004e0048.png",
        "timestamp": 1541542845647,
        "duration": 18
    },
    {
        "description": "click on last name value|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17332,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:85:122)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:82:57)\nFrom: Task: Run it(\"click on last name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:82:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00990003-0072-00c1-0078-00ed00660080.png",
        "timestamp": 1541542846012,
        "duration": 18
    },
    {
        "description": "click on Postal Code Value|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17332,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: protractor_1.by.xypath is not a function",
        "trace": "TypeError: protractor_1.by.xypath is not a function\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:95:83)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:92:59)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\nFrom: Task: Run it(\"click on Postal Code Value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:92:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "007900e2-0033-0086-00de-00f3005d00ab.png",
        "timestamp": 1541542846391,
        "duration": 8
    },
    {
        "description": "Click on add customer button|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17332,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:105:118)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:102:61)\nFrom: Task: Run it(\"Click on add customer button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:102:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00ff0035-00bf-0006-00df-0011003800ad.png",
        "timestamp": 1541542846732,
        "duration": 20
    },
    {
        "description": "launch and enter value in Bankmanager|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 16344,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ba004d-0092-0068-00b3-00dd00830000.png",
        "timestamp": 1541543099639,
        "duration": 4
    },
    {
        "description": "click on Bank manager login button|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 16344,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)\nFrom: Task: Run it(\"click on Bank manager login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:46:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "006b0028-0081-0011-0068-00ad004600f9.png",
        "timestamp": 1541543100095,
        "duration": 37
    },
    {
        "description": "click on add customer button|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 16344,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:65:125)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:62:61)\nFrom: Task: Run it(\"click on add customer button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:62:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "001a0000-00bd-00e2-007e-0011007100ff.png",
        "timestamp": 1541543100424,
        "duration": 23
    },
    {
        "description": "enter the first name value|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 16344,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:75:122)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:72:59)\nFrom: Task: Run it(\"enter the first name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:72:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "009a0049-0070-00fa-0000-000c00af004c.png",
        "timestamp": 1541543100715,
        "duration": 14
    },
    {
        "description": "click on last name value|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 16344,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:85:122)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:82:57)\nFrom: Task: Run it(\"click on last name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:82:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "008700b3-00b8-0085-004d-009f00ca0089.png",
        "timestamp": 1541543101038,
        "duration": 18
    },
    {
        "description": "click on Postal Code Value|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 16344,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: protractor_1.by.xypath is not a function",
        "trace": "TypeError: protractor_1.by.xypath is not a function\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:95:83)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:92:59)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\nFrom: Task: Run it(\"click on Postal Code Value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:92:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "008b0005-00ee-005f-00ff-009e002c0069.png",
        "timestamp": 1541543101388,
        "duration": 5
    },
    {
        "description": "Click on add customer button|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 16344,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:105:118)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:102:61)\nFrom: Task: Run it(\"Click on add customer button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:102:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00400009-0074-0023-00ff-0060008c0025.png",
        "timestamp": 1541543101703,
        "duration": 16
    },
    {
        "description": "launch and enter value in Bankmanager|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 15668,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "000800b3-0031-00db-00c1-004200120050.png",
        "timestamp": 1541543193831,
        "duration": 3
    },
    {
        "description": "click on Bank manager login button|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 15668,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)\nFrom: Task: Run it(\"click on Bank manager login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:46:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "0069003a-000f-00c9-001f-00ae001e00cc.png",
        "timestamp": 1541543194263,
        "duration": 31
    },
    {
        "description": "click on add customer button|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 15668,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:65:125)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:62:61)\nFrom: Task: Run it(\"click on add customer button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:62:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "002300c7-0095-00f4-009d-003600da00dc.png",
        "timestamp": 1541543194571,
        "duration": 16
    },
    {
        "description": "enter the first name value|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 15668,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:75:122)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:72:59)\nFrom: Task: Run it(\"enter the first name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:72:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "0053006b-00c2-0031-0007-009600db00df.png",
        "timestamp": 1541543194902,
        "duration": 13
    },
    {
        "description": "click on last name value|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 15668,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:85:122)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:82:57)\nFrom: Task: Run it(\"click on last name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:82:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "009100c9-00f6-0066-000b-00980080005e.png",
        "timestamp": 1541543195190,
        "duration": 11
    },
    {
        "description": "click on Postal Code Value|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 15668,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: protractor_1.by.xypath is not a function",
        "trace": "TypeError: protractor_1.by.xypath is not a function\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:95:83)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:92:59)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\nFrom: Task: Run it(\"click on Postal Code Value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:92:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "001e0077-0099-00fe-0089-00a300dc0084.png",
        "timestamp": 1541543195549,
        "duration": 5
    },
    {
        "description": "Click on add customer button|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 15668,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:105:118)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:102:61)\nFrom: Task: Run it(\"Click on add customer button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:102:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00130029-0082-00fc-00f3-008000430070.png",
        "timestamp": 1541543195864,
        "duration": 13
    },
    {
        "description": "launch and enter value in Bankmanager|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18472,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "001200e2-0069-00aa-00a2-006600fa0025.png",
        "timestamp": 1541543233650,
        "duration": 6
    },
    {
        "description": "click on Bank manager login button|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18472,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)\nFrom: Task: Run it(\"click on Bank manager login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:46:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "009400b5-00ca-003f-00f1-00e2000d0073.png",
        "timestamp": 1541543234098,
        "duration": 40
    },
    {
        "description": "click on add customer button|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18472,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:65:125)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:62:61)\nFrom: Task: Run it(\"click on add customer button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:62:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "007200de-00fe-00bd-0059-001100b100d4.png",
        "timestamp": 1541543234435,
        "duration": 19
    },
    {
        "description": "enter the first name value|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18472,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:75:122)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:72:59)\nFrom: Task: Run it(\"enter the first name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:72:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "007c000f-008e-008a-0087-002b007f0031.png",
        "timestamp": 1541543234756,
        "duration": 16
    },
    {
        "description": "click on last name value|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18472,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:85:122)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:82:57)\nFrom: Task: Run it(\"click on last name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:82:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00db005e-0099-003d-00d6-00a200dd0099.png",
        "timestamp": 1541543235122,
        "duration": 25
    },
    {
        "description": "click on Postal Code Value|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18472,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: protractor_1.by.xypath is not a function",
        "trace": "TypeError: protractor_1.by.xypath is not a function\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:95:83)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:92:59)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\nFrom: Task: Run it(\"click on Postal Code Value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:92:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00190070-00ac-00fe-00aa-009200f200ed.png",
        "timestamp": 1541543235513,
        "duration": 5
    },
    {
        "description": "Click on add customer button|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18472,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:105:118)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:102:61)\nFrom: Task: Run it(\"Click on add customer button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:102:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00a40062-00a7-0097-00c1-00ba00400086.png",
        "timestamp": 1541543235852,
        "duration": 15
    },
    {
        "description": "launch and enter value in Bankmanager|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8840,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0038006e-00da-0016-0045-009200060038.png",
        "timestamp": 1541543375557,
        "duration": 0
    },
    {
        "description": "click on Bank manager login button|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8840,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)\nFrom: Task: Run it(\"click on Bank manager login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:46:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00f900fe-00af-00e7-00e9-0017009800c7.png",
        "timestamp": 1541543375972,
        "duration": 31
    },
    {
        "description": "click on add customer button|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8840,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:65:125)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:62:61)\nFrom: Task: Run it(\"click on add customer button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:62:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00940038-003b-009e-00a6-007700210035.png",
        "timestamp": 1541543376300,
        "duration": 16
    },
    {
        "description": "enter the first name value|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8840,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:75:122)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:72:59)\nFrom: Task: Run it(\"enter the first name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:72:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00710020-0060-00c5-004b-008600f40049.png",
        "timestamp": 1541543376598,
        "duration": 15
    },
    {
        "description": "click on last name value|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8840,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:85:122)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:82:57)\nFrom: Task: Run it(\"click on last name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:82:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "0032007f-0059-0014-00e1-003900fb0036.png",
        "timestamp": 1541543376911,
        "duration": 12
    },
    {
        "description": "click on Postal Code Value|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8840,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: protractor_1.by.xypath is not a function",
        "trace": "TypeError: protractor_1.by.xypath is not a function\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:95:83)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:92:59)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\nFrom: Task: Run it(\"click on Postal Code Value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:92:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00b700a6-00f2-00ae-007f-000a002e0083.png",
        "timestamp": 1541543377255,
        "duration": 0
    },
    {
        "description": "Click on add customer button|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8840,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:105:118)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:102:61)\nFrom: Task: Run it(\"Click on add customer button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:102:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00890051-008d-0056-00a9-00e1002a008f.png",
        "timestamp": 1541543377597,
        "duration": 31
    },
    {
        "description": "launch and enter value in Bankmanager|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11624,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00260029-00c7-008d-0017-00610094006b.png",
        "timestamp": 1541543398490,
        "duration": 4
    },
    {
        "description": "click on Bank manager login button|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11624,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)\nFrom: Task: Run it(\"click on Bank manager login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:46:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00d000ad-0000-00f1-00f4-00ca00ae00e4.png",
        "timestamp": 1541543398910,
        "duration": 15
    },
    {
        "description": "click on add customer button|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11624,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:65:125)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:62:61)\nFrom: Task: Run it(\"click on add customer button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:62:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "000700a2-002f-00f0-00dc-008900f9001b.png",
        "timestamp": 1541543399265,
        "duration": 0
    },
    {
        "description": "enter the first name value|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11624,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:75:122)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:72:59)\nFrom: Task: Run it(\"enter the first name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:72:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00b500a5-00e4-00f7-00b8-0062001b0027.png",
        "timestamp": 1541543399579,
        "duration": 0
    },
    {
        "description": "click on last name value|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11624,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:85:122)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:82:57)\nFrom: Task: Run it(\"click on last name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:82:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00700018-00c8-0030-008e-00ac00a2000d.png",
        "timestamp": 1541543399932,
        "duration": 0
    },
    {
        "description": "click on Postal Code Value|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11624,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: protractor_1.by.xypath is not a function",
        "trace": "TypeError: protractor_1.by.xypath is not a function\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:95:83)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:92:59)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\nFrom: Task: Run it(\"click on Postal Code Value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:92:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00230096-00de-00bb-001e-006100e300f1.png",
        "timestamp": 1541543400219,
        "duration": 16
    },
    {
        "description": "Click on add customer button|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11624,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:105:118)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:102:61)\nFrom: Task: Run it(\"Click on add customer button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:102:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "003f0040-0016-00a6-0079-003500a900d9.png",
        "timestamp": 1541543400576,
        "duration": 0
    },
    {
        "description": "launch and enter value in Bankmanager|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6364,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00f500ed-00d4-00e2-00c2-005100c8008d.png",
        "timestamp": 1541543549546,
        "duration": 0
    },
    {
        "description": "click on Bank manager login button|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6364,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)\nFrom: Task: Run it(\"click on Bank manager login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:46:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "006e005b-0038-009a-0056-00ed00c20094.png",
        "timestamp": 1541543549999,
        "duration": 31
    },
    {
        "description": "click on add customer button|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6364,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:65:125)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:62:61)\nFrom: Task: Run it(\"click on add customer button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:62:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00850060-0029-0018-0065-00b100ed00d8.png",
        "timestamp": 1541543550320,
        "duration": 47
    },
    {
        "description": "enter the first name value|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6364,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:75:122)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:72:59)\nFrom: Task: Run it(\"enter the first name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:72:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00980038-0060-0026-00d6-00da00eb0065.png",
        "timestamp": 1541543550652,
        "duration": 16
    },
    {
        "description": "click on last name value|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6364,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:85:122)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:82:57)\nFrom: Task: Run it(\"click on last name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:82:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00d40091-00e6-002b-00e9-008a00fe0019.png",
        "timestamp": 1541543551000,
        "duration": 47
    },
    {
        "description": "click on Postal Code Value|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6364,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: protractor_1.by.xypath is not a function",
        "trace": "TypeError: protractor_1.by.xypath is not a function\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:95:83)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:92:59)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\nFrom: Task: Run it(\"click on Postal Code Value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:92:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00bc0094-00f4-002c-0020-00d900fc008d.png",
        "timestamp": 1541543551378,
        "duration": 16
    },
    {
        "description": "Click on add customer button|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6364,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:105:118)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:102:61)\nFrom: Task: Run it(\"Click on add customer button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:102:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "000300ee-003b-008a-00e6-002300b900a4.png",
        "timestamp": 1541543551661,
        "duration": 31
    },
    {
        "description": "launch and enter value in Bankmanager|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9508,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0083003d-00e0-00a1-0055-000e00af0062.png",
        "timestamp": 1541792569893,
        "duration": 3
    },
    {
        "description": "click on Bank manager login button|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9508,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)\nFrom: Task: Run it(\"click on Bank manager login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:46:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00e300f6-0039-0042-009e-00de00a400dd.png",
        "timestamp": 1541792570356,
        "duration": 22
    },
    {
        "description": "click on add customer button|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9508,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:65:125)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:62:61)\nFrom: Task: Run it(\"click on add customer button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:62:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "009a006a-0014-0052-0014-0047003900f6.png",
        "timestamp": 1541792570696,
        "duration": 34
    },
    {
        "description": "enter the first name value|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9508,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:75:122)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:72:59)\nFrom: Task: Run it(\"enter the first name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:72:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00ba00b5-00ab-00be-00d9-0027000000ff.png",
        "timestamp": 1541792571078,
        "duration": 12
    },
    {
        "description": "click on last name value|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9508,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:85:122)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:82:57)\nFrom: Task: Run it(\"click on last name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:82:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "002e0081-0083-0019-00eb-00a4008000a8.png",
        "timestamp": 1541792571394,
        "duration": 60
    },
    {
        "description": "click on Postal Code Value|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9508,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: protractor_1.by.xypath is not a function",
        "trace": "TypeError: protractor_1.by.xypath is not a function\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:95:83)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:92:59)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\nFrom: Task: Run it(\"click on Postal Code Value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:92:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00ab009a-0035-00ed-00d1-00c800f60011.png",
        "timestamp": 1541792571779,
        "duration": 4
    },
    {
        "description": "Click on add customer button|Bankmanager Testing",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9508,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:105:118)\n    at step (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:32:23)\n    at Object.next (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:13:53)\n    at C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:102:61)\nFrom: Task: Run it(\"Click on add customer button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:102:5)\n    at addSpecsToSuite (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jbro1827\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jbro1827\\Desktop\\Automaiton Training\\Testproject\\xyz_bank\\xyz_bank\\spec\\Anotherts.js:39:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "003c0008-005d-00a9-0002-009600cc0042.png",
        "timestamp": 1541792572166,
        "duration": 38
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length-1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};