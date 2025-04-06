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
import { useRoute } from 'vue-router';
import { computed } from 'vue';
var props = defineProps();
var route = useRoute();
//  get the current step index
var currentStepIndex = computed(function () {
    return props.steps.findIndex(function (step) { return route.path.includes(step.path); });
});
// define step classes for visual indication only
var stepClass = function (index) {
    return {
        'font-bold text-green-600': index <= currentStepIndex.value, //  highlight completed & current step
        'text-gray-500': index > currentStepIndex.value // future steps in gray
    };
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex justify-center items-center space-x-4 py-4 text-gray-600" }));
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.steps)); _i < _a.length; _i++) {
    var _b = _a[_i], step = _b[0], index = _b[1];
    (index);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: (__VLS_ctx.stepClass(index)) }));
    (step.name);
    if (index < __VLS_ctx.steps.length - 1) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)(__assign({ class: "mx-2 w-4 h-4 text-gray-400" }, { fill: "none", stroke: "currentColor", 'stroke-width': "2", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
            'stroke-linecap': "round",
            'stroke-linejoin': "round",
            d: "M9 5l7 7-7 7",
        });
    }
}
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-4']} */ ;
/** @type {__VLS_StyleScopedClasses['h-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-400']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            stepClass: stepClass,
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
