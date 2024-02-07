import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export default class DoYouWantToWorkOutHolidayPage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        forAFullLeaveYearRadioButton: 'for a full leave year',
        startingPartWayThroughRadioButton: 'for someone starting part way through a leave year',
        leavingPartWayThroughRadioButton: 'for someone leaving part way through a leave year',
        startingAndLeavingPartWayThroughRadioButton: 'for someone starting and leaving part way through a leave year',
        continueButton: '[class$="gem-c-button--bottom-margin"]'
    }

    async selectForAFullLeaveYearRadioButton(){
        await this.page.getByLabel('for a full leave year').check()
        await expect(this.page.getByLabel('for a full leave year')).toBeChecked()
    }

    async selectStartingPartWayThroughRadioButton(){
        await this.page.getByLabel('for someone starting part way through a leave year').check()
        await expect(this.page.getByLabel('for someone starting part way through a leave year')).toBeChecked()
    }

    async selectLeavingPartWayThroughRadioButton(){
        await this.page.getByLabel('for someone leaving part way through a leave year').check()
        await expect(this.page.getByLabel('for someone leaving part way through a leave year')).toBeChecked()
    }

    async selectStartingAndLeavingPartWayThroughRadioButton(){
        await this.page.getByLabel('for someone starting and leaving part way through a leave year').check()
        await expect(this.page.getByLabel('for someone starting and leaving part way through a leave year')).toBeChecked()
    }

    async clickContinueButton(){
        await this.base.waitAndClick(this.Elements.continueButton)
    }

}