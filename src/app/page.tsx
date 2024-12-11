import { Button } from "@/components/ui/button";
import { Hero } from "@/components/hero/hero";
import { Navbar } from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6">
        <Navbar />
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Welcome to Our Platform
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover amazing products and services
          </p>
          <Button size="lg">Get Started</Button>
        </section>

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
      </main>
    </div>
  );
}
