import Image from "next/image";
import { HoverEffect } from "../ui/card-hover-effect";

export function Features() {
  return (
    <section id="features" className=" pt-16">
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Features
      </h2>
      <div className="max-w-6xl mx-auto">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Anomaly Detection with YOLO and CNN",
    description:
      "Xypher uses YOLO and CNN AI models for fast, accurate anomaly detection.",
    image: (
      <Image
        src="./anomaly-detection.svg"
        alt="Anomaly Detection"
        width={64}
        height={64}
        className="dark:invert"
      />
    ),
  },
  {
    title: "Equipped with Edge computing",
    description:
      "Xypher uses edge computing for real-time, on-site anomaly detection, reducing latency and improving efficiency.",
    image: (
      <Image
        src="./edge-computing.svg"
        alt="Anomaly Detection"
        width={64}
        height={64}
        className="dark:invert"
      />
    ),
  },
  {
    title: "1TB of Cloud Storage",
    description:
      "Xypher offers 1TB of cloud storage for easy data management and access.",
    image: (
      <Image
        src="./cloud-storage.svg"
        alt="Anomaly Detection"
        width={64}
        height={64}
        className="dark:invert"
      />
    ),
  },
  {
    title: "4K 640x512px Camera",
    description:
      "The 640x512px 4K camera captures clear, detailed images for precise monitoring.",
    image: (
      <Image
        src="./camera.svg"
        alt="Anomaly Detection"
        width={64}
        height={64}
        className="dark:invert"
      />
    ),
  },
  {
    title: "45 Min Max Flight Time",
    description:
      "Xypher provides up to 45 minutes of flight time for extended coverage.",
    image: (
      <Image
        src="./flight-time.svg"
        alt="Anomaly Detection"
        width={64}
        height={64}
        className="dark:invert"
      />
    ),
  },
  {
    title: "Data Security with AES-256",
    description:
      "AES-256 encryption ensures all data is securely protected from unauthorized access.",
    image: (
      <Image
        src="./data-security.svg"
        alt="Anomaly Detection"
        width={64}
        height={64}
        className="dark:invert"
      />
    ),
  },
];
