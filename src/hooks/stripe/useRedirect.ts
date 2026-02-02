import { useEffect } from "react"

interface UseRedirectOptions {
  url: string
  delay?: number
  onRedirect?: () => void
}

export function useRedirect({ url, delay = 0, onRedirect }: UseRedirectOptions) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRedirect?.()
      window.location.href = url
    }, delay)

    return () => clearTimeout(timer)
  }, [url, delay, onRedirect])

  return {
    isRedirecting: true
  }
}