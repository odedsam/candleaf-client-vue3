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
import UserAvatar from '@/components/ui/UserAvatar.vue';
import MenuBar from '@/components/layout/MenuBar.vue';
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)(__assign({ class: "flex justify-between items-center bg-white dark:bg-zinc-800 py-6 max-md:px-2 px-8 transition-colors duration-300" }));
/** @type {[typeof LogoIcon, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(LogoIcon, new LogoIcon(__assign({ class: "order-2 md:order-1" })));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([__assign({ class: "order-2 md:order-1" })], __VLS_functionalComponentArgsRest(__VLS_0), false));
/** @type {[typeof MenuBar, ]} */ ;
// @ts-ignore
var __VLS_3 = __VLS_asFunctionalComponent(MenuBar, new MenuBar(__assign({ class: "order-1 md:order-2" })));
var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([__assign({ class: "order-1 md:order-2" })], __VLS_functionalComponentArgsRest(__VLS_3), false));
/** @type {[typeof UserAvatar, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(UserAvatar, new UserAvatar({}));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_6), false));
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-zinc-800']} */ ;
/** @type {__VLS_StyleScopedClasses['py-6']} */ ;
/** @type {__VLS_StyleScopedClasses['max-md:px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-8']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['order-2']} */ ;
/** @type {__VLS_StyleScopedClasses['md:order-1']} */ ;
/** @type {__VLS_StyleScopedClasses['order-1']} */ ;
/** @type {__VLS_StyleScopedClasses['md:order-2']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            LogoIcon: LogoIcon,
            UserAvatar: UserAvatar,
            MenuBar: MenuBar,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
