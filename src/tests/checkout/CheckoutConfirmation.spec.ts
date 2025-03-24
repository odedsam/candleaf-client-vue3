import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CheckoutConfirmation from "@/views/checkout/ConfirmationView.vue";
import PaymentConfirmation from "@/components/checkout/PaymentConfirmation.vue";

describe("CheckoutConfirmation.vue", () => {
  it("renders PaymentConfirmation with correct props", () => {
    const wrapper = mount(CheckoutConfirmation);

    // Check if PaymentConfirmation is rendered
    const paymentComp = wrapper.findComponent(PaymentConfirmation);
    expect(paymentComp.exists()).toBe(true);

    // Check if props are passed correctly
    expect(paymentComp.props()).toEqual({
      isConfirmed: true,
      orderId: "2039",
      userName: "Joe",
    });
  });

  it("updates isPaymentConfirmed dynamically", async () => {
    const wrapper = mount(CheckoutConfirmation);

    // Check initial value
    expect(wrapper.findComponent(PaymentConfirmation).props("isConfirmed")).toBe(true);

    // Toggle state
    await wrapper.setData({ isPaymentConfirmed: false });

    // Check updated value
    expect(wrapper.findComponent(PaymentConfirmation).props("isConfirmed")).toBe(false);
  });
});