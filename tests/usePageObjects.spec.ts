import {test, expect} from "@playwright/test";
import {PageManager} from "../page-objects/pageManager";
import {faker} from '@faker-js/faker'

test.beforeEach(async({page}) => {
    await page.goto('/')
})

test('Navigate to first page @Smoke @regression', async ({page}) => {
    const pm = new PageManager(page)
    await pm.navigateTo.formLayoutsPage()
    await pm.navigateTo.datePickerPage()
    await pm.navigateTo.smartTablePage()
    await pm.navigateTo.toastrPage()
    await pm.navigateTo.toolTipsPage()
})

test('Parametrized methods @Smoke', async ({page}) => {
   const pm = new PageManager(page)
   const randomFullName = faker.person.fullName()
   const randomEmail = `${randomFullName.replace(/ /g, "")}${faker.number.int(1000)}@test.com`

   await pm.navigateTo.formLayoutsPage()
   await pm.onFormsLayoutsPage.submitUsingTheGridFormWithCredentialsAndSelectOption(process.env.USERNAME, process.env.PASSWORD, 'Option 2')
//   await page.screenshot({path: 'screenshots/formLayoutsPage.png'}) *create screenshot
//   const buffer = await page.screenshot() *convert screenshot into binary
//   console.log(buffer.toString('base64')) *print converted screenshot
   await pm.onFormsLayoutsPage.submitInLineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, false)
//   await page.locator('nb-card', {hasText: "Inline form"}).screenshot({path: 'screenshots/inLineForm.png'}) *create screenshot
//   await pm.navigateTo.datePickerPage()
//   await pm.onDatepickerPage.selectCommonDatePickerDateFromToday(10)
//   await pm.onDatepickerPage.selectDatePickerWithRangeFromToday(6, 15)
})

test.only('Testing with argosci', async ({page}) => {
    const pm = new PageManager(page)
    await pm.navigateTo.formLayoutsPage()
    await pm.navigateTo.datePickerPage()
})
