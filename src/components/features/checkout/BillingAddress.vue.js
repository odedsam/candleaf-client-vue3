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
import { useCheckoutStore } from '@/stores/checkoutStore';
import { paymentValidationSchema } from '@/utils/formValidations';
import { ref } from 'vue';
import BaseInput from '@/components/base/BaseInput.vue';
import RadioInput from '@/components/features/products/RadioInput.vue';
var payment = ref({
    cardNumber: '',
    holderName: '',
    expiration: '',
    cvv: '',
    vatNumber: '',
    pec: '',
    billingSameAsShipping: true,
    billingAddress: {
        address: '',
        postalCode: '',
        city: '',
        province: '',
        country: '',
    },
});
var checkoutStore = useCheckoutStore();
var paymentErrors = ref({});
var validatePayment = function () {
    var result = paymentValidationSchema.safeParse(payment.value);
    if (!result.success) {
        paymentErrors.value = Object.fromEntries(Object.entries(result.error.format()).map(function (_a) {
            var _b, _c;
            var key = _a[0], value = _a[1];
            return [
                key,
                (_c = (_b = value === null || value === void 0 ? void 0 : value._errors) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : 'Unknown validation error',
            ];
        }));
        return false;
    }
    paymentErrors.value = {};
    return true;
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: "text-lg font-semibold mt-6 mb-3" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "border border-gray-300 rounded-md p-4 flex flex-col" }));
/** @type {[typeof RadioInput, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(RadioInput, new RadioInput({
    modelValue: (__VLS_ctx.payment.billingSameAsShipping),
    value: (true),
    radioLabel: "Same As Shipping Address",
    labelStyle: ('max-sm:pl-2 pl-4 max-sm:text-xs text-break text-sm lg:text-md font-roboto'),
}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.payment.billingSameAsShipping),
        value: (true),
        radioLabel: "Same As Shipping Address",
        labelStyle: ('max-sm:pl-2 pl-4 max-sm:text-xs text-break text-sm lg:text-md font-roboto'),
    }], __VLS_functionalComponentArgsRest(__VLS_0), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.hr)(__assign({ class: "border-gray-200 my-3" }));
/** @type {[typeof RadioInput, ]} */ ;
// @ts-ignore
var __VLS_3 = __VLS_asFunctionalComponent(RadioInput, new RadioInput({
    modelValue: (__VLS_ctx.payment.billingSameAsShipping),
    value: (false),
    radioLabel: "Use a different address for billing",
    labelStyle: ('max-sm:pl-2 pl-4 max-sm:text-xs text-break text-sm lg:text-md font-roboto'),
}));
var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.payment.billingSameAsShipping),
        value: (false),
        radioLabel: "Use a different address for billing",
        labelStyle: ('max-sm:pl-2 pl-4 max-sm:text-xs text-break text-sm lg:text-md font-roboto'),
    }], __VLS_functionalComponentArgsRest(__VLS_3), false));
if (!__VLS_ctx.payment.billingSameAsShipping) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "mt-4" }));
    /** @type {[typeof BaseInput, ]} */ ;
    // @ts-ignore
    var __VLS_6 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
        modelValue: (__VLS_ctx.payment.billingAddress.address),
        placeholder: "Address and number",
    }));
    var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{
            modelValue: (__VLS_ctx.payment.billingAddress.address),
            placeholder: "Address and number",
        }], __VLS_functionalComponentArgsRest(__VLS_6), false));
    /** @type {[typeof BaseInput, ]} */ ;
    // @ts-ignore
    var __VLS_9 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
        modelValue: (__VLS_ctx.payment.billingAddress.city),
        placeholder: "City",
    }));
    var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([{
            modelValue: (__VLS_ctx.payment.billingAddress.city),
            placeholder: "City",
        }], __VLS_functionalComponentArgsRest(__VLS_9), false));
    /** @type {[typeof BaseInput, ]} */ ;
    // @ts-ignore
    var __VLS_12 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
        modelValue: (__VLS_ctx.payment.billingAddress.postalCode),
        placeholder: "Postal Code",
    }));
    var __VLS_13 = __VLS_12.apply(void 0, __spreadArray([{
            modelValue: (__VLS_ctx.payment.billingAddress.postalCode),
            placeholder: "Postal Code",
        }], __VLS_functionalComponentArgsRest(__VLS_12), false));
    /** @type {[typeof BaseInput, ]} */ ;
    // @ts-ignore
    var __VLS_15 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
        modelValue: (__VLS_ctx.payment.billingAddress.province),
        placeholder: "Province",
    }));
    var __VLS_16 = __VLS_15.apply(void 0, __spreadArray([{
            modelValue: (__VLS_ctx.payment.billingAddress.province),
            placeholder: "Province",
        }], __VLS_functionalComponentArgsRest(__VLS_15), false));
    /** @type {[typeof BaseInput, ]} */ ;
    // @ts-ignore
    var __VLS_18 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
        modelValue: (__VLS_ctx.payment.billingAddress.country),
        placeholder: "Country",
    }));
    var __VLS_19 = __VLS_18.apply(void 0, __spreadArray([{
            modelValue: (__VLS_ctx.payment.billingAddress.country),
            placeholder: "Country",
        }], __VLS_functionalComponentArgsRest(__VLS_18), false));
}
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['my-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            BaseInput: BaseInput,
            RadioInput: RadioInput,
            payment: payment,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
