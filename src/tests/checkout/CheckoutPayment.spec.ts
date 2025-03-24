// 📌 קובץ: tests/checkout/CheckoutPayment.spec.ts
import { render, fireEvent } from "@testing-library/vue";
import { describe, test, expect, vi } from "vitest";
import CheckoutPayment from "@/views/checkout/PaymentView.vue";
import { createTestingPinia } from "@pinia/testing";
import { useCheckoutStore } from "@/stores/checkoutStore";

describe("CheckoutPayment.vue", () => {
  test("renders correctly", () => {
    const { getByText } = render(CheckoutPayment, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });

    expect(getByText("Tax Information")).toBeTruthy();
  });

  test("displays contact information correctly", () => {
    const pinia = createTestingPinia({ createSpy: vi.fn });
    const checkoutStore = useCheckoutStore(pinia);
    checkoutStore.contactInformation.email = "test@example.com";

    const { getByText } = render(CheckoutPayment, { global: { plugins: [pinia] } });
    expect(getByText("test@example.com")).toBeTruthy();
  });

  test("calls editContact when clicking edit on contact information", async () => {
    const { getByText } = render(CheckoutPayment, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });

    const editButton = getByText("Contact");
    await fireEvent.click(editButton);
    expect(console.log).toHaveBeenCalledWith("Edit Contact Clicked");
  });

  test("updates VAT number when input changes", async () => {
    const pinia = createTestingPinia({ createSpy: vi.fn });
    const checkoutStore = useCheckoutStore(pinia);
    checkoutStore.payment.vatNumber = "";

    const { getByPlaceholderText } = render(CheckoutPayment, { global: { plugins: [pinia] } });
    const vatInput = getByPlaceholderText("VAT number (optional)");
    await fireEvent.update(vatInput, "123456789");
    expect(checkoutStore.payment.vatNumber).toBe("123456789");
  });

  test("updates PEC when input changes", async () => {
    const pinia = createTestingPinia({ createSpy: vi.fn });
    const checkoutStore = useCheckoutStore(pinia);
    checkoutStore.payment.pec = "";

    const { getByPlaceholderText } = render(CheckoutPayment, { global: { plugins: [pinia] } });
    const pecInput = getByPlaceholderText("PEC (optional)");
    await fireEvent.update(pecInput, "test@pec.com");
    expect(checkoutStore.payment.pec).toBe("test@pec.com");
  });
});
