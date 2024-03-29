import { Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export default class HoursInEachShiftPage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        hoursPerShift: 'How many hours in each shift?',
        continueButton: '[class$="gem-c-button--bottom-margin"]',
        thereIsProblemError: '[class$="govuk-error-message"]'
    }

    async enterHoursPerShift(hoursPerShift: string) {
        await this.page.getByLabel(this.Elements.hoursPerShift).fill(hoursPerShift)
    }

    async clickContinueButton() {
        await this.base.waitAndClick(this.Elements.continueButton)
    }

}