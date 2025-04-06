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
var _a, _b;
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';
import ProfileIcon from '@/assets/icons/userProfile.svg';
import CartIcon from './CartIcon.vue';
import { useCartStore } from '@/stores/cartStore';
var authStore = useAuthStore();
var cartStore = useCartStore();
var _c = storeToRefs(authStore), isAuthenticated = _c.isAuthenticated, user = _c.user;
var firstName = computed(function () { var _a, _b; return (_b = (_a = user === null || user === void 0 ? void 0 : user.value) === null || _a === void 0 ? void 0 : _a.name.split(' ')[0]) !== null && _b !== void 0 ? _b : 'User'; });
var profileImage = computed(function () { var _a; return (_a = user === null || user === void 0 ? void 0 : user.value.avatar) !== null && _a !== void 0 ? _a : ProfileIcon; });
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "order-3 flex justify-center items-center space-x-4" }));
if (__VLS_ctx.isAuthenticated) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    var __VLS_0 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ to: ("/user/".concat((_a = __VLS_ctx.user) === null || _a === void 0 ? void 0 : _a._id)) }, { class: "flex justify-center items-center gap-x-2" })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ to: ("/user/".concat((_b = __VLS_ctx.user) === null || _b === void 0 ? void 0 : _b._id)) }, { class: "flex justify-center items-center gap-x-2" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    __VLS_3.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "text-xs font-medium text-gray-800 dark:text-white" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "text-md font-sans text-gray-800 dark:text-white hover:underline" }));
    (__VLS_ctx.firstName);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign(__assign({ src: (__VLS_ctx.profileImage) }, { class: "w-8 h-8 rounded-full cursor-pointer" }), { alt: "User Profile" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ onClick: (__VLS_ctx.authStore.handleLogout) }, { class: "text-red-500 text-xs" }));
    var __VLS_3;
}
else {
    var __VLS_4 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        to: ('/auth/login'),
    }));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{
            to: ('/auth/login'),
        }], __VLS_functionalComponentArgsRest(__VLS_5), false));
    __VLS_7.slots.default;
    var __VLS_8 = {}.ITablerUserCircle;
    /** @type {[typeof __VLS_components.ITablerUserCircle, typeof __VLS_components.iTablerUserCircle, ]} */ ;
    // @ts-ignore
    var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ class: "w-6 h-6 cursor-pointer" })));
    var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ class: "w-6 h-6 cursor-pointer" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
    var __VLS_7;
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.cartStore.toggleCart();
    } }));
/** @type {[typeof CartIcon, ]} */ ;
// @ts-ignore
var __VLS_12 = __VLS_asFunctionalComponent(CartIcon, new CartIcon({}));
var __VLS_13 = __VLS_12.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_12), false));
/** @type {__VLS_StyleScopedClasses['order-3']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-x-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-md']} */ ;
/** @type {__VLS_StyleScopedClasses['font-sans']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:underline']} */ ;
/** @type {__VLS_StyleScopedClasses['w-8']} */ ;
/** @type {__VLS_StyleScopedClasses['h-8']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6']} */ ;
/** @type {__VLS_StyleScopedClasses['h-6']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            RouterLink: RouterLink,
            CartIcon: CartIcon,
            authStore: authStore,
            cartStore: cartStore,
            isAuthenticated: isAuthenticated,
            user: user,
            firstName: firstName,
            profileImage: profileImage,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
