import debounce from "lodash.debounce";
export default function useDebouncer(callback, delay) {
    if (delay === void 0) { delay = 300; }
    return { update: debounce(callback, delay) };
}
