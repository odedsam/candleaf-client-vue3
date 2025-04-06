import { z } from "zod";
export var signUpSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});
export var validateAuthForm = function (form) {
    var _a, _b, _c;
    var result = signUpSchema.safeParse(form);
    if (!result.success) {
        return {
            name: ((_a = result.error.formErrors.fieldErrors.name) === null || _a === void 0 ? void 0 : _a[0]) || "",
            email: ((_b = result.error.formErrors.fieldErrors.email) === null || _b === void 0 ? void 0 : _b[0]) || "",
            password: ((_c = result.error.formErrors.fieldErrors.password) === null || _c === void 0 ? void 0 : _c[0]) || "",
        };
    }
    return null;
};
