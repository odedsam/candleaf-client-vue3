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
import BaseInput from '@/components/base/BaseInput.vue';
import BaseError from '@/components/base/BaseError.vue';
import LocationSelector from '@/components/features/checkout/AddressAutoComplete.vue';
import CheckoutNewsLetter from '@/components/features/checkout/CheckoutNewsLetter.vue';
import StepButtons from '@/components/features/checkout/StepButtons.vue';
import AddressAutoComplete from '@/components/features/checkout/AddressAutoComplete.vue';
import { storeToRefs } from 'pinia';
var checkoutStore = useCheckoutStore();
var _a = storeToRefs(checkoutStore), shipping = _a.shipping, shippingErrors = _a.shippingErrors;
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "p-6 bg-white shadow-md rounded-lg" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)(__assign({ onSubmit: (__VLS_ctx.checkoutStore.validateDetails) }, { class: "grid gap-2.5" }));
/** @type {[typeof CheckoutNewsLetter, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(CheckoutNewsLetter, new CheckoutNewsLetter({
    email: (__VLS_ctx.shipping.email),
    subscribe: (__VLS_ctx.shipping.subscribe),
    invalid: (!!__VLS_ctx.shippingErrors.email),
    errMessage: (__VLS_ctx.shippingErrors.email),
}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
        email: (__VLS_ctx.shipping.email),
        subscribe: (__VLS_ctx.shipping.subscribe),
        invalid: (!!__VLS_ctx.shippingErrors.email),
        errMessage: (__VLS_ctx.shippingErrors.email),
    }], __VLS_functionalComponentArgsRest(__VLS_0), false));
/** @type {[typeof AddressAutoComplete, ]} */ ;
// @ts-ignore
var __VLS_3 = __VLS_asFunctionalComponent(AddressAutoComplete, new AddressAutoComplete({
    modelValue: (__VLS_ctx.shipping.address),
}));
var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.shipping.address),
    }], __VLS_functionalComponentArgsRest(__VLS_3), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "text-lg font-semibold my-4" }));
/** @type {[typeof BaseInput, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
    modelValue: (__VLS_ctx.shipping.name),
    placeholder: "Name",
    invalid: (!!__VLS_ctx.shippingErrors.name),
}));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.shipping.name),
        placeholder: "Name",
        invalid: (!!__VLS_ctx.shippingErrors.name),
    }], __VLS_functionalComponentArgsRest(__VLS_6), false));
if (__VLS_ctx.shippingErrors.name) {
    /** @type {[typeof BaseError, ]} */ ;
    // @ts-ignore
    var __VLS_9 = __VLS_asFunctionalComponent(BaseError, new BaseError({
        message: (__VLS_ctx.shippingErrors.name),
    }));
    var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([{
            message: (__VLS_ctx.shippingErrors.name),
        }], __VLS_functionalComponentArgsRest(__VLS_9), false));
}
/** @type {[typeof BaseInput, ]} */ ;
// @ts-ignore
var __VLS_12 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
    modelValue: (__VLS_ctx.shipping.lastName),
    placeholder: "Second Name",
    invalid: (!!__VLS_ctx.shippingErrors.lastName),
}));
var __VLS_13 = __VLS_12.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.shipping.lastName),
        placeholder: "Second Name",
        invalid: (!!__VLS_ctx.shippingErrors.lastName),
    }], __VLS_functionalComponentArgsRest(__VLS_12), false));
if (__VLS_ctx.shippingErrors.lastName) {
    /** @type {[typeof BaseError, ]} */ ;
    // @ts-ignore
    var __VLS_15 = __VLS_asFunctionalComponent(BaseError, new BaseError({
        message: (__VLS_ctx.shippingErrors.lastName),
    }));
    var __VLS_16 = __VLS_15.apply(void 0, __spreadArray([{
            message: (__VLS_ctx.shippingErrors.lastName),
        }], __VLS_functionalComponentArgsRest(__VLS_15), false));
}
/** @type {[typeof BaseInput, ]} */ ;
// @ts-ignore
var __VLS_18 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
    modelValue: (__VLS_ctx.shipping.address),
    placeholder: "Address and number",
    invalid: (!!__VLS_ctx.shippingErrors.address),
}));
var __VLS_19 = __VLS_18.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.shipping.address),
        placeholder: "Address and number",
        invalid: (!!__VLS_ctx.shippingErrors.address),
    }], __VLS_functionalComponentArgsRest(__VLS_18), false));
if (__VLS_ctx.shippingErrors.address) {
    /** @type {[typeof BaseError, ]} */ ;
    // @ts-ignore
    var __VLS_21 = __VLS_asFunctionalComponent(BaseError, new BaseError({
        message: (__VLS_ctx.shippingErrors.address),
    }));
    var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([{
            message: (__VLS_ctx.shippingErrors.address),
        }], __VLS_functionalComponentArgsRest(__VLS_21), false));
}
/** @type {[typeof BaseInput, ]} */ ;
// @ts-ignore
var __VLS_24 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
    modelValue: (__VLS_ctx.shipping.shippingNote),
    placeholder: "Shipping note (optional)",
}));
var __VLS_25 = __VLS_24.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.shipping.shippingNote),
        placeholder: "Shipping note (optional)",
    }], __VLS_functionalComponentArgsRest(__VLS_24), false));
/** @type {[typeof BaseInput, ]} */ ;
// @ts-ignore
var __VLS_27 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
    modelValue: (__VLS_ctx.shipping.postalCode),
    placeholder: "Postal Code",
    invalid: (!!__VLS_ctx.shippingErrors.postalCode),
}));
var __VLS_28 = __VLS_27.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.shipping.postalCode),
        placeholder: "Postal Code",
        invalid: (!!__VLS_ctx.shippingErrors.postalCode),
    }], __VLS_functionalComponentArgsRest(__VLS_27), false));
if (__VLS_ctx.shippingErrors.postalCode) {
    /** @type {[typeof BaseError, ]} */ ;
    // @ts-ignore
    var __VLS_30 = __VLS_asFunctionalComponent(BaseError, new BaseError({
        message: (__VLS_ctx.shippingErrors.postalCode),
    }));
    var __VLS_31 = __VLS_30.apply(void 0, __spreadArray([{
            message: (__VLS_ctx.shippingErrors.postalCode),
        }], __VLS_functionalComponentArgsRest(__VLS_30), false));
}
/** @type {[typeof BaseInput, ]} */ ;
// @ts-ignore
var __VLS_33 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
    modelValue: (__VLS_ctx.shipping.city),
    placeholder: "City",
    invalid: (!!__VLS_ctx.shippingErrors.city),
}));
var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.shipping.city),
        placeholder: "City",
        invalid: (!!__VLS_ctx.shippingErrors.city),
    }], __VLS_functionalComponentArgsRest(__VLS_33), false));
if (__VLS_ctx.shippingErrors.city) {
    /** @type {[typeof BaseError, ]} */ ;
    // @ts-ignore
    var __VLS_36 = __VLS_asFunctionalComponent(BaseError, new BaseError({
        message: (__VLS_ctx.shippingErrors.city),
    }));
    var __VLS_37 = __VLS_36.apply(void 0, __spreadArray([{
            message: (__VLS_ctx.shippingErrors.city),
        }], __VLS_functionalComponentArgsRest(__VLS_36), false));
}
/** @type {[typeof LocationSelector, ]} */ ;
// @ts-ignore
var __VLS_39 = __VLS_asFunctionalComponent(LocationSelector, new LocationSelector({
    country: (__VLS_ctx.shipping.country),
    province: (__VLS_ctx.shipping.province),
    city: (__VLS_ctx.shipping.city),
    errors: (__VLS_ctx.shippingErrors),
}));
var __VLS_40 = __VLS_39.apply(void 0, __spreadArray([{
        country: (__VLS_ctx.shipping.country),
        province: (__VLS_ctx.shipping.province),
        city: (__VLS_ctx.shipping.city),
        errors: (__VLS_ctx.shippingErrors),
    }], __VLS_functionalComponentArgsRest(__VLS_39), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex items-center" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "checkbox",
});
(__VLS_ctx.shipping.saveInfo);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "ml-3" }));
/** @type {[typeof StepButtons, ]} */ ;
// @ts-ignore
var __VLS_42 = __VLS_asFunctionalComponent(StepButtons, new StepButtons({
    primaryText: "Go To Shipping",
    secondaryText: "Back to Cart",
    primaryRoute: "/checkout/shipping",
    secondaryRoute: "/checkout/cart",
    validate: (function () { return true; }),
}));
var __VLS_43 = __VLS_42.apply(void 0, __spreadArray([{
        primaryText: "Go To Shipping",
        secondaryText: "Back to Cart",
        primaryRoute: "/checkout/shipping",
        secondaryRoute: "/checkout/cart",
        validate: (function () { return true; }),
    }], __VLS_functionalComponentArgsRest(__VLS_42), false));
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-md']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['my-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-3']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            BaseInput: BaseInput,
            BaseError: BaseError,
            LocationSelector: LocationSelector,
            CheckoutNewsLetter: CheckoutNewsLetter,
            StepButtons: StepButtons,
            AddressAutoComplete: AddressAutoComplete,
            checkoutStore: checkoutStore,
            shipping: shipping,
            shippingErrors: shippingErrors,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
