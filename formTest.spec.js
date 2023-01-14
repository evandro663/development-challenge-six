// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('formTest', function() {
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
  it('formTest', async function() {
    await driver.get("https://qa.medcloud.link/")
    await driver.manage().window().setRect({ width: 2576, height: 1066 })
    await driver.findElement(By.css(".h-full > .text-white")).click()
    await driver.findElement(By.id("name")).click()
    await driver.findElement(By.id("name")).sendKeys("Teste")
    await driver.findElement(By.id("email")).sendKeys("teste@teste.com")
    await driver.findElement(By.id("phone")).sendKeys("999999999")
    await driver.findElement(By.id("pos")).click()
    {
      const dropdown = await driver.findElement(By.id("pos"))
      await dropdown.findElement(By.xpath("//option[. = 'Administrador']")).click()
    }
    await driver.findElement(By.css(".mt-8 > .xxl\\3Atext-base")).click()
    await driver.findElement(By.css(".sm\\3Ainline")).click()
    assert(await driver.findElement(By.css(".sm\\3Ainline")).getText() == "Trial solicitado com sucesso!")
    await driver.close()
  })
})