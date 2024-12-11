import { Button } from "../ui/button";
import { CallToAction } from "./call-to-action";

export function Main() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      {/* Radial gradient for the container to give a faded look */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-card text-card-foreground rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Feature {i}</h2>
            <p className="text-muted-foreground mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button variant="outline">Learn More</Button>
          </div>
        ))}
      </section>
      <section className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Ready to get started?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join thousands of satisfied customers today
        </p>
        <Button size="lg" variant="secondary">
          Sign Up Now
        </Button>
      </section>
      <CallToAction />
    </main>
  );
}
