"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Profile = {
  crew: string;
  name: string;
  id: string;
  src: string;
};
export const AnimatedProfiles = ({
  profiles,
  autoplay = false,
}: {
  profiles: Profile[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % profiles.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + profiles.length) % profiles.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20 w-full">
      <div className="relative grid grid-cols-1 md:grid-cols-2  gap-20 items-center">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {profiles.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 999 : profiles.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex  flex-col py-4 items-center">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-4xl font-bold dark:text-white text-black">
              {profiles[active].name}
            </h3>
            <p className="text-2xl text-gray-500 dark:text-neutral-500 font-medium mt-2">
              {profiles[active].id}
            </p>
            <motion.p className="text-xl font-semibold text-gray-500 mt-3 dark:text-neutral-300 ">
              {profiles[active].crew.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
        </div>
      </div>
      <div className="flex gap-4 pt-12  mx-auto mt-4 justify-center">
        <button
          onClick={handlePrev}
          className="h-10 w-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button dark:hover:bg-white "
        >
          <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 " />
        </button>
        <button
          onClick={handleNext}
          className="h-10 w-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button dark:hover:bg-white"
        >
          <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 " />
        </button>
      </div>
    </div>
  );
};
