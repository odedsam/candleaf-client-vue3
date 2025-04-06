var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { RouterView } from 'vue-router';
import { Toaster } from 'vue-sonner';
import ThemeToggle from './components/shared/ThemeToggle.vue';
var apper = document.querySelector("#app");
var elementsWithOverflow = apper.querySelectorAll("*");
var notVisibleOverflowElements = Array.from(elementsWithOverflow).filter(function (el) { return getComputedStyle(el).overflow !== "visible"; });
console.log(notVisibleOverflowElements);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
var __VLS_0 = {}.Toaster;
/** @type {[typeof __VLS_components.Toaster, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    position: "top-right",
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        position: "top-right",
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
/** @type {[typeof ThemeToggle, ]} */ ;
// @ts-ignore
var __VLS_4 = __VLS_asFunctionalComponent(ThemeToggle, new ThemeToggle({}));
var __VLS_5 = __VLS_4.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_4), false));
var __VLS_7 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, ]} */ ;
// @ts-ignore
var __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({}));
var __VLS_9 = __VLS_8.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_8), false));
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            RouterView: RouterView,
            Toaster: Toaster,
            ThemeToggle: ThemeToggle,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
