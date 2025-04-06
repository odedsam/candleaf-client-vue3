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
import { watch } from 'vue';
import { useLocalStorage } from '@vueuse/core';
var darkMode = useLocalStorage('theme.dark', false);
watch(darkMode, function (enabled) {
    document.documentElement.classList.toggle('dark', enabled);
}, { immediate: true });
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.darkMode = !__VLS_ctx.darkMode;
    } }, { class: "\u0066\u0069\u0078\u0065\u0064\u0020\u0062\u006f\u0074\u0074\u006f\u006d\u002d\u0036\u0020\u0072\u0069\u0067\u0068\u0074\u002d\u0036\u0020\u0077\u002d\u0031\u0030\u0020\u0068\u002d\u0031\u0030\u0020\u0066\u006c\u0065\u0078\u0020\u0069\u0074\u0065\u006d\u0073\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u0020\u006a\u0075\u0073\u0074\u0069\u0066\u0079\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u0066\u0075\u006c\u006c\u0020\u000a\u0020\u0020\u0020\u0020\u0073\u0068\u0061\u0064\u006f\u0077\u002d\u006d\u0064\u0020\u0074\u0072\u0061\u006e\u0073\u0069\u0074\u0069\u006f\u006e\u002d\u0061\u006c\u006c\u0020\u0062\u0067\u002d\u007a\u0069\u006e\u0063\u002d\u0038\u0030\u0030\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u0062\u0067\u002d\u007a\u0069\u006e\u0063\u002d\u0037\u0030\u0030\u0020\u0074\u0065\u0078\u0074\u002d\u0077\u0068\u0069\u0074\u0065" }));
if (!__VLS_ctx.darkMode) {
    var __VLS_0 = {}.ITablerSun;
    /** @type {[typeof __VLS_components.ITablerSun, typeof __VLS_components.iTablerSun, ]} */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ class: "w-6 h-6" })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "w-6 h-6" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
}
else {
    var __VLS_4 = {}.ITablerMoonStars;
    /** @type {[typeof __VLS_components.ITablerMoonStars, typeof __VLS_components.iTablerMoonStars, ]} */ ;
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ class: "w-6 h-6" })));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ class: "w-6 h-6" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
}
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-6']} */ ;
/** @type {__VLS_StyleScopedClasses['right-6']} */ ;
/** @type {__VLS_StyleScopedClasses['w-10']} */ ;
/** @type {__VLS_StyleScopedClasses['h-10']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-md']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-zinc-800']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-zinc-700']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6']} */ ;
/** @type {__VLS_StyleScopedClasses['h-6']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6']} */ ;
/** @type {__VLS_StyleScopedClasses['h-6']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            darkMode: darkMode,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
