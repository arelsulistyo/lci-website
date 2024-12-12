import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/drone2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black dark:opacity-80 opacity-50 z-1"></div>
      <div className="z-10 text-center">
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 text-white py-6 bg-clip-text ">
          Surveillance Redefined
          <br />
          <span className="text-3xl md:text-3xl lg:text-5xl">
            Stay protected with
          </span>
        </h1>
        <h2 className=" text-4xl md:text-4xl lg:text-6xl font-bold text-gray-300">
          Xypher
        </h2>
        <Button asChild size="lg" variant="secondary" className="mt-8">
          <Link href="#background">Get Started</Link>
        </Button>
      </div>
    </div>
  );
}
