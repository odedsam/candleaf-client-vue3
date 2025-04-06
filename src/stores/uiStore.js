import { defineStore } from 'pinia';
import { ref } from 'vue';
export var useUIStore = defineStore('ui', function () {
    var isMenuOpen = ref(false);
    var toasts = ref([]);
    var toggleMenu = function () {
        isMenuOpen.value = !isMenuOpen.value;
    };
    var showToast = function (message, type, duration) {
        if (type === void 0) { type = 'success'; }
        if (duration === void 0) { duration = 3000; }
        var id = Date.now(); // Unique ID for each toast
        toasts.value.push({ id: id, message: message, type: type });
        // Auto-remove toast after duration
        setTimeout(function () {
            removeToast(id);
        }, duration);
    };
    // Remove Toast by ID
    var removeToast = function (id) {
        toasts.value = toasts.value.filter(function (toast) { return toast.id !== id; });
    };
    return {
        isMenuOpen: isMenuOpen,
        toggleMenu: toggleMenu,
        toasts: toasts,
        showToast: showToast,
        removeToast: removeToast,
    };
});
