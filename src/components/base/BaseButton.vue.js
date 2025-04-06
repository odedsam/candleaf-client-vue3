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
import { ref, computed } from "vue";
var props = withDefaults(defineProps(), {
    ripple: true,
});
var emit = defineEmits();
var baseClasses = "\n  relative overflow-hidden flex items-center justify-center cursor-pointer gap-2 px-4 py-2 rounded-lg\n  bg-[#56B280] text-white font-medium transition-all hover:bg-[#4ca372]\n  disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px] max-w-md\n";
var classes = computed(function () { return [
    baseClasses,
    props.grow ? "w-full flex-grow" : "",
    props.btnClass,
]; });
// ripple effect
var ripples = ref([]);
var createRipple = function (event) {
    if (!props.ripple || props.disabled)
        return;
    var button = event.currentTarget;
    var rect = button.getBoundingClientRect();
    var size = Math.max(rect.width, rect.height);
    var x = event.clientX - rect.left - size / 2;
    var y = event.clientY - rect.top - size / 2;
    var id = Date.now();
    ripples.value.push({ id: id, x: x, y: y });
    requestAnimationFrame(function () {
        setTimeout(function () {
            ripples.value = ripples.value.filter(function (r) { return r.id !== id; });
        }, 600);
    });
};
var handleClick = function (event) {
    createRipple(event);
    emit("click", event);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_withDefaultsArg = (function (t) { return t; })({
    ripple: true,
});
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: (__VLS_ctx.handleClick) }, { class: (__VLS_ctx.classes) }), { disabled: (__VLS_ctx.disabled) }));
if (__VLS_ctx.btnIcon) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: (__VLS_ctx.btnIcon), alt: "btn" }, { class: "w-5 h-5" }));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.label);
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.ripples)); _i < _a.length; _i++) {
    var ripple = _a[_i][0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span)(__assign(__assign({ key: (ripple.id) }, { class: "absolute bg-white opacity-50 rounded-full transform scale-0 animate-ripple" }), { style: ({
            top: "".concat(ripple.y, "px"),
            left: "".concat(ripple.x, "px"),
            width: '80px',
            height: '80px',
        }) }));
}
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['opacity-50']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['transform']} */ ;
/** @type {__VLS_StyleScopedClasses['scale-0']} */ ;
/** @type {__VLS_StyleScopedClasses['animate-ripple']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            classes: classes,
            ripples: ripples,
            handleClick: handleClick,
        };
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
; /* PartiallyEnd: #4569/main.vue */
