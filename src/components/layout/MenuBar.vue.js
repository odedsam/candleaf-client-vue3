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
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import { useUIStore } from '@/stores/uiStore';
import { storeToRefs } from 'pinia';
import OpenIcon from '@/assets/icons/menu-open.svg';
import ClosedIcon from '@/assets/icons/menu-closed.svg';
import TablerMenu2 from '~icons/tabler/menu-2';
import TablerMenuOrder from '~icons/tabler/menu-order';
var windowSize = ref(window.innerWidth);
var updateWindowSize = function () { windowSize.value = window.innerWidth; };
onMounted(function () { window.addEventListener('resize', updateWindowSize); });
onUnmounted(function () { window.removeEventListener('resize', updateWindowSize); });
var isMobileWidth = computed(function () { return windowSize.value < 768; });
var uiStore = useUIStore();
var isMenuOpen = storeToRefs(uiStore).isMenuOpen;
var imageSrc = computed(function () { return (isMenuOpen.value ? OpenIcon : ClosedIcon); });
var Menu = computed(function () { return (isMenuOpen.value ? TablerMenuOrder : TablerMenu2); });
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
if (__VLS_ctx.isMobileWidth) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!(__VLS_ctx.isMobileWidth))
                return;
            __VLS_ctx.uiStore.toggleMenu();
        } }, { src: (__VLS_ctx.imageSrc), alt: "menu-icon" }), { class: "w-[34px] h-[34px]" }));
    var __VLS_0 = ((__VLS_ctx.Menu));
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ 'onClick': {} }, { class: "text-black dark:text-white w-8 h-8" })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { class: "text-black dark:text-white w-8 h-8" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    var __VLS_4 = void 0;
    var __VLS_5 = void 0;
    var __VLS_6 = void 0;
    var __VLS_7 = {
        onClick: (__VLS_ctx.uiStore.toggleMenu)
    };
    var __VLS_3;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)(__assign({ class: "relative w-full" }));
    __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.isMenuOpen) }), null, null);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(__assign({ class: "absolute flex flex-col justify-center items-center top-6 left-0 z-50 gap-5 bg-[#ccc]" }));
    var __VLS_8 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ to: "/products" }, { class: "hover:underline max-md:text-sm" })));
    var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ to: "/products" }, { class: "hover:underline max-md:text-sm" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
    __VLS_11.slots.default;
    var __VLS_11;
    var __VLS_12 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ to: "/about" }, { class: "hover:underline max-md:text-sm" })));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ to: "/about" }, { class: "hover:underline max-md:text-sm" })], __VLS_functionalComponentArgsRest(__VLS_13), false));
    __VLS_15.slots.default;
    var __VLS_15;
    var __VLS_16 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign({ to: "/contact" }, { class: "hover:underline max-md:text-sm text-nowrap" })));
    var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign({ to: "/contact" }, { class: "hover:underline max-md:text-sm text-nowrap" })], __VLS_functionalComponentArgsRest(__VLS_17), false));
    __VLS_19.slots.default;
    var __VLS_19;
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex justify-center items-center space-x-4" }));
    var __VLS_20 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20(__assign({ to: "/products" }, { class: "hover:underline max-md:text-sm" })));
    var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([__assign({ to: "/products" }, { class: "hover:underline max-md:text-sm" })], __VLS_functionalComponentArgsRest(__VLS_21), false));
    __VLS_23.slots.default;
    var __VLS_23;
    var __VLS_24 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24(__assign({ to: "/about" }, { class: "hover:underline max-md:text-sm" })));
    var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([__assign({ to: "/about" }, { class: "hover:underline max-md:text-sm" })], __VLS_functionalComponentArgsRest(__VLS_25), false));
    __VLS_27.slots.default;
    var __VLS_27;
    var __VLS_28 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    var __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28(__assign({ to: "/contact" }, { class: "hover:underline max-md:text-sm text-nowrap" })));
    var __VLS_30 = __VLS_29.apply(void 0, __spreadArray([__assign({ to: "/contact" }, { class: "hover:underline max-md:text-sm text-nowrap" })], __VLS_functionalComponentArgsRest(__VLS_29), false));
    __VLS_31.slots.default;
    var __VLS_31;
}
/** @type {__VLS_StyleScopedClasses['w-[34px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[34px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-black']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['w-8']} */ ;
/** @type {__VLS_StyleScopedClasses['h-8']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['top-6']} */ ;
/** @type {__VLS_StyleScopedClasses['left-0']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-5']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#ccc]']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:underline']} */ ;
/** @type {__VLS_StyleScopedClasses['max-md:text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:underline']} */ ;
/** @type {__VLS_StyleScopedClasses['max-md:text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:underline']} */ ;
/** @type {__VLS_StyleScopedClasses['max-md:text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-nowrap']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-4']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:underline']} */ ;
/** @type {__VLS_StyleScopedClasses['max-md:text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:underline']} */ ;
/** @type {__VLS_StyleScopedClasses['max-md:text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:underline']} */ ;
/** @type {__VLS_StyleScopedClasses['max-md:text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-nowrap']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            RouterLink: RouterLink,
            isMobileWidth: isMobileWidth,
            uiStore: uiStore,
            isMenuOpen: isMenuOpen,
            imageSrc: imageSrc,
            Menu: Menu,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
