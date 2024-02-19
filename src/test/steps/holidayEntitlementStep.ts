import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { expect } from "@playwright/test"
import { fixture } from "../../hooks/pageFixture"
import HolidayEntitlementHomepage from "../../pages/holidayEntitlementHomepage"
import DaysWorkedPerWeekPage from "../../pages/daysWorkedPerWeekPage"
import IsTheHolidayEntitlementBasedOnPage from "../../pages/IsTheHolidayEntitlementBasedOnPage"
import DoYouWantToWorkOutHolidayPage from "../../pages/doYouWantToWorkOutHolidayPage"
import EmploymentStartAndEndDatePage from "../../pages/employmentStartAndEndDatePage"
import InformationBasedOnYourAnswerPage from "../../pages/informationBasedOnYourAnswerPage"
import HoursWorkedPerWeekPage from "../../pages/hoursWorkedPerWeekPage"
import HoursInEachShiftPage from "../../pages/hoursInEachShiftPage"
import ShiftsWorkedPerPatternPage from "../../pages/shiftsWorkedPerPatternPage"
import DaysInShiftPatternPage from "../../pages/daysInShiftPatternPage"

setDefaultTimeout(60 * 1000 * 2)

let holidayEntitlementHomepage: HolidayEntitlementHomepage
let daysWorkedPerWeekPage: DaysWorkedPerWeekPage
let isTheHolidayEntitlementBasedOnPage: IsTheHolidayEntitlementBasedOnPage
let doYouWantToWorkOutHolidayPage: DoYouWantToWorkOutHolidayPage
let employmentStartAndEndDatePage: EmploymentStartAndEndDatePage
let informationBasedOnYourAnswerPage: InformationBasedOnYourAnswerPage
let hoursWorkedPerWeekPage: HoursWorkedPerWeekPage
let hoursInEachShiftPage: HoursInEachShiftPage
let shiftsWorkedPerPatternPage: ShiftsWorkedPerPatternPage
let daysInShiftPatternPage: DaysInShiftPatternPage

Given('I am on the {string} page', async function (pageHeading) {
    await fixture.page.goto(process.env.BASEURL)
    await expect(fixture.page).toHaveTitle('Calculate holiday entitlement - GOV.UK')
    holidayEntitlementHomepage = new HolidayEntitlementHomepage(fixture.page)
    await holidayEntitlementHomepage.acceptCookies()
    await holidayEntitlementHomepage.selectHideMessage()
    await expect(fixture.page.getByRole('heading', { name: 'Calculate holiday entitlement' })).toContainText(pageHeading)
    
})

When('I click on start now button', async function () {
    await holidayEntitlementHomepage.clickStartNow()
})

When('I select days worked per week', async function () {
    await expect(fixture.page).toHaveTitle('Is the holiday entitlement based on: - Calculate holiday entitlement - GOV.UK')
    isTheHolidayEntitlementBasedOnPage = new IsTheHolidayEntitlementBasedOnPage(fixture.page)
    await isTheHolidayEntitlementBasedOnPage.selectDaysWorkedPerWeekRadioButton()
    await isTheHolidayEntitlementBasedOnPage.clickContinueButton()
})

When('I select for employee starting and leaving part way through a leave year', async function () {
    await expect(fixture.page).toHaveTitle('Do you want to work out holiday: - Calculate holiday entitlement - GOV.UK')
    doYouWantToWorkOutHolidayPage = new DoYouWantToWorkOutHolidayPage(fixture.page)
    await doYouWantToWorkOutHolidayPage.selectStartingAndLeavingPartWayThroughRadioButton()
    await doYouWantToWorkOutHolidayPage.clickContinueButton()
})

When('I enter the following details for start date and end date:', async function (dataTable) {
    await expect(fixture.page).toHaveTitle('What was the employment start date? - Calculate holiday entitlement - GOV.UK')
    employmentStartAndEndDatePage = new EmploymentStartAndEndDatePage(fixture.page)
    const data = dataTable.rowsHash()
    const startDate = data['Start Date']
    const endDate = data['End Date']
    await employmentStartAndEndDatePage.enterStartDate(startDate) 
    await employmentStartAndEndDatePage.clickContinueButton()
    await employmentStartAndEndDatePage.enterEndDate(endDate) 
    await employmentStartAndEndDatePage.clickContinueButton()
})

When('I enter the {string} as number of days worked per week', async function (days) {
    daysWorkedPerWeekPage = new DaysWorkedPerWeekPage(fixture.page)
    await daysWorkedPerWeekPage.enterDaysWorkedPerWeek(days)
}) 

When('I click continue to Calculate the holidays', async function () {
    daysWorkedPerWeekPage = new DaysWorkedPerWeekPage(fixture.page)
    await daysWorkedPerWeekPage.clickContinueButton()
})


Then('the system should display the correct holiday entitlement', async function () {
    await expect(fixture.page).toHaveTitle('Outcome - Calculate holiday entitlement - GOV.UK')

})

Then('the result should match the expected entitlement for the given dates', async function () {
    informationBasedOnYourAnswerPage = new InformationBasedOnYourAnswerPage(fixture.page)
    const summary = fixture.page.locator(informationBasedOnYourAnswerPage.Elements.resultSummary)
    await expect(summary).toContainText('23.4')
    
})

When('I select hours worked per week', async function () {
    await expect(fixture.page).toHaveTitle('Is the holiday entitlement based on: - Calculate holiday entitlement - GOV.UK')
    isTheHolidayEntitlementBasedOnPage = new IsTheHolidayEntitlementBasedOnPage(fixture.page)
    await isTheHolidayEntitlementBasedOnPage.selectHoursWorkedPerWeekRadioButton()
    await isTheHolidayEntitlementBasedOnPage.clickContinueButton()
})

When('I select for employee leaving part way through a leave year', async function () {
    await expect(fixture.page).toHaveTitle('Do you want to work out holiday: - Calculate holiday entitlement - GOV.UK')
    doYouWantToWorkOutHolidayPage = new DoYouWantToWorkOutHolidayPage(fixture.page)
    await doYouWantToWorkOutHolidayPage.selectLeavingPartWayThroughRadioButton()
    await doYouWantToWorkOutHolidayPage.clickContinueButton()
})

When('I enter the employee end date:', async function (dataTable) {
    await expect(fixture.page).toHaveTitle('What was the employment end date? - Calculate holiday entitlement - GOV.UK')
    employmentStartAndEndDatePage = new EmploymentStartAndEndDatePage(fixture.page)
    const data = dataTable.rowsHash()
    const endDate = data['End Date']
    await employmentStartAndEndDatePage.enterEndDate(endDate) 
    await employmentStartAndEndDatePage.clickContinueButton()
})

When('I enter the leave year start:', async function (dataTable) {
    await expect(fixture.page).toHaveTitle('When does the leave year start? - Calculate holiday entitlement - GOV.UK')
    employmentStartAndEndDatePage = new EmploymentStartAndEndDatePage(fixture.page)
    const data = dataTable.rowsHash()
    const startDate = data['Leave year start date']
    await employmentStartAndEndDatePage.enterStartDate(startDate) 
    await employmentStartAndEndDatePage.clickContinueButton()
})

When('I enter the {string} as number of hours worked per week', async function (hours) {
    await expect(fixture.page).toHaveTitle('Number of hours worked per week? - Calculate holiday entitlement - GOV.UK')
    hoursWorkedPerWeekPage = new HoursWorkedPerWeekPage(fixture.page)
    await hoursWorkedPerWeekPage.enterNumberOfHoursPerWeek(hours)
    await hoursWorkedPerWeekPage.clickContinueButton()
})

When('I enter {string} as number of days worked per week', async function (days) {
    daysWorkedPerWeekPage = new DaysWorkedPerWeekPage(fixture.page)
    await daysWorkedPerWeekPage.enterDaysWorkedPerWeek(days)
    await daysWorkedPerWeekPage.clickContinueButton()
})

Then('I should see the correct holiday entitlement displayed', async function () {
    informationBasedOnYourAnswerPage = new InformationBasedOnYourAnswerPage(fixture.page)
    const summary = fixture.page.locator(informationBasedOnYourAnswerPage.Elements.resultSummary)
    await expect(summary).toContainText('75 hours holiday')
})

When('I select shifts', async function () {
    await expect(fixture.page).toHaveTitle('Is the holiday entitlement based on: - Calculate holiday entitlement - GOV.UK')
    isTheHolidayEntitlementBasedOnPage = new IsTheHolidayEntitlementBasedOnPage(fixture.page)
    await isTheHolidayEntitlementBasedOnPage.selectShiftsRadioButton()
    await isTheHolidayEntitlementBasedOnPage.clickContinueButton()
});

Then('I select for a full year', async function () {
    await expect(fixture.page).toHaveTitle('Do you want to calculate the holiday: - Calculate holiday entitlement - GOV.UK')
    doYouWantToWorkOutHolidayPage = new DoYouWantToWorkOutHolidayPage(fixture.page)
    await doYouWantToWorkOutHolidayPage.selectForAFullLeaveYearRadioButton()
    await doYouWantToWorkOutHolidayPage.clickContinueButton()
});

When('I enter {string} hours per shift', async function (hours) {
    await expect(fixture.page).toHaveTitle('How many hours in each shift? - Calculate holiday entitlement - GOV.UK')
    hoursInEachShiftPage = new HoursInEachShiftPage(fixture.page)
    await hoursInEachShiftPage.enterHoursPerShift(hours)
    await hoursInEachShiftPage.clickContinueButton()
});

When('I enter {string} shifts per shift pattern', async function (shifts) {
    await expect(fixture.page).toHaveTitle('How many shifts will be worked per shift pattern? - Calculate holiday entitlement - GOV.UK')
    shiftsWorkedPerPatternPage = new ShiftsWorkedPerPatternPage(fixture.page)
    await shiftsWorkedPerPatternPage.enterShiftsPerPattern(shifts)
    await shiftsWorkedPerPatternPage.clickContinueButton()
});

When('I enter {string} days in shift pattern', async function (days) {
    await expect(fixture.page).toHaveTitle('How many days in the shift pattern? - Calculate holiday entitlement - GOV.UK')
    daysInShiftPatternPage = new DaysInShiftPatternPage(fixture.page)
    await daysInShiftPatternPage.enterShiftsPerPattern(days)
    await daysInShiftPatternPage.clickContinueButton()
});

Then('I should see the correct holiday entitlement for shift pattern', async function () {
    informationBasedOnYourAnswerPage = new InformationBasedOnYourAnswerPage(fixture.page)
    const summary = fixture.page.locator(informationBasedOnYourAnswerPage.Elements.resultSummary)
    await expect(summary).toContainText(' 28 shifts for the year')
});

When('I leave hours of shift blank', async function () {
    
});


When('I click on continue button', async function () {
    daysInShiftPatternPage = new DaysInShiftPatternPage(fixture.page)
    await daysInShiftPatternPage.clickContinueButton()
});

Then('I should see the error {string}', async function (string) {
    daysInShiftPatternPage = new DaysInShiftPatternPage(fixture.page)
    const errorMessage = fixture.page.locator(daysInShiftPatternPage.Elements.errorMessage)
    const errorMessage1: string | null = await errorMessage?.textContent();
    await expect(errorMessage1).toContain(string)

});