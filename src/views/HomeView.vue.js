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
import { ref, onMounted } from 'vue';
import HomeHero from '@/components/sections/HomeHero.vue';
import FeaturesInfo from '@/components/sections/FeaturesInfo.vue';
import TestimonialsComp from '@/components/sections/TestimonialsComp.vue';
import PopularPr from '@/components/sections/PopularPr.vue';
import FetchStatus from '@/components/feedback/FetchStatus.vue';
import { productCatalog } from '@/utils/constants';
import { useAuthStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';
import { useProductStore } from '@/stores/productStore';
/*  AuthStore */
var authStore = useAuthStore();
var productStore = useProductStore();
var _a = storeToRefs(productStore), catalogProducts = _a.catalogProducts, popularProducts = _a.popularProducts;
/* Error Fetching Products Handling  */
var isLoading = ref(true);
var error = ref(null);
var data = ref(null);
onMounted(function () { return __awaiter(void 0, void 0, void 0, function () {
    var err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, productStore.fetchProducts()];
            case 1:
                _a.sent();
                setTimeout(function () {
                    data.value = catalogProducts;
                    isLoading.value = false;
                }, 600);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.error(err_1);
                error.value = 'Failed to load products';
                isLoading.value = false;
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)(__assign({ class: "max-w-full" }));
/** @type {[typeof HomeHero, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(HomeHero, new HomeHero({}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_0), false));
/** @type {[typeof FetchStatus, typeof FetchStatus, ]} */ ;
// @ts-ignore
var __VLS_3 = __VLS_asFunctionalComponent(FetchStatus, new FetchStatus({
    isLoading: (__VLS_ctx.isLoading),
    error: (__VLS_ctx.error),
    data: (__VLS_ctx.productCatalog),
}));
var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([{
        isLoading: (__VLS_ctx.isLoading),
        error: (__VLS_ctx.error),
        data: (__VLS_ctx.productCatalog),
    }], __VLS_functionalComponentArgsRest(__VLS_3), false));
__VLS_5.slots.default;
/** @type {[typeof FeaturesInfo, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(FeaturesInfo, new FeaturesInfo({}));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_6), false));
/** @type {[typeof TestimonialsComp, ]} */ ;
// @ts-ignore
var __VLS_9 = __VLS_asFunctionalComponent(TestimonialsComp, new TestimonialsComp({}));
var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_9), false));
/** @type {[typeof PopularPr, ]} */ ;
// @ts-ignore
var __VLS_12 = __VLS_asFunctionalComponent(PopularPr, new PopularPr({
    popularProducts: (__VLS_ctx.popularProducts),
}));
var __VLS_13 = __VLS_12.apply(void 0, __spreadArray([{
        popularProducts: (__VLS_ctx.popularProducts),
    }], __VLS_functionalComponentArgsRest(__VLS_12), false));
var __VLS_5;
/** @type {__VLS_StyleScopedClasses['max-w-full']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            HomeHero: HomeHero,
            FeaturesInfo: FeaturesInfo,
            TestimonialsComp: TestimonialsComp,
            PopularPr: PopularPr,
            FetchStatus: FetchStatus,
            productCatalog: productCatalog,
            popularProducts: popularProducts,
            isLoading: isLoading,
            error: error,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
