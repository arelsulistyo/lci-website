import { TracingBeam } from "../ui/tracing-beam";
import { Background } from "./background";
import { CallToAction } from "./call-to-action";
import { Documentation } from "./documentation";
import { Features } from "./features";
import { Product } from "./product";
import { Profile } from "./profile";

export function Main() {
  return (
    <main className="mx-auto max-w-7xl">
      <TracingBeam className="px-6">
        <div className="ml-8">
          <Background />
          <Product />
          <Features />
          <Documentation />
          <CallToAction />
          <Profile />
        </div>
      </TracingBeam>
    </main>
  );
}
