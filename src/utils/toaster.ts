import { toast } from 'vue-sonner'
import IconCheck from '~icons/tabler/check'

export type ToastOptions = {
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

const elegantGreen = '#a7f3d0';
const elegantBlack = '#1e293b';
const elegantWhite = '#f8fafc';
const errorRed = '#dc2626'


export const successToast = (message: string) => {
    showToast({
      ToastMessage: message,
      bgColor: elegantGreen,
      textColor: elegantBlack,
      borderColor: elegantGreen,
      position: 'top-right',
    });

};

export const errorToast = (message: string) => {
  showToast({
      ToastMessage: `Failed: ${message}`,
      bgColor: elegantBlack,
      textColor: elegantWhite,
      borderColor: errorRed,
      position: 'bottom-right',
  });
};
