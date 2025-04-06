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
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useCheckoutStore } from '@/stores/checkoutStore';
var checkoutStore = useCheckoutStore();
var step = storeToRefs(checkoutStore).step;
var buttonTexts = computed(function () {
    var texts = [
        { primary: 'Go to Details', secondary: 'Back To Cart' },
        { primary: 'Go to Shipping', secondary: 'Back to Shopping' },
        { primary: 'Go to Payment', secondary: 'Back to Shipping' },
        { primary: 'Pay Now', secondary: 'Back to Payment' },
        { primary: 'Finish & Return', secondary: 'Save Payment Receipt' },
    ];
    return texts[step.value] || { primary: 'Continue', secondary: 'Back' };
});
var stepTwo = localStorage.getItem('checkout_payment');
// const handleNextStep = () => {
//   let isValid = true
//   switch (step.value) {
//     case 1: 
//       isValid = checkoutStore.validateShipping()
//       break
//     case 2: 
//    isValid=true;
//       break
//     case 3: 
//       isValid = checkoutStore.validatePayment()
//       break
//     default:
//       isValid = true 
//   }
//   if (isValid) {
//     checkoutStore.nextStep()
//   } else {
//     console.error('Validation failed for step', step.value)
//   }
// }
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "text-center py-8 pt-4 flex flex-col justify-center items-center gap-3" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ class: "w-full bg-[#56B280] max-w-[21.875rem] text-white text-lg font-medium py-3 rounded-md hover:bg-green-600 transition-all" }));
(__VLS_ctx.buttonTexts.primary);
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: (__VLS_ctx.checkoutStore.prevStep) }, { class: "w-full text-[#56B280] max-w-[21.875rem] text-lg font-medium py-3 rounded-md border border-green-500 hover:bg-green-100 transition-all" }));
(__VLS_ctx.buttonTexts.secondary);
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['py-8']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#56B280]']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-[21.875rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-green-600']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#56B280]']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-[21.875rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-green-500']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-green-100']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            checkoutStore: checkoutStore,
            buttonTexts: buttonTexts,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
