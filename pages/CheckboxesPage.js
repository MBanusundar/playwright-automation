/**
 * @fileoverview Page Object Model for Checkboxes page
 * @author Banu
 * @version 1.0.0
 * @description Encapsulates locators and actions for checkbox interactions
 */

class CheckboxesPage {
  constructor(page) {
    this.page = page;
    this.checkboxes = page.locator('input[type="checkbox"]');
  }

  async navigate() {
    await this.page.goto('/checkboxes');
  }

  async isChecked(index) {
    return await this.checkboxes.nth(index).isChecked();
  }

  async ensureChecked(index) {
    const checkbox = this.checkboxes.nth(index);
    const isChecked = await checkbox.isChecked();
    if (!isChecked) {
      await checkbox.check();
    }
  }
}

export default CheckboxesPage;
