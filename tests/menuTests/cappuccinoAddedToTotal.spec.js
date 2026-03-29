import { test } from '../fixtures/fixtures';

test('Check Cappuccino cost is added to Total on menu page',
  async ({ menuPage}) => {

  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.assertTotalCheckoutContainsValue(19);
});
