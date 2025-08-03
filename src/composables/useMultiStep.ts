import { ref, watch } from "vue"
import { useCustomStorage } from "./useCustomStorage"
import router from "@/router"

export function useMultiStep<T extends string>(
  storageKey: string,
  routes: T[],
  fallbackRoute: string = "/"
) {
  const storedStep = useCustomStorage<number>(storageKey, 0)
  const step = ref(storedStep.value)

  const updateStep = (direction: 1 | -1) => {
    const newStep = step.value + direction
    if (newStep >= 0 && newStep < routes.length) {
      step.value = newStep
      router.push(routes[newStep])
    } else if (direction === -1) {
      router.push(fallbackRoute)
    }
  }

  const nextStep = () => updateStep(1)
  const prevStep = () => updateStep(-1)

  watch(step, (v) => localStorage.setItem(storageKey, JSON.stringify(v)))

  return { step, nextStep, prevStep }
}
