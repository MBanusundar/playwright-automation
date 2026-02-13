/**
 * @fileoverview Login validation test suite
 * @author Banu
 */

import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';

// Test suite for login validation
test.describe('Login Validation', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    // Initialize the page object
    const loginPage = new LoginPage(page);
    
    // Navigate to login page
    console.log('Navigating to login page...');
    await loginPage.navigate();
    
    // Perform login with valid credentials
    console.log('Logging in with valid credentials...');
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    
    // Assert login is successful
    console.log('Asserting login success...');
    await expect(await loginPage.isLoginSuccessful()).toBe(true);
    console.log('✓ Login successful');
  });

  test('should show error with invalid credentials', async ({ page }) => {
    // Initialize the page object
    const loginPage = new LoginPage(page);
    
    // Navigate to login page
    console.log('Navigating to login page...');
    await loginPage.navigate();
    
    // Perform login with invalid credentials
    console.log('Logging in with invalid credentials...');
    await loginPage.login('invaliduser', 'wrongpassword');
    
    // Assert login failed
    console.log('Asserting login failure...');
    const message = await loginPage.getFlashMessage();
    await expect(message).toContain('Your username is invalid!');
    console.log('✓ Error message displayed correctly');
  });
});
