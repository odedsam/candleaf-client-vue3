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
import BaseInput from '@/components/base/BaseInput.vue';
var country = defineModel('country', { default: '' });
var city = defineModel('city', { default: '' });
var street = defineModel('street', { default: '' });
var zip = defineModel('zip', { default: '' });
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_defaults = {
    'country': '',
    'city': '',
    'street': '',
    'zip': '',
};
var __VLS_modelEmit = defineEmits();
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "grid gap-2.5" }));
/** @type {[typeof BaseInput, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
    modelValue: (__VLS_ctx.street),
    placeholder: "Street",
}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.street),
        placeholder: "Street",
    }], __VLS_functionalComponentArgsRest(__VLS_0), false));
/** @type {[typeof BaseInput, ]} */ ;
// @ts-ignore
var __VLS_3 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
    modelValue: (__VLS_ctx.zip),
    placeholder: "Zip",
}));
var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.zip),
        placeholder: "Zip",
    }], __VLS_functionalComponentArgsRest(__VLS_3), false));
/** @type {[typeof BaseInput, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
    modelValue: (__VLS_ctx.city),
    placeholder: "City",
}));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.city),
        placeholder: "City",
    }], __VLS_functionalComponentArgsRest(__VLS_6), false));
/** @type {[typeof BaseInput, ]} */ ;
// @ts-ignore
var __VLS_9 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
    modelValue: (__VLS_ctx.country),
    placeholder: "Country",
}));
var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.country),
        placeholder: "Country",
    }], __VLS_functionalComponentArgsRest(__VLS_9), false));
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2.5']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            BaseInput: BaseInput,
            country: country,
            city: city,
            street: street,
            zip: zip,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
