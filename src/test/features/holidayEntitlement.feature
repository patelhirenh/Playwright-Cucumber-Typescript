Feature: Calculate Holiday Entitlement on the government website

    Background:
        Given I am on the "Calculate holiday entitlement" page
        When I click on start now button

    Scenario: Calculate holiday entitlement for an employee who started and left part way through a leave year
        And I select days worked per week
        And I select for employee starting and leaving part way through a leave year
        And I enter the following details for start date and end date:
            | Start Date | 01/02/2023 |
            | End Date   | 01/12/2023 |
        And I enter the "5" as number of days worked per week
        And I click continue to Calculate the holidays
        Then the system should display the correct holiday entitlement
        And the result should match the expected entitlement for the given dates

    Scenario: Calculate holiday entitlement for an employee who left part way through a leave year
        And I select hours worked per week
        And I select for employee leaving part way through a leave year
        And I enter the employee end date:
            | End Date   | 01/12/2023 |
        And I enter the leave year start:
            | Leave year start date | 01/04/2023|
        And I enter the "20" as number of hours worked per week
        And I enter "3" as number of days worked per week
        Then I should see the correct holiday entitlement displayed

    Scenario: Calculate holiday entitlement for an employee for a full leave year
        And I select shifts
        And I select for a full year
        And I enter "10" hours per shift
        And I enter "5" shifts per shift pattern
        And I enter "5" days in shift pattern
        Then I should see the correct holiday entitlement for shift pattern 
