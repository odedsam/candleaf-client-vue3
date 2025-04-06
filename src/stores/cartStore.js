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
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { showToast } from '@/utils';
export var useCartStore = defineStore('cart', function () {
    var cartItems = ref([]);
    var isCartOpen = ref(false);
    //  total items count for cart icon
    var cartAmount = computed(function () {
        return cartItems.value.reduce(function (total, item) { return total + item.quantity; }, 0);
    });
    //  computed subtotal price
    var subTotal = computed(function () {
        return cartItems.value.reduce(function (total, item) { return total + item.price * item.quantity; }, 0);
    });
    //  function to add an item to the cart or increase quantity
    var addToCart = function (product) {
        var existingProduct = cartItems.value.find(function (item) { return item.id === product.id; });
        if (existingProduct) {
            existingProduct.quantity += 1;
        }
        else {
            cartItems.value.push(__assign(__assign({}, product), { quantity: 1 }));
        }
        showToast({
            ToastMessage: 'Item added to cart',
            bgColor: '#56B280',
            textColor: '#fff',
            borderColor: '#56B280',
            position: 'bottom-right'
        });
    };
    // increase quantity of products synchronized with cart icon quantity
    var increaseQuantity = function (productId) {
        var index = cartItems.value.findIndex(function (item) { return item.id === productId; });
        if (index !== -1) {
            cartItems.value[index] = __assign(__assign({}, cartItems.value[index]), { quantity: cartItems.value[index].quantity + 1 });
        }
    };
    var decreaseQuantity = function (productId) {
        var index = cartItems.value.findIndex(function (item) { return item.id === productId; });
        if (index !== -1 && cartItems.value[index].quantity > 1) {
            cartItems.value[index] = __assign(__assign({}, cartItems.value[index]), { quantity: cartItems.value[index].quantity - 1 });
        }
        else {
            cartItems.value.splice(index, 1);
        }
    };
    var removeFromCart = function (productId) {
        cartItems.value = cartItems.value.filter(function (item) { return item.id !== productId; });
        showToast({
            ToastMessage: 'Item removed from cart',
            bgColor: '#56B280',
            textColor: '#fff',
            borderColor: '#56B280',
            position: 'bottom-left'
        });
    };
    var toggleCart = function () {
        isCartOpen.value = !isCartOpen.value;
    };
    return {
        cartItems: cartItems,
        cartAmount: cartAmount, // total items for cart icon
        subTotal: subTotal, // subtotal price
        isCartOpen: isCartOpen,
        addToCart: addToCart,
        increaseQuantity: increaseQuantity,
        decreaseQuantity: decreaseQuantity,
        toggleCart: toggleCart,
        removeFromCart: removeFromCart,
    };
});
