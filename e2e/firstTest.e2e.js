describe('My first e2e test', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should register a new skill', async () => {
    const inputSkill = await element(by.id('input-skill'));
    const addButton = await element(by.id('add-button'));
    const flatlistSkills = await element(by.id('flatlist-skills'));

    await inputSkill.tap();
    await inputSkill.typeText('React Native');
    await addButton.tap();
    await flatlistSkills.tap();

    expect(element(by.id('flatlist-skills'))).toBeVisible();
  });
});
