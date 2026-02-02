import { createFileRoute } from "@tanstack/react-router";
import { StripeConnectRedirect } from "~/components/stripe/StripeConnectRedirect";

export const Route = createFileRoute("/stripe-connect/return")({
  component: StripeConnectReturn,
});

function StripeConnectReturn() {
  return <StripeConnectRedirect status="return" />;
}