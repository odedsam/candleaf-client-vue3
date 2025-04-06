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
import LogoIcon from '@/components/ui/LogoIcon.vue';
import { useCartStore } from '@/stores/cartStore';
import { storeToRefs } from 'pinia';
import BreadCrumb from '@/components/ui/BreadCrumb.vue';
import OrderDetails from './OrderDetails.vue';
var cartStore = useCartStore();
var subTotal = storeToRefs(cartStore).subTotal;
var steps = [
    { name: 'Cart', path: '/checkout/cart' },
    { name: 'Details', path: '/checkout/details' },
    { name: 'Shipping', path: '/checkout/shipping' },
    { name: 'Payment', path: '/checkout/payment' },
    { name: 'Confirmation', path: '/checkout/confirmation' }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex flex-col" }));
/** @type {[typeof LogoIcon, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(LogoIcon, new LogoIcon({
    grow: (true),
    disableRoute: (true),
}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
        grow: (true),
        disableRoute: (true),
    }], __VLS_functionalComponentArgsRest(__VLS_0), false));
/** @type {[typeof OrderDetails, ]} */ ;
// @ts-ignore
var __VLS_3 = __VLS_asFunctionalComponent(OrderDetails, new OrderDetails({}));
var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_3), false));
/** @type {[typeof BreadCrumb, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(BreadCrumb, new BreadCrumb({
    steps: (__VLS_ctx.steps),
}));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{
        steps: (__VLS_ctx.steps),
    }], __VLS_functionalComponentArgsRest(__VLS_6), false));
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            LogoIcon: LogoIcon,
            BreadCrumb: BreadCrumb,
            OrderDetails: OrderDetails,
            steps: steps,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
