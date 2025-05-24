import { test, expect } from '@playwright/test';

test('should complete checkout with mocked POST API to localhost:5001/api/v1/checkout', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.click('button:text("Discovery our Collection")');
  await page.click('span:text("Add To Cart")');
  await page.click('span:text("Add To Cart")');
  await page.click('span:text("Add To Cart")');
  await page.click('div.cart-btn');
  await page.click('button:text("Check-out")');
  await page.click('button:text("Check-out")');
  await page.fill('input[placeholder="Email"]', 'John5232@gmail.com');
  await page.fill('input[placeholder="Name"]', 'John');
  await page.fill('input[placeholder="Second Name"]', 'Doe');
  await page.fill('input[placeholder="Address and number"]', '123 Main St');
  await page.fill('input[placeholder="Postal Code"]', '12345');
  await page.fill('input[placeholder="Country"]', 'USA');
  await page.fill('input[placeholder="Province"]', 'California');
  await page.fill('input[placeholder="City"]', 'Los Angeles');

  await page.click('button:text("Go To Shipping")');
  await page.click('button:text("Go to Payment")');

  await page.fill('input[placeholder="Card Number"]', '4111111111111111');
  await page.fill('input[placeholder="Holder Name"]', 'John Doe');
  await page.fill('input[placeholder="EXP (MM/YY)"]', '12/23');
  await page.fill('input[placeholder="CVV"]', '123');
  await page.click('button:text("Confimartion")');

  await page.route('**/api/v1/checkout', (route) => {
    route.fulfill({
      status: 200,
      body: JSON.stringify({ success: true, orderId: '12345' }),
    });
  });

  await expect(page).toHaveURL(/.*checkout\/confirmation/);
  // await expect(page.locator('h2')).toHaveText('Payment Confirmed');
  // await page.waitForTimeout(30000);
});
