import { expect, Page } from "@playwright/test"
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers"


export default class IsTheHolidayEntitlementBasedOnPage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page)
    }

    private Elements = {
        daysWorkedPerWeekRadioButton: 'days worked per week',
        hoursWorkedPerWeekRadioButton: 'hours worked per week',
        casualOrIrregularHoursRadioButton: 'casual or irregular hours, including zero hours contracts',
        annualisedHoursRadioButton: 'annualised hours',
        compressedHoursRadioButton: 'compressed hours',
        shiftsRadioButton: 'shifts',
        continueButton: '[class$="gem-c-button--bottom-margin"]'
    }

    async selectDaysWorkedPerWeekRadioButton(){
        await this.page.getByLabel('days worked per week').check()
        await expect(this.page.getByLabel('days worked per week')).toBeChecked()
    }

    async selectHoursWorkedPerWeekRadioButton(){
        await this.page.getByLabel('hours worked per week').check()
        await expect(this.page.getByLabel('hours worked per week')).toBeChecked()
    }

    async selectCasualOrIrregularHoursRadioButton(){
        await this.page.getByLabel('casual or irregular hours, including zero hours contracts').check()
        await expect(this.page.getByLabel('casual or irregular hours, including zero hours contracts')).toBeChecked()
    }

    async selectAnnualisedHoursRadioButton(){
        await this.page.getByLabel('annualised hours').check()
        await expect(this.page.getByLabel('annualised hours')).toBeChecked()
    }

    async selectCompressedHoursRadioButton(){
        await this.page.getByLabel('compressed hours').check()
        await expect(this.page.getByLabel('compressed hours')).toBeChecked()
    }

    async selectShiftsRadioButton(){
        await this.page.getByLabel('shifts').check()
        await expect(this.page.getByLabel('shifts')).toBeChecked()
    }

    async clickContinueButton(){
        await this.base.waitAndClick(this.Elements.continueButton)
    }

}