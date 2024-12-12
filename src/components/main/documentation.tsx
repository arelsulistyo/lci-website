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
    <section id="video" className="ml-8 mb-8 mt-10">
      <div className="flex items-center justify-center mt-10 mb-4 gap-4">
        <h2 className="scroll-m-20 pb-2 text-4xl font-bold tracking-tight transition-colors first:mt-0 text-center ">
          Video Xypher Drone Solutions
        </h2>
        <LinkPreview
          url="https://drive.google.com/file/d/1iKeXDtPeiOoPGICx8TcCqwaKUp2YpwAW/view"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          <Paperclip
            className="w-6 h-6 inline-block dark:invert"
            color="black"
          />
        </LinkPreview>
      </div>
      <div className="flex flex-col gap-8 ">
        <div className="relative flex-1 bg-neutral-200 dark:bg-slate-800/[0.8] rounded">
          <div className="w-full h-0" style={{ paddingBottom: "56.25%" }}></div>
          <iframe
            src="https://drive.google.com/file/d/1iKeXDtPeiOoPGICx8TcCqwaKUp2YpwAW/preview"
            allowFullScreen
            allow="autoplay"
            className="absolute top-0 left-0 w-full h-full p-4"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

function ReportSection() {
  return (
    <section id="report" className="ml-8 mb-8 mt-10">
      <div className="flex items-center justify-center gap-4 mt-10 mb-4">
        <h2 className=" scroll-m-20  pb-2 text-4xl font-bold tracking-tight transition-colors first:mt-0 text-center ">
          Xypher Drone Solutions Report
        </h2>
        <LinkPreview
          url="https://drive.google.com/file/d/1zi0adKIeaYF7z13zksUUSGYahHuYTXRI/edit"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          <Paperclip
            className="w-6 h-6 inline-block dark:invert"
            color="black"
          />
        </LinkPreview>
      </div>
      <div className="relative flex-1 bg-neutral-200 dark:bg-slate-800/[0.8] rounded">
        <div className="w-full h-0" style={{ paddingBottom: "56.25%" }}></div>
        <iframe
          src="https://drive.google.com/file/d/1zi0adKIeaYF7z13zksUUSGYahHuYTXRI/preview"
          allow="autoplay"
          className="absolute top-0 left-0 w-full h-full p-4"
        ></iframe>
      </div>
    </section>
  );
}
