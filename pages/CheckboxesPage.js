import BasePage from './BasePage.js';

export default class CheckboxesPage extends BasePage {
  constructor(page) {
    super(page);
    this.checkboxes = page.locator('input[type="checkbox"]');
  }

  async navigate() {
    await super.navigate('/checkboxes');
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
