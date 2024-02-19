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
        await this.page.getByLabel(this.Elements.daysWorkedPerWeekRadioButton).check()
        await expect(this.page.getByLabel(this.Elements.daysWorkedPerWeekRadioButton)).toBeChecked()
    }

    async selectHoursWorkedPerWeekRadioButton(){
        await this.page.getByLabel(this.Elements.hoursWorkedPerWeekRadioButton).check()
        await expect(this.page.getByLabel(this.Elements.hoursWorkedPerWeekRadioButton)).toBeChecked()
    }

    async selectCasualOrIrregularHoursRadioButton(){
        await this.page.getByLabel(this.Elements.casualOrIrregularHoursRadioButton).check()
        await expect(this.page.getByLabel(this.Elements.casualOrIrregularHoursRadioButton)).toBeChecked()
    }

    async selectAnnualisedHoursRadioButton(){
        await this.page.getByLabel(this.Elements.annualisedHoursRadioButton).check()
        await expect(this.page.getByLabel(this.Elements.annualisedHoursRadioButton)).toBeChecked()
    }

    async selectCompressedHoursRadioButton(){
        await this.page.getByLabel(this.Elements.compressedHoursRadioButton).check()
        await expect(this.page.getByLabel(this.Elements.compressedHoursRadioButton)).toBeChecked()
    }

    async selectShiftsRadioButton(){
        await this.page.getByLabel(this.Elements.shiftsRadioButton).check()
        await expect(this.page.getByLabel(this.Elements.shiftsRadioButton)).toBeChecked()
    }

    async clickContinueButton(){
        await this.base.waitAndClick(this.Elements.continueButton)
    }

}