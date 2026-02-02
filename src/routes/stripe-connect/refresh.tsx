import { createFileRoute } from "@tanstack/react-router";
import { StripeConnectRedirect } from "~/components/stripe/StripeConnectRedirect";

export const Route = createFileRoute("/stripe-connect/refresh")({
  component: StripeConnectRefresh,
});

function StripeConnectRefresh() {
  return <StripeConnectRedirect status="refresh" />;
}