import { toast } from 'vue-sonner'
import IconCheck from '~icons/tabler/check'

type ToastOptions = {
  ToastMessage: string
  bgColor?: string
  textColor?: string
  borderColor?: string
  duration?: number
  position?: 'bottom-right' | 'top-right' | 'bottom-left' | 'top-left'
}

export function showToast({
  ToastMessage,
  bgColor,
  textColor,
  borderColor,
  position = 'bottom-right',
  duration = 2500
}: ToastOptions) {
  toast(ToastMessage, {
    position,
    icon: IconCheck, 
    duration,
    style: {
      background: bgColor ?? '#0f172a',
      color: textColor ?? '#ffffff',
      border: `1px solid ${borderColor ?? '#0ea5e9'}`
    }
  })
}
