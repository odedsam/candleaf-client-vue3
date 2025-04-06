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
var props = defineProps();
// Dynamic order message
var confirmationMessage = computed(function () {
    return props.isConfirmed
        ? "Thank you ".concat(props.userName, " for buying Candleaf. The nature is grateful to you. Now that your order is confirmed, it will be ready to ship in 2 days. Please check your inbox in the future for order updates.")
        : 'Your payment is being processed. Please wait...';
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex flex-col items-center text-center p-6 max-w-md mx-auto" }));
if (__VLS_ctx.isConfirmed) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex justify-center opacity-60 items-cente w-[6.25rem] h-[6.25rem] bg-green-white border-6 border-[#56B280] rounded-full mb-4" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: "/order-confirmed.svg", alt: "" }, { class: "" }));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "text-3xl font-medium text-gray-900" }));
(__VLS_ctx.isConfirmed ? 'Confirmed' : 'Pending');
if (__VLS_ctx.isConfirmed) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[#56B280] font-semibold mt-1" }));
    (__VLS_ctx.orderId);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-gray-600 text-sm mt-4 leading-relaxed" }));
(__VLS_ctx.confirmationMessage);
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-md']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['opacity-60']} */ ;
/** @type {__VLS_StyleScopedClasses['items-cente']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[6.25rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[6.25rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-green-white']} */ ;
/** @type {__VLS_StyleScopedClasses['border-6']} */ ;
/** @type {__VLS_StyleScopedClasses['border-[#56B280]']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-900']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#56B280]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-relaxed']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            confirmationMessage: confirmationMessage,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
