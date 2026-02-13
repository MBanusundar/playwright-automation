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

4. Configure environment (optional):
```bash
cp .env.example .env
# Edit .env to set BASE_URL for different environments
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
├── .github/
│   └── workflows/
│       └── playwright.yml    # CI/CD workflow
├── package.json              # Dependencies and scripts
├── playwright.config.js      # Playwright configuration
├── .env.example              # Environment variables template
├── pages/                    # Page Object Model classes
│   ├── CheckboxesPage.js     # Checkboxes page object
│   └── LoginPage.js          # Login page object
├── tests/                    # Test specifications
│   ├── checkboxes.spec.js    # Checkbox validation test
│   └── login.spec.js         # Login validation test
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
- **Base URL**: Centralized in config with environment variable support
- **Trace on retry**: Debugging support without overhead on passing tests
- **CI/CD**: GitHub Actions workflow for automated testing across browsers

## Test Scenarios

### Checkboxes Test
**Target**: https://the-internet.herokuapp.com/checkboxes

**Steps**:
1. Navigate to checkboxes page
2. Ensure first checkbox is checked (toggle if needed)
3. Ensure second checkbox is checked
4. Assert both checkboxes are checked

### Login Test
**Target**: https://the-internet.herokuapp.com/login

**Steps**:
1. Navigate to login page
2. Enter valid/invalid credentials
3. Submit login form
4. Assert success/error message

## Bonus Features Implemented

✅ **Environment-based configuration**: `.env` file support for `BASE_URL` and environment-specific settings

✅ **Additional test cases**: Login flow with positive and negative scenarios

✅ **GitHub Actions CI workflow**: Automated testing across Chromium, Firefox, and WebKit on every push

## Next Improvement

**ESLint + Prettier integration**: Add code linting and formatting for consistent code style across the team.

Implementation approach:
- Add `eslint` and `prettier` packages
- Create `.eslintrc.js` and `.prettierrc` configuration files
- Add npm scripts for linting and formatting
- Integrate with pre-commit hooks using `husky`

## Additional Notes

- No `node_modules/` committed (listed in `.gitignore`)
- No arbitrary `waitForTimeout` used
- Minimal code with maximum clarity
- Ready for CI/CD integration
