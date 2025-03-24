// 📌 קובץ: tests/checkout/CheckoutShipping.spec.ts
import { render, fireEvent } from "@testing-library/vue";
import { describe, test, expect, vi, beforeEach } from "vitest";
import CheckoutShipping from "@/views/checkout/ShippingView.vue";
import { createTestingPinia } from "@pinia/testing";
import { useCheckoutStore } from "@/stores/checkoutStore";

describe("CheckoutShipping.vue", () => {
  beforeEach(() => {
    vi.spyOn(console, "log").mockImplementation(() => {});
  });

  test("renders correctly", () => {
    const { getByText } = render(CheckoutShipping, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });

    expect(getByText("Shipping method")).toBeTruthy();
  });

  test("displays contact information correctly", () => {
    const pinia = createTestingPinia({ createSpy: vi.fn });
    const checkoutStore = useCheckoutStore(pinia);
    checkoutStore.contactInformation.email = "test@example.com";

    const { getByText } = render(CheckoutShipping, { global: { plugins: [pinia] } });
    expect(getByText("test@example.com")).toBeTruthy();
  });

  test("calls editContact when clicking edit on contact information", async () => {
    const { getByLabelText } = render(CheckoutShipping, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });

    const editButton = getByLabelText("Edit Contact");
    await fireEvent.click(editButton);
    expect(console.log).toHaveBeenCalledWith("Edit Contact Clicked");
  });

  test("calls editShipping when clicking edit on shipping information", async () => {
    const { getByLabelText } = render(CheckoutShipping, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });

    const editButton = getByLabelText("Edit Shipping");
    await fireEvent.click(editButton);
    expect(console.log).toHaveBeenCalledWith("Edit Shipping Clicked");
  });

  test("selects a shipping method when clicked", async () => {
    const pinia = createTestingPinia({ createSpy: vi.fn });
    const checkoutStore = useCheckoutStore(pinia);
    checkoutStore.shippingOptions = [
      { id: "standard", label: "Standard Shipping", price: 0 },
      { id: "express", label: "Express Shipping", price: 10 },
    ];

    const { getByText } = render(CheckoutShipping, { global: { plugins: [pinia] } });
    const expressMethod = getByText("Express Shipping");
    await fireEvent.click(expressMethod);
    expect(checkoutStore.shippingOptions[1].id).toBe("express");
  });
});