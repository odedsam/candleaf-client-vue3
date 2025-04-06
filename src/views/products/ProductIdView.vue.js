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
import { computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import DetailsSection from '@/components/features/products/DetailsSection.vue';
import LoadingSpinner from '@/components/feedback/LoadingSpinner.vue';
import { ingredients, descriptionSection } from '@/utils/constants';
import { useProductStore } from '@/stores/productStore';
import { storeToRefs } from 'pinia';
var route = useRoute();
var router = useRouter();
var productStore = useProductStore();
var _a = storeToRefs(productStore), products = _a.products, selectedProduct = _a.selectedProduct, isLoading = _a.isLoading;
var productId = computed(function () { return Number(route.params.id); });
//  Function to find and set selected product
var setProduct = function () {
    var product = products.value.find(function (p) { return p.id === productId.value; });
    if (product) {
        selectedProduct.value = product;
    }
    else {
        console.error("⚠️ Product Not Found:", productId.value);
    }
};
onMounted(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                isLoading.value = true;
                if (!(products.value.length === 0)) return [3 /*break*/, 2];
                return [4 /*yield*/, productStore.fetchProducts()];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                setProduct();
                isLoading.value = false;
                return [2 /*return*/];
        }
    });
}); });
//  Watch for route changes (e.g., navigating to a different product)
watch(function () { return route.params.id; }, function () {
    setProduct();
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
if (__VLS_ctx.selectedProduct) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)(__assign({ class: "grid grid-flow-row h-full w-full max-sm:py-12 items-center" }));
    /** @type {[typeof DetailsSection, ]} */ ;
    // @ts-ignore
    var __VLS_0 = __VLS_asFunctionalComponent(DetailsSection, new DetailsSection({
        selectedProduct: (__VLS_ctx.selectedProduct),
        ingredients: (__VLS_ctx.ingredients),
        description: (__VLS_ctx.descriptionSection),
    }));
    var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
            selectedProduct: (__VLS_ctx.selectedProduct),
            ingredients: (__VLS_ctx.ingredients),
            description: (__VLS_ctx.descriptionSection),
        }], __VLS_functionalComponentArgsRest(__VLS_0), false));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    /** @type {[typeof LoadingSpinner, ]} */ ;
    // @ts-ignore
    var __VLS_3 = __VLS_asFunctionalComponent(LoadingSpinner, new LoadingSpinner({}));
    var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_3), false));
}
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-flow-row']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['max-sm:py-12']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            DetailsSection: DetailsSection,
            LoadingSpinner: LoadingSpinner,
            ingredients: ingredients,
            descriptionSection: descriptionSection,
            selectedProduct: selectedProduct,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
