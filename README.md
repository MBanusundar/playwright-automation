node -# Playwright UI Automation Framework

A minimal, scalable end-to-end UI automation framework using Playwright Test.

## Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)

## Installation

1. Navigate to the project directory:
```bash
cd playwright-framework
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

Execute tests across all browsers (Chromium, Firefox, WebKit):
```bash
npm test
```

Run tests in headed mode (see browser):
```bash
npm run test:headed
```

Run tests on a specific browser:
```bash
npx playwright test --project=chromium
```

## View HTML Report

After test execution, view the HTML report:
```bash
npm run report
```

## View Allure Report

Generate and view Allure report:
```bash
npm run allure:generate
npm run allure:open
```

## Project Structure

```
playwright-framework/
├── package.json              # Dependencies and scripts
├── playwright.config.js      # Playwright configuration
├── pages/                    # Page Object Model classes
│   └── CheckboxesPage.js     # Checkboxes page object
├── tests/                    # Test specifications
│   └── checkboxes.spec.js    # Checkbox validation test
└── README.md                 # This file
```

## Design Rationale

### Page Object Model (POM)
- **Encapsulation**: All locators and page-specific actions are contained in `CheckboxesPage.js`
- **Reusability**: Page methods can be reused across multiple tests
- **Maintainability**: Locator changes only require updates in one place

### Locator Strategy
- Used `input[type="checkbox"]` CSS selector for stability
- Indexed access via `nth()` for specific checkbox targeting
- Avoids brittle XPath selectors

### Test Design
- **Declarative intent**: Test reads like requirements (ensure checked, assert checked)
- **No arbitrary waits**: Playwright's auto-waiting handles synchronization
- **Clear assertions**: Explicit validation of both checkboxes at the end

### Configuration
- **Cross-browser**: Configured for Chromium, Firefox, and WebKit
- **HTML & Allure reporting**: Built-in HTML reporter and Allure for rich test reports
- **Base URL**: Centralized in config for easy environment switching
- **Trace on retry**: Debugging support without overhead on passing tests

## Test Scenario

**Target**: https://the-internet.herokuapp.com/checkboxes

**Steps**:
1. Navigate to checkboxes page
2. Ensure first checkbox is checked (toggle if needed)
3. Ensure second checkbox is checked
4. Assert both checkboxes are checked

## Next Improvement

**Environment-based configuration**: Introduce `.env` file support to externalize the `baseURL` and other environment-specific settings. This would allow running tests against different environments (dev, staging, production) without code changes.

Implementation approach:
- Add `dotenv` package
- Create `.env` file for environment variables
- Update `playwright.config.js` to read from `process.env.BASE_URL`
- Add `.env.example` template for team members

## Additional Notes

- No `node_modules/` committed (listed in `.gitignore`)
- No arbitrary `waitForTimeout` used
- Minimal code with maximum clarity
- Ready for CI/CD integration
