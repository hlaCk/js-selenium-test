const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().minimize();
    try {
        await driver.get('https://www.google.com/?hl=en');
        let e = await driver.findElement(By.name('q'));
        // await e.sendKeys('webdriver', Key.RETURN);

        // driver.wait(until.titleIs('webdriver - Google Search'), 3000)
        //     .then((success) => {
        //         console.log(`success: ${success}`)
        //         // driver.executeAsyncScript(`alert("success: " + ${success});`).
        //         // then(function () {
        //             // alert(JSON.stringify(arguments));
        //         // });
        //     });

        var start = new Date().getTime();
        await driver.executeAsyncScript('window.setTimeout(arguments[arguments.length - 1], 500);').
            then(()=>console.log('Elapsed time to start: ' + (new Date().getTime() - start) + ' ms'));
        

        driver.wait(driver.close(), 5 * 1000, 'Server should start within 5 seconds');
console.log('done');
    } finally {
        await driver.quit();
    }
})();
