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
import { ref } from 'vue';
import SelectDelivery from '@/components/features/products/SelectDelivery.vue';
var props = defineProps();
var emits = defineEmits(['update:modelValue']);
var deliveryInterval = ref('4 weeks');
var selectOption = function (value) {
    emits('update:modelValue', value);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['radio-option']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "radio-container" }));
var _loop_1 = function (option) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.selectOption(option.value);
        } }, { key: (option.value) }), { class: "radio-option" }), { class: ({ selected: __VLS_ctx.modelValue === option.value }) }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "radio-circle" }));
    if (__VLS_ctx.modelValue === option.value) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "radio-dot" }));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "radio-content" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    (option.label);
    if (option.hasSelect && __VLS_ctx.modelValue === option.value) {
        /** @type {[typeof SelectDelivery, ]} */ ;
        // @ts-ignore
        var __VLS_0 = __VLS_asFunctionalComponent(SelectDelivery, new SelectDelivery({
            modelValue: (__VLS_ctx.deliveryInterval),
            options: (['2 weeks', '4 weeks', '6 weeks']),
        }));
        var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
                modelValue: (__VLS_ctx.deliveryInterval),
                options: (['2 weeks', '4 weeks', '6 weeks']),
            }], __VLS_functionalComponentArgsRest(__VLS_0), false));
    }
    if (option.hasSelect) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            href: "#",
        });
    }
};
for (var _i = 0, _a = __VLS_getVForSourceType((props.options)); _i < _a.length; _i++) {
    var option = _a[_i][0];
    _loop_1(option);
}
/** @type {__VLS_StyleScopedClasses['radio-container']} */ ;
/** @type {__VLS_StyleScopedClasses['radio-option']} */ ;
/** @type {__VLS_StyleScopedClasses['selected']} */ ;
/** @type {__VLS_StyleScopedClasses['radio-circle']} */ ;
/** @type {__VLS_StyleScopedClasses['radio-dot']} */ ;
/** @type {__VLS_StyleScopedClasses['radio-content']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            SelectDelivery: SelectDelivery,
            deliveryInterval: deliveryInterval,
            selectOption: selectOption,
        };
    },
    emits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
    emits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
