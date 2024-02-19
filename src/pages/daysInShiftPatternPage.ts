import { Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export default class DaysInShiftPatternPage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        daysPerPattern: 'How many days in the shift',
        continueButton: '[class$="gem-c-button--bottom-margin"]',
        errorMessage: '[class*="govuk-error-message"]'
    }

    async enterShiftsPerPattern(shifts: string) {
        await this.page.getByLabel(this.Elements.daysPerPattern).fill(shifts)
    }

    async clickContinueButton() {
        await this.base.waitAndClick(this.Elements.continueButton)
    }

}