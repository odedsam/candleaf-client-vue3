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
import BaseInput from '@/components/base/BaseInput.vue';
// Reactive form data
var paymentData = ref({
    cardNumber: '',
    holderName: '',
    expiration: '',
    cvv: ''
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "p-4" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "text-lg font-semibold mb-3" }));
/** @type {[typeof BaseInput, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
    modelValue: (__VLS_ctx.paymentData.cardNumber),
    placeholder: "Card Number",
    icon: "🔒",
}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.paymentData.cardNumber),
        placeholder: "Card Number",
        icon: "🔒",
    }], __VLS_functionalComponentArgsRest(__VLS_0), false));
/** @type {[typeof BaseInput, ]} */ ;
// @ts-ignore
var __VLS_3 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
    modelValue: (__VLS_ctx.paymentData.holderName),
    placeholder: "Holder Name",
}));
var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.paymentData.holderName),
        placeholder: "Holder Name",
    }], __VLS_functionalComponentArgsRest(__VLS_3), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex gap-2" }));
/** @type {[typeof BaseInput, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
    modelValue: (__VLS_ctx.paymentData.expiration),
    placeholder: "Expiration (MM/YY)",
    size: "half",
}));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.paymentData.expiration),
        placeholder: "Expiration (MM/YY)",
        size: "half",
    }], __VLS_functionalComponentArgsRest(__VLS_6), false));
/** @type {[typeof BaseInput, ]} */ ;
// @ts-ignore
var __VLS_9 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
    modelValue: (__VLS_ctx.paymentData.cvv),
    placeholder: "CVV",
    icon: "ℹ️",
    size: "half",
}));
var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.paymentData.cvv),
        placeholder: "CVV",
        icon: "ℹ️",
        size: "half",
    }], __VLS_functionalComponentArgsRest(__VLS_9), false));
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            BaseInput: BaseInput,
            paymentData: paymentData,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
