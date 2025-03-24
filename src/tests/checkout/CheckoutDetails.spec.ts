// 📌 קובץ: tests/checkout/CheckoutDetails.spec.ts
import { render, fireEvent } from "@testing-library/vue";
import { describe, test, expect, vi, beforeEach } from "vitest";
import CheckoutDetails from "@/views/checkout/DetailsView.vue";
import { createTestingPinia } from "@pinia/testing";
import { useCheckoutStore } from "@/stores/checkoutStore";

describe("CheckoutDetails.vue", () => {
  beforeEach(() => {
    vi.spyOn(console, "log").mockImplementation(() => {});
  });

  test("renders correctly", () => {
    const { getByText } = render(CheckoutDetails, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });

    expect(getByText("Shipping Address")).toBeTruthy();
  });

  test("proceeds to the next step when submitted", async () => {
    const pinia = createTestingPinia({ createSpy: vi.fn });
    const checkoutStore = useCheckoutStore(pinia);
    checkoutStore.nextStep = vi.fn();

    const { getByRole } = render(CheckoutDetails, { global: { plugins: [pinia] } });
    const submitButton = getByRole("button");
    await fireEvent.click(submitButton);

    expect(checkoutStore.nextStep).toHaveBeenCalled();
  });

  test("updates shipping name when input changes", async () => {
    const pinia = createTestingPinia({ createSpy: vi.fn });
    const checkoutStore = useCheckoutStore(pinia);
    checkoutStore.shipping.name = "";

    const { getByPlaceholderText } = render(CheckoutDetails, { global: { plugins: [pinia] } });
    const nameInput = getByPlaceholderText("Name");
    await fireEvent.update(nameInput, "John Doe");

    expect(checkoutStore.shipping.name).toBe("John Doe");
  });

  test("displays validation error when input is invalid", async () => {
    const pinia = createTestingPinia({ createSpy: vi.fn });
    const checkoutStore = useCheckoutStore(pinia);
    checkoutStore.shipping.name = "";
    checkoutStore.shippingErrors = { name: "Name is required" };

    const { getByText } = render(CheckoutDetails, { global: { plugins: [pinia] } });
    expect(getByText("Name is required")).toBeTruthy();
  });
});
