# Playwright UI Automation Framework

A minimal, scalable end-to-end UI automation framework using Playwright Test with Page Object Model.

## Quick Start

```bash
# Install dependencies
npm install

# Install browsers
npx playwright install

# Run tests
npm test

# View report
npm run report
```

## Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)

## Running Tests

**All browsers:**
```bash
npm test
```

**Headed mode (see browser):**
```bash
npm run test:headed
```

**Specific browser:**
```bash
npx playwright test --project=chromium
```

**Debug mode:**
```bash
npx playwright test --debug
```

## View Reports

**HTML Report:**
```bash
npm run report
```

**Allure Report:**
```bash
npm run allure:generate
npm run allure:open
```

## Project Structure

```
playwright-framework/
├── pages/                    # Page Object Model classes
│   ├── BasePage.js          # Base class with common methods
│   ├── CheckboxesPage.js    # Checkboxes page object
│   └── LoginPage.js         # Login page object
├── tests/                   # Test specifications
│   ├── checkboxes.spec.js   # Checkbox tests (1 test)
│   └── login.spec.js        # Login tests (2 tests)
├── .github/workflows/       # CI/CD configuration
├── playwright.config.js     # Playwright configuration
├── package.json             # Dependencies and scripts
└── .env.example             # Environment variables template
```

## Features

✅ **Page Object Model** - Clean separation of test logic and page interactions
✅ **Cross-browser testing** - Chromium, Firefox, WebKit
✅ **Environment configuration** - `.env` file support for different environments
✅ **CI/CD ready** - GitHub Actions workflow included
✅ **Multiple reporters** - HTML and Allure reports
✅ **Auto-screenshots** - Captures screenshots on test failure
✅ **No flaky waits** - Uses Playwright's auto-waiting

## Test Cases

**Total: 3 tests**

1. **Checkboxes Test** - Validates checkbox selection functionality
2. **Login Success Test** - Tests valid login credentials
3. **Login Failure Test** - Tests invalid login credentials

## Configuration

**Change environment:**
```bash
cp .env.example .env
# Edit .env and set BASE_URL=your_url
```

**Default URL:** https://the-internet.herokuapp.com

## Enhancements Implemented

✅ **Environment-based configuration** - Use `.env` file to switch between dev/staging/prod
✅ **Login test cases** - Added positive and negative login scenarios
✅ **GitHub Actions CI** - Auto-run tests on push across all browsers
✅ **BasePage pattern** - Reusable methods for all page objects
