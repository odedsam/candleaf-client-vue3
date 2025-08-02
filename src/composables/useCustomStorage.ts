import { ref, watch, Ref } from 'vue';
import type { StorageOptions } from '@/types/global';

/**
 * A reusable composable to manage reactive state persisted in Web Storage (localStorage or sessionStorage).
 *
 * @param key The key under which the value is stored in storage.
 * @param defaultValue The default value to use if no value is found in storage.
 * @param storage The Web Storage API to use (localStorage or sessionStorage). Defaults to localStorage.
 * @param options Configuration options, eg., for merging default values.
 * @returns A Vue Ref object containing the reactive state.
 */


export function useCustomStorage<T>(
  key: string,
  defaultValue: T,
  storage: Storage = localStorage,
  options?: StorageOptions
): Ref<T> {
  const { mergeDefaults = false } = options || {};

  const state = ref<T>(defaultValue as T);

  const readFromStorage = () => {
    try {
      const storedValue = storage.getItem(key);
      if (storedValue !== null) {
        const parsedValue = JSON.parse(storedValue);

        if (
          mergeDefaults &&
          typeof defaultValue === 'object' &&
          defaultValue !== null &&
          typeof parsedValue === 'object' &&
          parsedValue !== null &&
          !Array.isArray(defaultValue) &&
          !Array.isArray(parsedValue)
        ) {
          state.value = { ...(defaultValue as object), ...(parsedValue as object) } as T;
        } else {
          state.value = parsedValue;
        }
      } else {
        state.value = defaultValue;
        storage.setItem(key, JSON.stringify(defaultValue));
      }
    } catch (e) {
      console.error(`[useCustomStorage] Error reading or parsing storage key "${key}":`, e);
      state.value = defaultValue;
    }
  };

  const writeToStorage = (newValue: T) => {
    try {
      storage.setItem(key, JSON.stringify(newValue));
    } catch (e) {
      console.error(`[useCustomStorage] Error writing to storage key "${key}":`, e);
    }
  };

  readFromStorage();

  watch(state, (newValue) => {
    writeToStorage(newValue);
  }, { deep: true });

  return state as Ref<T>;
}
