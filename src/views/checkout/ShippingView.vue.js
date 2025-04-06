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
import { ref } from 'vue';
import InfoDisplay from '@/components/features/checkout/InfoDisplay.vue';
import ShippingMethod from '@/components/features/checkout/ShippingMethod.vue';
import { useCheckoutStore } from '@/stores/checkoutStore';
import { storeToRefs } from 'pinia';
import StepButtons from '@/components/features/checkout/StepButtons.vue';
var checkoutStore = useCheckoutStore();
var _a = storeToRefs(checkoutStore), shipping = _a.shipping, formattedShippingAddress = _a.formattedShippingAddress, shippingOptions = _a.shippingOptions;
var selectedShippingMethod = ref(shippingOptions.value[0]); // Default to first method
// Edit Handlers
var editContact = function () {
    console.log('Edit Contact Clicked');
};
var editShipping = function () {
    console.log('Edit Shipping Clicked');
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "border border-green-300 rounded-md p-4" }));
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "p-4" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "text-lg font-semibold mb-3" }));
var _loop_1 = function (method) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: (method.id) }, { class: "mb-2" }));
    /** @type {[typeof ShippingMethod, ]} */ ;
    // @ts-ignore
    var __VLS_14 = __VLS_asFunctionalComponent(ShippingMethod, new ShippingMethod(__assign({ 'onUpdate:selected': {} }, { label: (method.label), price: (method.price), selected: (__VLS_ctx.selectedShippingMethod.id === method.id) })));
    var __VLS_15 = __VLS_14.apply(void 0, __spreadArray([__assign({ 'onUpdate:selected': {} }, { label: (method.label), price: (method.price), selected: (__VLS_ctx.selectedShippingMethod.id === method.id) })], __VLS_functionalComponentArgsRest(__VLS_14), false));
    var __VLS_17 = void 0;
    var __VLS_18 = void 0;
    var __VLS_19 = void 0;
    var __VLS_20 = {
        'onUpdate:selected': function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.selectedShippingMethod = method;
        }
    };
};
var __VLS_16;
for (var _i = 0, _b = __VLS_getVForSourceType((__VLS_ctx.shippingOptions)); _i < _b.length; _i++) {
    var method = _b[_i][0];
    _loop_1(method);
}
/** @type {[typeof StepButtons, ]} */ ;
// @ts-ignore
var __VLS_21 = __VLS_asFunctionalComponent(StepButtons, new StepButtons({
    primaryText: "Go to Payment",
    secondaryText: "Back to Details",
    primaryRoute: "/checkout/payment",
    secondaryRoute: "/checkout/details",
}));
var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([{
        primaryText: "Go to Payment",
        secondaryText: "Back to Details",
        primaryRoute: "/checkout/payment",
        secondaryRoute: "/checkout/details",
    }], __VLS_functionalComponentArgsRest(__VLS_21), false));
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-green-300']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            InfoDisplay: InfoDisplay,
            ShippingMethod: ShippingMethod,
            StepButtons: StepButtons,
            shipping: shipping,
            formattedShippingAddress: formattedShippingAddress,
            shippingOptions: shippingOptions,
            selectedShippingMethod: selectedShippingMethod,
            editContact: editContact,
            editShipping: editShipping,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
