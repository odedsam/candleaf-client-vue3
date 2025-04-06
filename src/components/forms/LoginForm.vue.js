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
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';
import BaseInput from '../base/BaseInput.vue';
import GoogleLogin from '@/components/features/auth/GoogleLogin.vue';
var authStore = useAuthStore();
var router = useRouter();
var form = ref({
    name: '',
    email: '',
    password: '',
});
var isSignUp = ref(false);
var isLoading = ref(false);
var errorMessage = ref(null);
var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
    var endpoint, res, message, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                isLoading.value = true;
                errorMessage.value = null;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, 7, 8]);
                endpoint = isSignUp.value ? '/api/auth/register' : '/api/auth/login';
                return [4 /*yield*/, fetch(endpoint, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        credentials: 'include',
                        body: JSON.stringify(form.value),
                    })];
            case 2:
                res = _a.sent();
                if (!!res.ok) return [3 /*break*/, 4];
                return [4 /*yield*/, res.json().catch(function () { return ({ message: 'Something went wrong' }); })];
            case 3:
                message = (_a.sent()).message;
                throw new Error(message);
            case 4: return [4 /*yield*/, authStore.fetchCurrentUser()];
            case 5:
                _a.sent();
                router.push('/');
                return [3 /*break*/, 8];
            case 6:
                err_1 = _a.sent();
                errorMessage.value = err_1.message || 'Login failed';
                return [3 /*break*/, 8];
            case 7:
                isLoading.value = false;
                return [7 /*endfinally*/];
            case 8: return [2 /*return*/];
        }
    });
}); };
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "container text-center p-5 border border-emerald-500 py-12 rounded-3xl" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)(__assign({ onSubmit: (__VLS_ctx.handleSubmit) }, { class: "space-y-3" }));
if (__VLS_ctx.isSignUp) {
    /** @type {[typeof BaseInput, ]} */ ;
    // @ts-ignore
    var __VLS_0 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
        modelValue: (__VLS_ctx.form.name),
        placeholder: "Full Name",
    }));
    var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
            modelValue: (__VLS_ctx.form.name),
            placeholder: "Full Name",
        }], __VLS_functionalComponentArgsRest(__VLS_0), false));
}
/** @type {[typeof BaseInput, ]} */ ;
// @ts-ignore
var __VLS_3 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
    modelValue: (__VLS_ctx.form.email),
    type: "email",
    placeholder: "Email",
}));
var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.form.email),
        type: "email",
        placeholder: "Email",
    }], __VLS_functionalComponentArgsRest(__VLS_3), false));
/** @type {[typeof BaseInput, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(BaseInput, new BaseInput(__assign({ modelValue: (__VLS_ctx.form.password), type: "password", placeholder: "Password" }, { class: "mb-12" })));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([__assign({ modelValue: (__VLS_ctx.form.password), type: "password", placeholder: "Password" }, { class: "mb-12" })], __VLS_functionalComponentArgsRest(__VLS_6), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ class: "\u0062\u0067\u002d\u005b\u0023\u0035\u0036\u0042\u0032\u0038\u0030\u005d\u0020\u0063\u0075\u0072\u0073\u006f\u0072\u002d\u0070\u006f\u0069\u006e\u0074\u0065\u0072\u0020\u0077\u002d\u0066\u0075\u006c\u006c\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u006d\u0061\u0078\u002d\u0077\u002d\u005b\u0031\u0033\u002e\u0033\u0037\u0035\u0072\u0065\u006d\u005d\u0020\u0074\u0065\u0078\u0074\u002d\u0077\u0068\u0069\u0074\u0065\u0020\u0070\u002d\u0032\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u006d\u0064" }, { type: "submit", disabled: (__VLS_ctx.isLoading) }));
(__VLS_ctx.isLoading ? 'Processing...' : __VLS_ctx.isSignUp ? 'Sign Up' : 'Sign In');
if (__VLS_ctx.errorMessage) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-red-500 text-sm" }));
    (__VLS_ctx.errorMessage);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "my-4" }));
/** @type {[typeof GoogleLogin, ]} */ ;
// @ts-ignore
var __VLS_9 = __VLS_asFunctionalComponent(GoogleLogin, new GoogleLogin({
    text: (!__VLS_ctx.isSignUp ? 'Sign In With Google' : 'Sign Up With Google'),
}));
var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([{
        text: (!__VLS_ctx.isSignUp ? 'Sign In With Google' : 'Sign Up With Google'),
    }], __VLS_functionalComponentArgsRest(__VLS_9), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-sm text-gray-500 text-center mt-2" }));
(__VLS_ctx.isSignUp ? 'Already have an account?' : "Don't have an account?");
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.isSignUp = !__VLS_ctx.isSignUp;
    } }, { class: "text-[#56B280] cursor-pointer underline ml-1" }));
(__VLS_ctx.isSignUp ? 'Sign in' : 'Sign up');
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-5']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-emerald-500']} */ ;
/** @type {__VLS_StyleScopedClasses['py-12']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-12']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#56B280]']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-[13.375rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['my-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#56B280]']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['underline']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-1']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            BaseInput: BaseInput,
            GoogleLogin: GoogleLogin,
            form: form,
            isSignUp: isSignUp,
            isLoading: isLoading,
            errorMessage: errorMessage,
            handleSubmit: handleSubmit,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
