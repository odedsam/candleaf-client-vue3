import debounce from "lodash.debounce";

export default function useDebouncer<T>(callback: (value: T) => void, delay = 300) {
  return { update: debounce(callback, delay) };
}
