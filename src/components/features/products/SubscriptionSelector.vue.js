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
import { computed, ref } from 'vue';
import { useCartStore } from '@/stores/cartStore';
import RadioInput from '@/components/features/products/RadioInput.vue';
import SelectDelivery from '@/components/features/products/SelectDelivery.vue';
var cartStore = useCartStore();
var selectedOption = ref(null);
var deliveryInterval = ref('4 weeks');
var selectionData = computed(function () { return ({
    type: selectedOption.value,
    weeks: selectedOption.value === 'subscribe' ? deliveryInterval.value : null,
}); });
var borderToggle = function (option) {
    return selectedOption.value === option ? 'border-selected' : 'border-transparent';
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['option-container']} */ ;
/** @type {__VLS_StyleScopedClasses['option-container']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "w-full grid grid-auto-rows-2" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.selectedOption = 'one-time';
    } }, { class: "option-container" }), { class: (__VLS_ctx.borderToggle('one-time')) }));
/** @type {[typeof RadioInput, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(RadioInput, new RadioInput({
    labelStyle: ('max-sm:pl-2 pl-4 max-sm:text-xs text-break text-sm lg:text-md font-roboto'),
    modelValue: (__VLS_ctx.selectedOption),
    value: ('one-time'),
    radioLabel: "One Time Purchase",
}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
        labelStyle: ('max-sm:pl-2 pl-4 max-sm:text-xs text-break text-sm lg:text-md font-roboto'),
        modelValue: (__VLS_ctx.selectedOption),
        value: ('one-time'),
        radioLabel: "One Time Purchase",
    }], __VLS_functionalComponentArgsRest(__VLS_0), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.selectedOption = 'subscribe';
    } }, { class: "option-container" }), { class: (__VLS_ctx.borderToggle('subscribe')) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex gap-4 max-sm:gap-3 items-center lg:text-nowrap" }));
/** @type {[typeof RadioInput, ]} */ ;
// @ts-ignore
var __VLS_3 = __VLS_asFunctionalComponent(RadioInput, new RadioInput({
    labelStyle: ('max-sm:pl-2 pl-4 max-sm:text-xs text-break text-sm lg:text-md font-roboto'),
    modelValue: (__VLS_ctx.selectedOption),
    value: ('subscribe'),
    radioLabel: "Subscribe and delivery every",
}));
var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([{
        labelStyle: ('max-sm:pl-2 pl-4 max-sm:text-xs text-break text-sm lg:text-md font-roboto'),
        modelValue: (__VLS_ctx.selectedOption),
        value: ('subscribe'),
        radioLabel: "Subscribe and delivery every",
    }], __VLS_functionalComponentArgsRest(__VLS_3), false));
/** @type {[typeof SelectDelivery, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(SelectDelivery, new SelectDelivery({
    modelValue: (__VLS_ctx.deliveryInterval),
    options: (['2 weeks', '4 weeks', '6 weeks']),
}));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.deliveryInterval),
        options: (['2 weeks', '4 weeks', '6 weeks']),
    }], __VLS_functionalComponentArgsRest(__VLS_6), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[.975rem] py-3 max-sm:py-2 max-sm:text-xs font-roboto text-[#818181]" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.br)(__assign({ class: "hidden max-md:block" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: "#" }, { class: "text-[#92cfad]" }));
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-auto-rows-2']} */ ;
/** @type {__VLS_StyleScopedClasses['option-container']} */ ;
/** @type {__VLS_StyleScopedClasses['option-container']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['max-sm:gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-nowrap']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[.975rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['max-sm:py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['max-sm:text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['font-roboto']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#818181]']} */ ;
/** @type {__VLS_StyleScopedClasses['hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['max-md:block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#92cfad]']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            RadioInput: RadioInput,
            SelectDelivery: SelectDelivery,
            selectedOption: selectedOption,
            deliveryInterval: deliveryInterval,
            borderToggle: borderToggle,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
