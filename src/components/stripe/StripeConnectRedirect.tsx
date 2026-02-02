import { RedirectPage } from "~/components/ui/redirect-page"

interface StripeConnectRedirectProps {
  status: "return" | "refresh"
}

export function StripeConnectRedirect({ status }: StripeConnectRedirectProps) {
  const redirectUrl = `ganitable://stripe-connect?status=${status}`
  const title = status === "return" ? "Returning to app..." : "Refreshing connection..."
  const description = "Please wait while we redirect you back to the app..."

  return (
    <RedirectPage
      title={title}
      description={description}
      redirectUrl={redirectUrl}
    />
  )
}