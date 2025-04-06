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
import { ref, computed } from 'vue';
import { useCartStore } from '@/stores/cartStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import CartItem from '@/components/shared/CartItem.vue';
import TablerArrowLeft from '~icons/tabler/arrow-left';
import TablerArrowRight from '~icons/tabler/arrow-right';
var router = useRouter();
var cartStore = useCartStore();
var _a = storeToRefs(cartStore), cartItems = _a.cartItems, isCartOpen = _a.isCartOpen, subTotal = _a.subTotal;
var isExpanded = ref(false);
var modalWidth = computed(function () { return (isExpanded.value ? 'w-full' : 'w-[60%]'); });
var toggleExpand = function () { return (isExpanded.value = !isExpanded.value); };
var iconComponent = computed(function () { return (isExpanded.value ? TablerArrowRight : TablerArrowLeft); });
var navigateTo = function () {
    cartStore.toggleCart();
    router.push('/checkout/cart');
};
var backToShopping = function () {
    cartStore.toggleCart();
    router.push('/products');
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
var __VLS_0 = {}.Transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.Transition, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    name: "slide-cart",
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        name: "slide-cart",
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
if (__VLS_ctx.isCartOpen) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: (__VLS_ctx.cartStore.toggleCart) }, { class: ([__VLS_ctx.modalWidth, 'fixed inset-0 bg-white/50 dark:bg-black/50 backdrop-blur-sm z-40 ml-auto overflow-y-auto']) }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex justify-between items-center p-4" }));
    var __VLS_4 = ((__VLS_ctx.iconComponent));
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ 'onClick': {} }, { class: "w-6 h-6 text-black dark:text-white cursor-pointer transition-transform duration-300" })));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { class: "w-6 h-6 text-black dark:text-white cursor-pointer transition-transform duration-300" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
    var __VLS_8 = void 0;
    var __VLS_9 = void 0;
    var __VLS_10 = void 0;
    var __VLS_11 = {
        onClick: (__VLS_ctx.toggleExpand)
    };
    var __VLS_7;
    var __VLS_12 = {}.ITablerX;
    /** @type {[typeof __VLS_components.ITablerX, typeof __VLS_components.iTablerX, ]} */ ;
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ 'onClick': {} }, { class: "w-6 h-6 text-black dark:text-white cursor-pointer" })));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { class: "w-6 h-6 text-black dark:text-white cursor-pointer" })], __VLS_functionalComponentArgsRest(__VLS_13), false));
    var __VLS_16 = void 0;
    var __VLS_17 = void 0;
    var __VLS_18 = void 0;
    var __VLS_19 = {
        onClick: (__VLS_ctx.cartStore.toggleCart)
    };
    var __VLS_15;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "text-2xl text-center font-semibold dark:text-white" }));
    (__VLS_ctx.cartItems.length > 0 ? 'Your cart items' : 'No items In Cart');
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: (__VLS_ctx.backToShopping) }, { class: "w-full text-green-600 text-center mt-2 underline" }));
    if (__VLS_ctx.cartItems.length > 0) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "mt-6 border-t border-gray-300 dark:border-gray-600" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "grid grid-cols-5 py-4 font-semibold text-gray-600 dark:text-gray-300 text-center" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "text-left col-span-2" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        for (var _i = 0, _b = __VLS_getVForSourceType((__VLS_ctx.cartItems)); _i < _b.length; _i++) {
            var item = _b[_i][0];
            /** @type {[typeof CartItem, ]} */ ;
            // @ts-ignore
            var __VLS_20 = __VLS_asFunctionalComponent(CartItem, new CartItem({
                key: (item.id),
                item: (item),
            }));
            var __VLS_21 = __VLS_20.apply(void 0, __spreadArray([{
                    key: (item.id),
                    item: (item),
                }], __VLS_functionalComponentArgsRest(__VLS_20), false));
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "border-t border-gray-300 dark:border-gray-600 py-6 text-right" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-lg font-semibold dark:text-white" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "ml-4" }));
        (__VLS_ctx.subTotal.toFixed(2));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-gray-500 mt-1 dark:text-gray-400" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: (__VLS_ctx.navigateTo) }, { class: "mt-4 px-6 py-2 bg-green-600 text-white rounded-lg" }));
    }
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white/50']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-black/50']} */ ;
/** @type {__VLS_StyleScopedClasses['backdrop-blur-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['z-40']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-y-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6']} */ ;
/** @type {__VLS_StyleScopedClasses['h-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-black']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6']} */ ;
/** @type {__VLS_StyleScopedClasses['h-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-black']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['text-green-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['underline']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
/** @type {__VLS_StyleScopedClasses['border-t']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:border-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-5']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border-t']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:border-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['py-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-right']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-green-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            CartItem: CartItem,
            cartStore: cartStore,
            cartItems: cartItems,
            isCartOpen: isCartOpen,
            subTotal: subTotal,
            modalWidth: modalWidth,
            toggleExpand: toggleExpand,
            iconComponent: iconComponent,
            navigateTo: navigateTo,
            backToShopping: backToShopping,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
