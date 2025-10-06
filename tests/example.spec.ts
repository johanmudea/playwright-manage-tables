import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://cosmocode.io/automation-practice-webtable/');

  const tableContainer = await page.locator("xpath=//table[@id='countries']")

  const rows = await tableContainer.locator("xpath=.//tr").all()

  console.log(rows.length)

  const countries: Country[]=[]
  
  for(let row of rows){
    let country:Country={
        name:await row.locator('xpath=.//td[2]').innerText(),
        capital:await row.locator('xpath=.//td[3]').innerText(),
        currency:await row.locator('xpath=.//td[4]').innerText(),
        primaryLanguage:await row.locator('xpath=.//td[5]').innerText(),

    }

    countries.push(country)

  }
/*
  for(let country of countries){
    console.log(country)
  }*/

  const contryWhereSpeakEnglish = countries.filter(country=> country.primaryLanguage ==="English")

  const contryWhereSpeaksSpanish = countries.filter(country=> country.primaryLanguage ==="Spanish")


  console.log("contry Where Speak English is :",contryWhereSpeaksSpanish)




  /*for(let row of rows){
    console.log(await row.innerText())
  }*/

    const row1 = rows.at(1)

    const countryName = await row1?.locator('xpath=.//td[2]').innerText()
    const countryCapital = await row1?.locator('xpath=.//td[3]').innerText()
    const countryCurrency = await row1?.locator('xpath=.//td[4]').innerText()

    console.log(countryName,countryCapital,countryCurrency)

    interface Country{
      name?:string // Si quiero que me lo envie siempre o no en le pongo ?
      capital:string
      currency:string
      primaryLanguage:string
    }

});

  /**
   * 
   * Contenedor:   //table[@id="countries"]
   * 
   * 
   * check: //table[@id="countries"]//tr[2]/td[1]
   * contry://table[@id="countries"]//tr[2]/td[2]
   * capital: //table[@id="countries"]//tr[2]/td[3]
   * currency://table[@id="countries"]//tr[2]/td[4]
   * primary language//table[@id="countries"]//tr[2]/td[5]
   * 
   * 
   */
