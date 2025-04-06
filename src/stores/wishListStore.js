import { defineStore } from 'pinia';
import { ref } from 'vue';
export var useWishlistStore = defineStore('wishlist', function () {
    var wishlist = ref([]);
    var addToWishlist = function (product) {
        if (!wishlist.value.some(function (item) { return item.id === product.id; })) {
            wishlist.value.push(product);
        }
    };
    var removeFromWishlist = function (productId) {
        return (wishlist.value = wishlist.value.filter(function (item) { return item.id !== productId; }));
    };
    return { wishlist: wishlist, addToWishlist: addToWishlist, removeFromWishlist: removeFromWishlist };
});
