import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export default class ShiftsWorkedPerPatternPage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        shiftsPerPattern: 'How many shifts will be',
        continueButton: '[class$="gem-c-button--bottom-margin"]'
    }

    async enterShiftsPerPattern(shifts: string) {
        await this.page.getByLabel(this.Elements.shiftsPerPattern).fill(shifts)
    }

    async clickContinueButton() {
        await this.base.waitAndClick(this.Elements.continueButton)
    }

}