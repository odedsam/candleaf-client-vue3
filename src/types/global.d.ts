declare global {
  interface Window {
    google: any
  }
}

import { Ref } from 'vue';

export interface StorageOptions {
  /**
   * Whether to merge the default value with the value from storage.
   * Only applies if both the stored value and default value are objects.
   * Defaults to false.
   */
  mergeDefaults?: boolean;
}

/**
 * A reusable composable to manage reactive state persisted in Web Storage (localStorage or sessionStorage).
 *
 * @param key The key under which the value is stored in storage.
 * @param defaultValue The default value to use if no value is found in storage.
 * @param storage The Web Storage API to use (localStorage or sessionStorage). Defaults to localStorage.
 * @param options Configuration options, e.g., for merging default values.
 * @returns A Vue Ref object containing the reactive state.
 */
export declare function useCustomStorage<T>(
  key: string,
  defaultValue: T,
  storage?: Storage,
  options?: StorageOptions
): Ref<T>;
