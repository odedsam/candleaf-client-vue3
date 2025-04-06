export var normalizeTitle = function (title, wordLimit) {
    if (wordLimit === void 0) { wordLimit = 4; }
    return title.split(' ').slice(0, wordLimit).join(' ') + (title.split(' ').length > wordLimit ? '' : '');
};
export var getImageUrl = function (imageName) {
    return new URL("/src/assets/images/faces/".concat(imageName), import.meta.url).href;
};
export var formatPrice = function (price) {
    return (price !== null && price !== void 0 ? price : 0).toFixed(2);
};
export var formatShippingAddress = function (shippingData) {
    if (!shippingData.address ||
        !shippingData.postalCode ||
        !shippingData.city ||
        !shippingData.province ||
        !shippingData.country) {
        return 'כתובת לא זמינה';
    }
    return "".concat(shippingData.address, ",").concat(shippingData.postalCode.toString(), ", ").concat(shippingData.city, ",").concat(shippingData.province, ", ").concat(shippingData.country);
};
export var getUserFromStorage = function () {
    try {
        var raw = localStorage.getItem('auth.user');
        if (!raw)
            return null;
        var parsed = JSON.parse(raw);
        // duplicate stringify fix 
        return typeof parsed === 'string' ? JSON.parse(parsed) : parsed;
    }
    catch (_a) {
        return null;
    }
};
