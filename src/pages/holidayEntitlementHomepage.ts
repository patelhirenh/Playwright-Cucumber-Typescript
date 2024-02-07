import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export default class HolidayEntitlementHomepage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        acceptCookiesButton: '[data-accept-cookies="true"] ',
        hideMessageButton: '[data-hide-cookie-banner="true"]', 
        startButton: '[data-govuk-button-module-started="true"]'
    }

    async acceptCookies() {
        await this.base.waitAndClick(this.Elements.acceptCookiesButton);
    }

    async selectHideMessage() {
        await this.base.waitAndClick(this.Elements.hideMessageButton);
    }

    async clickStartNow() {
        await this.base.waitAndClick(this.Elements.startButton);
    }

}