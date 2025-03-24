// utils/loadGoogleScript.ts
export const loadGoogleScript = (): Promise<void> => {
  const scriptId = 'google-client-script'

  return new Promise((resolve, reject) => {
    if (document.getElementById(scriptId)) {
      resolve()
      return
    }

    const script = Object.assign(document.createElement('script'), {
      id: scriptId,
      src: 'https://accounts.google.com/gsi/client',
      async: true,
      defer: true,
      onload: () => resolve(),
      onerror: () => reject(new Error('❌ Failed to load Google Identity script')),
    })

    document.head.appendChild(script)
  })
}
