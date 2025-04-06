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
var _a, _b, _c, _d;
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/stores/cartStore';
import SubscriptionSelector from '@/components/features/products/SubscriptionSelector.vue';
import QuantitySelector from '@/components/shared/QuantitySelector.vue';
import IngredientsComp from '@/components/features/products/IngredientsComp.vue';
import BaseButton from '@/components/base/BaseButton.vue';
var props = defineProps();
var cartStore = useCartStore();
var _e = useCartStore(), increaseQuantity = _e.increaseQuantity, decreaseQuantity = _e.decreaseQuantity;
var cartItems = storeToRefs(cartStore).cartItems;
var quantity = computed(function () {
    var productInCart = cartItems.value.find(function (item) { return item.id === props.selectedProduct.id; });
    return productInCart ? productInCart.quantity : 1;
});
var totalPrice = computed(function () {
    var _a;
    return ((quantity.value || 0) * (((_a = props.selectedProduct) === null || _a === void 0 ? void 0 : _a.price) || 0)).toFixed(2);
});
var handleClick = function () {
    var _a, _b;
    var productToAdd = {
        id: props.selectedProduct.id,
        title: props.selectedProduct.title,
        image: (_a = props.selectedProduct.image) !== null && _a !== void 0 ? _a : '/placeholder-image.png',
        price: (_b = props.selectedProduct.price) !== null && _b !== void 0 ? _b : 0,
        quantity: quantity.value,
    };
    console.log('Adding to cart:', productToAdd);
    cartStore.addToCart(productToAdd);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "grid grid-cols-1 lg:gap-x-12 md:grid-cols-2 py-12 max-md:gap-12 items-strech" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "w-full h-full flex items-stretch" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "mx-auto h-full flex flex-col" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign(__assign({ src: (__VLS_ctx.selectedProduct.image), alt: "prod-image" }, { class: "w-full h-full object-contain" }), { draggable: "false" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex flex-col justify-center items-center max-md:mt-12 gap-3" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-black text-base font-roboto font-semibold text-center" }));
(__VLS_ctx.description);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-green text-base font-roboto font-semibold text-center text-[#56B280]" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "inline-flex flex-col  gap-12 max-md:mt-12" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex flex-col h-full" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-2xl text-black max-md:mt-4 max-sm:text-break max-lg:text-center md:text-start" }));
(__VLS_ctx.selectedProduct.title);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-semibold font-roboto max-md:mt-4 text-[1.625rem] text-[#56B280] max-md:text-center" }));
(__VLS_ctx.totalPrice);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex flex-col gap-12" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "inline-flex max-md:justify-center max-md:items-center" }));
/** @type {[typeof QuantitySelector, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(QuantitySelector, new QuantitySelector({
    productId: (props.selectedProduct.id),
    quantity: ((_b = (_a = __VLS_ctx.cartStore.cartItems.find(function (item) { return item.id === __VLS_ctx.selectedProduct.id; })) === null || _a === void 0 ? void 0 : _a.quantity) !== null && _b !== void 0 ? _b : 1),
    addQuantity: (__VLS_ctx.increaseQuantity),
    removeQuantity: (__VLS_ctx.decreaseQuantity),
    addClass: ('px-6 md:text-start'),
}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
        productId: (props.selectedProduct.id),
        quantity: ((_d = (_c = __VLS_ctx.cartStore.cartItems.find(function (item) { return item.id === __VLS_ctx.selectedProduct.id; })) === null || _c === void 0 ? void 0 : _c.quantity) !== null && _d !== void 0 ? _d : 1),
        addQuantity: (__VLS_ctx.increaseQuantity),
        removeQuantity: (__VLS_ctx.decreaseQuantity),
        addClass: ('px-6 md:text-start'),
    }], __VLS_functionalComponentArgsRest(__VLS_0), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex flex-col justify-center items-center gap-12 md:justify-start p-8 h-full" }));
/** @type {[typeof SubscriptionSelector, ]} */ ;
// @ts-ignore
var __VLS_3 = __VLS_asFunctionalComponent(SubscriptionSelector, new SubscriptionSelector({}));
var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_3), false));
/** @type {[typeof BaseButton, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(BaseButton, new BaseButton(__assign({ 'onClick': {} }, { btnIcon: ('/cart-white.svg'), label: "+ Add To Cart", btnClass: ('max-md:self-start'), grow: (true), disabled: (false) })));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { btnIcon: ('/cart-white.svg'), label: "+ Add To Cart", btnClass: ('max-md:self-start'), grow: (true), disabled: (false) })], __VLS_functionalComponentArgsRest(__VLS_6), false));
var __VLS_9;
var __VLS_10;
var __VLS_11;
var __VLS_12 = {
    onClick: (__VLS_ctx.handleClick)
};
var __VLS_8;
/** @type {[typeof IngredientsComp, ]} */ ;
// @ts-ignore
var __VLS_13 = __VLS_asFunctionalComponent(IngredientsComp, new IngredientsComp({
    ingredients: (__VLS_ctx.ingredients),
}));
var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{
        ingredients: (__VLS_ctx.ingredients),
    }], __VLS_functionalComponentArgsRest(__VLS_13), false));
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-1']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:gap-x-12']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-12']} */ ;
/** @type {__VLS_StyleScopedClasses['max-md:gap-12']} */ ;
/** @type {__VLS_StyleScopedClasses['items-strech']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-stretch']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['object-contain']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['max-md:mt-12']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-black']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['font-roboto']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-green']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['font-roboto']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#56B280]']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-12']} */ ;
/** @type {__VLS_StyleScopedClasses['max-md:mt-12']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-black']} */ ;
/** @type {__VLS_StyleScopedClasses['max-md:mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['max-sm:text-break']} */ ;
/** @type {__VLS_StyleScopedClasses['max-lg:text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-start']} */ ;
/** @type {__VLS_StyleScopedClasses['text-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['font-roboto']} */ ;
/** @type {__VLS_StyleScopedClasses['max-md:mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[1.625rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#56B280]']} */ ;
/** @type {__VLS_StyleScopedClasses['max-md:text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-12']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['max-md:justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['max-md:items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-12']} */ ;
/** @type {__VLS_StyleScopedClasses['md:justify-start']} */ ;
/** @type {__VLS_StyleScopedClasses['p-8']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            SubscriptionSelector: SubscriptionSelector,
            QuantitySelector: QuantitySelector,
            IngredientsComp: IngredientsComp,
            BaseButton: BaseButton,
            cartStore: cartStore,
            increaseQuantity: increaseQuantity,
            decreaseQuantity: decreaseQuantity,
            totalPrice: totalPrice,
            handleClick: handleClick,
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
