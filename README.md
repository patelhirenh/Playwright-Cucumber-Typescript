# Playwright with Typescript

## Overview of the Framework
This framework utilizes Playwright to implement a Behavior-Driven Development (BDD) approach using TypeScript. Below is the directory structure for the framework.

```bash
Project Root
├── config
│   └── cucumber.js                   # Manages Cucumber configurations
├── node_modules
├── src
│   ├── helper
│   │   ├── browsers
│   │   │   └── browserManager.ts     # Manages browser instances
│   │   ├── env
│   │   │   └── .env.prod             # Environment configuration file for production
│   │   ├── report
│   │   │   └── report.ts             # Reporting configuration
│   │   ├── types
│   │   │   └── env.d.ts              # Declaration of type definitions for environment variables
│   │   ├── util
│   │   │   ├── test-data             # Stores test data
│   │   │   └── logger.ts             # Configures logging options for Winston
│   │   └── wrapper
│   │       ├── assert.ts             # Custom assertion functions
│   │       ├── playwrightWrappers.ts # Wrappers for Playwright functions
│   │       └── hooks                 # Cucumber hooks and page fixtures
│   ├── pages                         # Page objects declaration
│   ├── test
│   │   ├── features                  # Cucumber feature files
│   │   └── steps                     # Cucumber step definitions
│   └── test-result                   # Test results directory
├── .gitignore                        # Git ignore file
├── @rerun.txt                        # Rerun file for failed tests
├── cucumber.json                     # Cucumber configuration file
├── package-lock.json                 # Package lock file
├── package.json                      # Project dependencies and scripts
├── README.md                         # Project documentation
└── tsconfig.json                     # TypeScript configuration file
```

1. Comprehensive report containing screenshots, videos, and logs.
2. Running tests across various environments.
3. Concurrent execution of tests.
4. Automatically re-running failed features.
5. Retry mechanism for failed tests in continuous integration.
6. Implementation of the Page Object Model.

## Installation
Clone the project:
```bash
    git clone https://github.com/patelhirenh/Playwright-Cucumber-Typescript.git
```

## Install dependencies:
```bash
    npm install
```
## To run test
```bash
    npm run test
```
## To run specific test
```bash
    paths: [
            "src/test/features/featurename.feature"
           ] 
```
## Use tags to run a specific or collection of specs
```bash
npm run test --TAGS="@test or @add"
```

## Reports
Upon completion of the test run, the report will be automatically generated and accessible at /test-results/reports/index.html.

## Test result screenshot
![Screenshot 2024-02-07 at 22 07 05](https://github.com/patelhirenh/Playwright-Cucumber-Typescript/assets/35804943/3b67bd17-40a6-4e78-b945-d177b11519d6)

