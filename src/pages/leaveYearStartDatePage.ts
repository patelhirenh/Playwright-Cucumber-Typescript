import { Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export default class LeaveYearStartDatePage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        dayInputField: 'Day',
        monthInputField: 'Month',
        yearInputField: 'Year',
        continueButton: '[type="submit"]'
    }
}