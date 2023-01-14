// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('portalTest', function() {
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
  it('portalTest', async function() {
    await driver.get("https://qa.medcloud.link/")
    await driver.manage().window().setRect({ width: 2576, height: 1066 })
    await driver.findElement(By.id("headerPortal")).click()
    assert(await driver.findElement(By.css(".text-secondary:nth-child(3)")).getText() == "A sacola de exames que\\\\ncabe no seu bolso")
    await driver.close()
  })
})