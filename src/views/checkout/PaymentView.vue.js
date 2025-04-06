var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { storeToRefs } from 'pinia';
import { useCheckoutStore } from '@/stores/checkoutStore';
import PaymentMethods from '@/components/features/checkout/PaymentMethods.vue';
import InfoDisplay from '@/components/features/checkout/InfoDisplay.vue';
import BillingAddress from '@/components/features/checkout/BillingAddress.vue';
import StepButtons from '@/components/features/checkout/StepButtons.vue';
var checkoutStore = useCheckoutStore();
var _a = storeToRefs(checkoutStore), shipping = _a.shipping, shippingOptions = _a.shippingOptions, formattedShippingAddress = _a.formattedShippingAddress;
// Edit Handlers
var editContact = function () { return console.log('Edit Contact Clicked'); };
var editShipping = function () { return console.log('Edit Shipping Clicked'); };
var editMethod = function () { return console.log('Edit Shipping Method Clicked'); };
// Find the selected shipping method (assume first one by default)
var selectedShippingMethod = shippingOptions.value[0];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
/** @type {[typeof InfoDisplay, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(InfoDisplay, new InfoDisplay(__assign({ 'onEdit': {} }, { label: "Contact", value: (__VLS_ctx.shipping.email) })));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([__assign({ 'onEdit': {} }, { label: "Contact", value: (__VLS_ctx.shipping.email) })], __VLS_functionalComponentArgsRest(__VLS_0), false));
var __VLS_3;
var __VLS_4;
var __VLS_5;
var __VLS_6 = {
    onEdit: (__VLS_ctx.editContact)
};
var __VLS_2;
__VLS_asFunctionalElement(__VLS_intrinsicElements.hr)(__assign({ class: "border-gray-200" }));
/** @type {[typeof InfoDisplay, ]} */ ;
// @ts-ignore
var __VLS_7 = __VLS_asFunctionalComponent(InfoDisplay, new InfoDisplay(__assign({ 'onEdit': {} }, { label: "Ship to", value: (__VLS_ctx.formattedShippingAddress) })));
var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([__assign({ 'onEdit': {} }, { label: "Ship to", value: (__VLS_ctx.formattedShippingAddress) })], __VLS_functionalComponentArgsRest(__VLS_7), false));
var __VLS_10;
var __VLS_11;
var __VLS_12;
var __VLS_13 = {
    onEdit: (__VLS_ctx.editShipping)
};
var __VLS_9;
__VLS_asFunctionalElement(__VLS_intrinsicElements.hr)(__assign({ class: "border-gray-200" }));
/** @type {[typeof InfoDisplay, ]} */ ;
// @ts-ignore
var __VLS_14 = __VLS_asFunctionalComponent(InfoDisplay, new InfoDisplay(__assign({ 'onEdit': {} }, { label: "Method", value: ("".concat(__VLS_ctx.selectedShippingMethod.label, " - ").concat(__VLS_ctx.selectedShippingMethod.price === 0 ? 'FREE' : "$".concat(__VLS_ctx.selectedShippingMethod.price.toFixed(2)))) })));
var __VLS_15 = __VLS_14.apply(void 0, __spreadArray([__assign({ 'onEdit': {} }, { label: "Method", value: ("".concat(__VLS_ctx.selectedShippingMethod.label, " - ").concat(__VLS_ctx.selectedShippingMethod.price === 0 ? 'FREE' : "$".concat(__VLS_ctx.selectedShippingMethod.price.toFixed(2)))) })], __VLS_functionalComponentArgsRest(__VLS_14), false));
var __VLS_17;
var __VLS_18;
var __VLS_19;
var __VLS_20 = {
    onEdit: (__VLS_ctx.editMethod)
};
var __VLS_16;
/** @type {[typeof PaymentMethods, ]} */ ;
// @ts-ignore
var __VLS_21 = __VLS_asFunctionalComponent(PaymentMethods, new PaymentMethods({}));
var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_21), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: "text-lg font-semibold mt-6 mb-3" }));
/** @type {[typeof BillingAddress, ]} */ ;
// @ts-ignore
var __VLS_24 = __VLS_asFunctionalComponent(BillingAddress, new BillingAddress({}));
var __VLS_25 = __VLS_24.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_24), false));
/** @type {[typeof StepButtons, ]} */ ;
// @ts-ignore
var __VLS_27 = __VLS_asFunctionalComponent(StepButtons, new StepButtons({
    primaryText: "הבא",
    secondaryText: "חזור",
    primaryRoute: "/checkout/confirmation",
    secondaryRoute: "/checkout/payment",
}));
var __VLS_28 = __VLS_27.apply(void 0, __spreadArray([{
        primaryText: "הבא",
        secondaryText: "חזור",
        primaryRoute: "/checkout/confirmation",
        secondaryRoute: "/checkout/payment",
    }], __VLS_functionalComponentArgsRest(__VLS_27), false));
/** @type {__VLS_StyleScopedClasses['border-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            PaymentMethods: PaymentMethods,
            InfoDisplay: InfoDisplay,
            BillingAddress: BillingAddress,
            StepButtons: StepButtons,
            shipping: shipping,
            formattedShippingAddress: formattedShippingAddress,
            editContact: editContact,
            editShipping: editShipping,
            editMethod: editMethod,
            selectedShippingMethod: selectedShippingMethod,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
