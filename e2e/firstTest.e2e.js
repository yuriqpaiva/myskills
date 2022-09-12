describe('Home', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should be able to register a new skill', async () => {
    // Select components
    const inputNewSkill = await element(by.id('input-new'));
    const buttonAdd = await element(by.id('button-add'));
    const flatListSkills = await element(by.id('flat-list-skills'));

    // Tap and type keyboard text
    await inputNewSkill.tap();
    await inputNewSkill.typeText('React Native\n');

    // Tap on button
    await buttonAdd.tap();

    await flatListSkills.tap();

    await expect(flatListSkills).toBeVisible();
  });
});
