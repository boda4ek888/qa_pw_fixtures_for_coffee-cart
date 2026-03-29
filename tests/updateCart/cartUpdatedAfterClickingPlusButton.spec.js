import { test } from '../fixtures/fixtures';

test('Assert cart updated correctly after clicking plus for drinks',
  async ({ menuPage, cartPage }) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(10);

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(20);
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(19);

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(38);
  await cartPage.assertEspressoTotalCostContainsCorrectText(20);

  await cartPage.assertTotalCheckoutContainsValue(58);
});
