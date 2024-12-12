import { TracingBeam } from "../ui/tracing-beam";
import { Background } from "./background";
import { CallToAction } from "./call-to-action";
import { Features } from "./features";
import { Product } from "./product";

export function Main() {
  return (
    <main className="mx-auto max-w-7xl">
      <TracingBeam className="px-6">
        <div className="ml-8">
          <Background />
          <Product />
          <Features />
          <CallToAction />
        </div>
      </TracingBeam>
    </main>
  );
}
