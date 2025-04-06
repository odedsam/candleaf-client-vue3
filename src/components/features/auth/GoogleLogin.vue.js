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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { computed } from 'vue';
import { useAuthStore } from '@/stores/authStore';
var __VLS_props = defineProps();
var authStore = useAuthStore();
var isLoading = computed(function () { return authStore.isLoading; });
var errorMessage = computed(function () { return authStore.error; });
var handleLogin = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, authStore.handleGoogleSignIn()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "justify-center items-center flex flex-col gap-2" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: (__VLS_ctx.handleLogin) }, { disabled: (__VLS_ctx.isLoading) }), { class: "bg-white flex justify-center items-center text-gray-500 border-[#ccc] gap-3 py-2.5 px-3.5 cursor-pointer transition-all duration-300 font-bold hover:bg-[#f1f1f1] hover:border-1 rounded-xl" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)(__assign({ class: "w-6 h-6" }, { viewBox: "0 0 48 48" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    fill: "#4285F4",
    d: "M24 9.5c3.64 0 6.43 1.39 8.28 2.56l6.15-6.15C34.58 2.03 29.71 0 24 0 14.71 0 6.9 5.39 2.82 13.23l7.32 5.69C13.13 12.08 18.02 9.5 24 9.5z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    fill: "#34A853",
    d: "M46.9 24.48c0-1.49-.13-2.92-.37-4.31H24v8.18h13.06c-.6 3.18-2.24 5.83-4.63 7.63l7.26 5.62C44.18 36.69 46.9 31.14 46.9 24.48z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    fill: "#FBBC05",
    d: "M11.54 28.04c-.55-1.56-.85-3.22-.85-4.96s.3-3.4.85-4.96L4.18 12.45C2.54 15.78 1.6 19.33 1.6 23.08s.94 7.3 2.58 10.63l7.36-5.67z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    fill: "#EA4335",
    d: "M24 46c5.73 0 10.47-1.85 13.96-5.03l-7.26-5.62c-2.03 1.36-4.62 2.17-7.47 2.17-5.98 0-11.06-3.87-12.89-9.2l-7.32 5.67C6.91 40.62 14.72 46 24 46z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    fill: "none",
    d: "M0 0h48v48H0z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.isLoading ? 'Signing in...' : __VLS_ctx.text);
if (__VLS_ctx.errorMessage) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "text-red-500 text-sm font-medium" }));
    (__VLS_ctx.errorMessage);
}
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['border-[#ccc]']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3.5']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-[#f1f1f1]']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:border-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6']} */ ;
/** @type {__VLS_StyleScopedClasses['h-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            isLoading: isLoading,
            errorMessage: errorMessage,
            handleLogin: handleLogin,
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
