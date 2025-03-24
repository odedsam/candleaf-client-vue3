// 📌 קובץ: tests/stores/checkoutStore.spec.ts
import { setActivePinia, createPinia } from "pinia";
import { useCheckoutStore } from "@/stores/checkoutStore";
import { describe, test, expect, vi, beforeEach } from "vitest";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

// Move the mock definition outside the test cases
vi.mock("vue-router", () => {
  const pushMock = vi.fn(); // Define pushMock here
  return {
    useRouter: () => ({
      push: pushMock,
    }),
    __pushMock: pushMock, // Expose pushMock for assertions
  };
});

describe("Checkout Store", () => {
  beforeEach(() => {
    // Log the current module's URL using import.meta
    console.log("Current module URL:", import.meta.url);
    setActivePinia(createPinia()); // ודא ש-Pinia מאותחל לפני כל מבחן
  });

  test("should initialize with step 1", () => {
    const store = useCheckoutStore();
    expect(store.step).toBe(1);
  });

  test("should proceed to the next step", () => {
    const store = useCheckoutStore();
    store.nextStep();
    expect(store.step).toBe(2);
  });

  test("should not exceed the last step", () => {
    const store = useCheckoutStore();
    store.step = store.stepRoutes.length - 1;
    store.nextStep();
    expect(store.step).toBe(store.stepRoutes.length - 1);
  });

  test("should return to the previous step", () => {
    const store = useCheckoutStore();
    store.step = 2;
    store.prevStep();
    expect(store.step).toBe(1);
  });

  test("should navigate to products if on first step and prevStep is called", () => {
    const pushMock = vi.fn(); // Define pushMock directly
    vi.mock("vue-router", () => ({
      useRouter: () => ({
        push: pushMock,
      }),
    }));
    const store = useCheckoutStore();
    store.step = 0;
    store.prevStep();

    expect(pushMock).toHaveBeenCalledWith("/products");
  });

  

  const validateContactInfo = (contactInfo: { email: string }): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(contactInfo.email);
  };

  expect(validateContactInfo({ email: 'test@example.com' })).toBe(true)
});