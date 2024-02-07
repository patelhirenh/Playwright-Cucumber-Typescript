import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export default class HoursWorkedPerWeekPage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        numberOfHoursPerWeek: 'Number of hours worked per',
        continueButton: '[class$="gem-c-button--bottom-margin"]'
    }

    async enterNumberOfHoursPerWeek(hoursWorkedPerWeek: string) {
        await this.page.getByLabel(this.Elements.numberOfHoursPerWeek).fill(hoursWorkedPerWeek)
        await this.base.waitAndClick(this.Elements.continueButton)
    }

    async clickContinueButton() {
        await this.base.waitAndClick(this.Elements.continueButton)
    }
}