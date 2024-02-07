import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export default class DaysWorkedPerWeekPage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        daysWorkedPerWeekInputField: 'Days worked per week',
        continueButton: '[class$="gem-c-button--bottom-margin"]',
        daysPerWeek: '#response',
        thereIsProblemError: '.govuk-error-summary__title'
    }

    async clickContinueButton() {
        await this.base.waitAndClick(this.Elements.continueButton)
    }

    async enterDaysWorkedPerWeek(daysWorkedPerWeek: string) {
        await this.page.getByLabel(this.Elements.daysWorkedPerWeekInputField).fill(daysWorkedPerWeek)
    }

    async numberOFDaysWorkedPerWeek(daysWorkedPerWeek: string) {
        await this.page.locator(this.Elements.daysPerWeek).fill(daysWorkedPerWeek)
    }

    async pleaseAnswerThisQuestionError() {
        return await expect(this.page.locator(this.Elements.thereIsProblemError)).toBeVisible();
    }
}