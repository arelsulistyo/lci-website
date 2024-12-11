import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none">
        <source src="/drone.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
      <div className="z-10 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to Our Platform
        </h1>
        <p className="text-xl text-white mb-8">
          Discover amazing products and services
        </p>
        <Button size="lg" variant="secondary">
          Get Started
        </Button>
      </div>
    </div>
  );
}
