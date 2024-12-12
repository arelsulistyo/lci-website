import { Paperclip } from "lucide-react";
import { LinkPreview } from "../ui/link-preview";

export function Documentation() {
  return (
    <section id="documentation" className=" pt-16">
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Documentation
      </h2>
      <VideoSection />
      <ReportSection />
    </section>
  );
}

function VideoSection() {
  return (
    <section id="video" className="ml-8 mb-8">
      <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Video
      </h2>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="relative flex-1 bg-neutral-200 dark:bg-slate-800/[0.8] rounded">
          <div className="w-full h-0" style={{ paddingBottom: "56.25%" }}></div>
          <iframe
            src="https://drive.google.com/file/d/1iKeXDtPeiOoPGICx8TcCqwaKUp2YpwAW/preview"
            allowFullScreen
            allow="autoplay"
            className="absolute top-0 left-0 w-full h-full p-4"></iframe>
        </div>
        <h3 className="flex-1 scroll-m-20 text-2xl font-semibold tracking-tight">
          This is some text content that will occupy the rest of the space.{" "}
          <LinkPreview
            url="https://drive.google.com/file/d/1iKeXDtPeiOoPGICx8TcCqwaKUp2YpwAW/view"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">
            <Paperclip
              className="w-6 h-6 inline-block dark:invert"
              color="black"
            />
          </LinkPreview>
        </h3>
      </div>
    </section>
  );
}

function ReportSection() {
  return (
    <section id="report" className="ml-8 mb-8">
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Report
      </h2>
      <div className="relative flex-1 bg-neutral-200 dark:bg-slate-800/[0.8] rounded">
        <div className="w-full h-0" style={{ paddingBottom: "56.25%" }}></div>
        <iframe
          src="https://drive.google.com/file/d/1sBF8vc7LFnttP82uvzPC9iF0lpHQoyEb/preview"
          allow="autoplay"
          className="absolute top-0 left-0 w-full h-full p-4"></iframe>
      </div>
      <LinkPreview
        url="https://drive.google.com/file/d/1sBF8vc7LFnttP82uvzPC9iF0lpHQoyEb/edit"
        className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">
        <Paperclip className="w-6 h-6 inline-block dark:invert" color="black" />
      </LinkPreview>
    </section>
  );
}
