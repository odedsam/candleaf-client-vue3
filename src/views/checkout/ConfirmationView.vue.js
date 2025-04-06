var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import PaymentConfirmation from '@/components/features/checkout/PaymentConfirmation.vue';
import { ref } from 'vue';
// Dynamic data
var isPaymentConfirmed = ref(true); // Toggle this for testing
var orderId = ref("2039");
var userName = ref("Joe");
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
/** @type {[typeof PaymentConfirmation, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(PaymentConfirmation, new PaymentConfirmation({
    isConfirmed: (__VLS_ctx.isPaymentConfirmed),
    orderId: (__VLS_ctx.orderId),
    userName: (__VLS_ctx.userName),
}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
        isConfirmed: (__VLS_ctx.isPaymentConfirmed),
        orderId: (__VLS_ctx.orderId),
        userName: (__VLS_ctx.userName),
    }], __VLS_functionalComponentArgsRest(__VLS_0), false));
var __VLS_3 = {};
var __VLS_2;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            PaymentConfirmation: PaymentConfirmation,
            isPaymentConfirmed: isPaymentConfirmed,
            orderId: orderId,
            userName: userName,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
