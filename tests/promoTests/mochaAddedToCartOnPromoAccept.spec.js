import { test } from '../fixtures/fixtures';

test('Assert discounted Mocha added to the Cart after promo accepting',
  async ({ menuPage, cartPage
}) => {

  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(10);
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(4);
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(19);
  await cartPage.assertAmericanoTotalCostContainsCorrectText(7);
});
