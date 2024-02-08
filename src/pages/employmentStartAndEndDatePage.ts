import { Page } from "@playwright/test"
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers"


export default class EmploymentStartAndEndDatePage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page)
    }

    private Elements = {
        dayInputField: 'Day',
        monthInputField: 'Month',
        yearInputField: 'Year',
        continueButton: '[class$="gem-c-button--bottom-margin"]'
    }

    async clickContinueButton(){
        await this.base.waitAndClick(this.Elements.continueButton)
    }

    async enterDateMonthYear(day: string, month: string, year: string) {
        await this.page.getByLabel('Day').fill(day)
        await this.page.getByLabel('Month').fill(month)
        await this.page.getByLabel('Year').fill(year)
    }
    
    async enterStartDate(date: string) {
        const [day, month, year] = date.split('/')
        await this.enterDateMonthYear(day, month, year) 
    }
    
    async enterEndDate(date: string) {
        const [day, month, year] = date.split('/')
        await this.enterDateMonthYear(day, month, year)
    }
    

}