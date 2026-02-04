import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="container mx-auto min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
      <div className="text-center space-y-8 max-w-xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to Your App
        </h1>
        <p className="text-lg text-muted-foreground">
          A modern starter pack built with React, TypeScript, and TanStack Router
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/sign-in">
            <Button size="lg">
              Sign In
            </Button>
          </Link>
          <Link to="/sign-up">
            <Button variant="outline" size="lg">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
