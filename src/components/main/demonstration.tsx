import { Compare } from "../ui/compare";

export function Demonstration() {
  return (
    <div className="w-full px-1 md:px-8 flex items-center justify-center">
      <div className="relative flex-1 rounded">
        <div className="w-full h-0" style={{ paddingBottom: "56.25%" }}></div>
        <div
          style={{
            transform: "rotateX(15deg) translateZ(80px)",
          }}
          className="absolute top-0 left-0 w-full h-full p-4 rounded-3xl dark:bg-accent bg-muted border border-transparent dark:border-white/[0.2] group-hover:border-slate-700">
          <Compare
            firstImage="/image.png"
            secondImage="./image-edit.png"
            firstImageClassName="object-cover object-left-top w-full"
            secondImageClassname="object-cover object-left-top w-full"
            className="w-full h-full rounded-[22px] md:rounded-lg"
            slideMode="hover"
          />
        </div>
      </div>
    </div>
  );
}
