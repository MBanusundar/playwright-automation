/**
 * @fileoverview Checkbox validation test suite
 * @author Banu
 */

import { test, expect } from '@playwright/test';
import CheckboxesPage from '../pages/CheckboxesPage.js';

// Test suite for checkbox validation
test.describe('Checkboxes Validation', () => {
  test('should ensure both checkboxes are checked', async ({ page }) => {
    // Initialize the page object with the browser page
    const checkboxesPage = new CheckboxesPage(page);
    
    // Navigate to the checkboxes page
    console.log('Navigating to checkboxes page...');
    await checkboxesPage.navigate();
    
    // Ensure first checkbox (index 0) is checked
    await checkboxesPage.ensureChecked(0);
    // Ensure second checkbox (index 1) is checked
    await checkboxesPage.ensureChecked(1);
    
    // Assert first checkbox is checked
    await expect(await checkboxesPage.isChecked(0)).toBe(true);
    console.log('✓ First checkbox is checked');
    
    // Assert second checkbox is checked
    await expect(await checkboxesPage.isChecked(1)).toBe(true);
    console.log('✓ Second checkbox is checked');
  });
});
