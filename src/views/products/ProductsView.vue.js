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
import { nextTick, onMounted } from 'vue';
import { useProductStore } from '@/stores/productStore';
import { useCartStore } from '@/stores/cartStore';
import { storeToRefs } from 'pinia';
import BaseButton from '@/components/base/BaseButton.vue';
import { useNavigateToProduct } from '@/composables/useNavigateToProduct';
var cartStore = useCartStore();
var productStore = useProductStore();
var products = storeToRefs(productStore).products;
var navigateToProduct = useNavigateToProduct().navigateToProduct;
onMounted(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, productStore.fetchProducts()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
var normalizeTitle = function (title) {
    return title.split(' ').slice(0, 4).join(' ');
};
var addToCartAnimation = function (event, product) { return __awaiter(void 0, void 0, void 0, function () {
    var productImg, clonedImg, rect, cartX, cartY;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                event.stopPropagation();
                productImg = (_a = event.currentTarget
                    .closest('div')) === null || _a === void 0 ? void 0 : _a.querySelector('img');
                if (!productImg)
                    return [2 /*return*/];
                clonedImg = productImg.cloneNode(true);
                clonedImg.style.position = 'fixed';
                clonedImg.style.zIndex = '1000';
                clonedImg.style.width = '80px';
                clonedImg.style.height = '80px';
                clonedImg.style.borderRadius = '50%';
                clonedImg.style.transition =
                    'transform 1.5s cubic-bezier(0.42, 0, 0.58, 1), opacity 1.2s ease-in-out';
                clonedImg.style.opacity = '1';
                clonedImg.style.pointerEvents = 'none';
                document.body.appendChild(clonedImg);
                rect = productImg.getBoundingClientRect();
                clonedImg.style.left = "".concat(rect.left, "px");
                clonedImg.style.top = "".concat(rect.top, "px");
                return [4 /*yield*/, nextTick()
                    // destination place to --> (cart-icon-header)
                ];
            case 1:
                _b.sent();
                cartX = window.innerWidth - 80;
                cartY = 50;
                clonedImg.style.transform = "translate(".concat(cartX - rect.left, "px, ").concat(cartY - rect.top, "px) scale(0.5)");
                clonedImg.style.opacity = '0.7';
                setTimeout(function () {
                    clonedImg.style.transform = "translate(".concat(cartX - rect.left, "px, ").concat(cartY - rect.top, "px) scale(0)");
                    clonedImg.style.opacity = '0';
                }, 1000);
                setTimeout(function () {
                    document.body.removeChild(clonedImg);
                    // adding to cart after
                }, 1500);
                cartStore.addToCart(product);
                return [2 /*return*/];
        }
    });
}); };
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "p-6" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" }));
var _loop_1 = function (product) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.navigateToProduct(product);
        } }, { key: (product.id) }), { class: "p-4 bg-white shadow-lg rounded-xl relative" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: (product.image), alt: "Product", draggable: "false" }, { class: "w-full h-80 object-contain rounded-lg mb-4" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "text-lg font-semibold" }));
    (__VLS_ctx.normalizeTitle(product.title));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-gray-600 py-3" }));
    (product.price);
    /** @type {[typeof BaseButton, ]} */ ;
    // @ts-ignore
    var __VLS_0 = __VLS_asFunctionalComponent(BaseButton, new BaseButton(__assign({ 'onClick': {} }, { label: "Add To Cart", grow: (false), disabled: (false) })));
    var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { label: "Add To Cart", grow: (false), disabled: (false) })], __VLS_functionalComponentArgsRest(__VLS_0), false));
    var __VLS_3 = void 0;
    var __VLS_4 = void 0;
    var __VLS_5 = void 0;
    var __VLS_6 = {
        onClick: (function (event) { return __VLS_ctx.addToCartAnimation(event, product); })
    };
};
var __VLS_2;
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.products)); _i < _a.length; _i++) {
    var product = _a[_i][0];
    _loop_1(product);
}
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-1']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:grid-cols-2']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:grid-cols-3']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-6']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-80']} */ ;
/** @type {__VLS_StyleScopedClasses['object-contain']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            BaseButton: BaseButton,
            products: products,
            navigateToProduct: navigateToProduct,
            normalizeTitle: normalizeTitle,
            addToCartAnimation: addToCartAnimation,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
