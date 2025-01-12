// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('loadTest', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('loadTest', async function() {
    await driver.get("https://qa.medcloud.link/")
    await driver.manage().window().setRect({ width: 2576, height: 1066 })
    await driver.findElement(By.css(".sm\\3Atext-mob11xl")).click()
    assert(await driver.findElement(By.css(".sm\\3Atext-mob11xl")).getText() == "Seus exames\\\\nna nuvem")
    assert(await driver.findElement(By.css(".sm\\3Atext-mob11xl")).getText() == "Seus exames\\\\nna nuvem")
    await driver.close()
  })
})
