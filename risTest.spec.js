// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('risTest', function() {
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
  it('risTest', async function() {
    await driver.get("https://qa.medcloud.link/")
    await driver.manage().window().setRect({ width: 2576, height: 1066 })
    await driver.findElement(By.id("headerRis")).click()
    assert(await driver.findElement(By.css("#RIS > .sm\\3Atext-mob10xl")).getText() == "Um RIS pensado para\\\\na sua gestão")
    await driver.close()
  })
})
