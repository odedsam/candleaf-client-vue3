import { toast } from 'vue-sonner';
import IconCheck from '~icons/tabler/check';
export function showToast(_a) {
    var ToastMessage = _a.ToastMessage, bgColor = _a.bgColor, textColor = _a.textColor, borderColor = _a.borderColor, _b = _a.position, position = _b === void 0 ? 'bottom-right' : _b, _c = _a.duration, duration = _c === void 0 ? 2500 : _c;
    toast(ToastMessage, {
        position: position,
        icon: IconCheck,
        duration: duration,
        style: {
            background: bgColor !== null && bgColor !== void 0 ? bgColor : '#0f172a',
            color: textColor !== null && textColor !== void 0 ? textColor : '#ffffff',
            border: "1px solid ".concat(borderColor !== null && borderColor !== void 0 ? borderColor : '#0ea5e9')
        }
    });
}
