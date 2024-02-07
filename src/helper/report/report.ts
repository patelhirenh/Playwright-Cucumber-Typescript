const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright Automation Report",
    pageTitle: "BookCart App test report",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "121",
        },
        device: "Hiren - Mac",
        platform: {
            name: "Mac",
            version: "MacOs Sonoma",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Calculate holiday entitlement" }
        ],
    },
});