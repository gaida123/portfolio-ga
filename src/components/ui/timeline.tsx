"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  heading,
  subheading,
}: {
  data: TimelineEntry[];
  heading?: string;
  subheading?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div className="mx-auto max-w-5xl px-0 pb-10 pt-2">
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-text sm:text-5xl">
          {heading ?? "Experience /"}
        </h2>
        <p className="max-w-xl text-sm text-text-muted sm:text-base">
          {subheading ??
            "A quick timeline of roles, projects, and impact across teams and products."}
        </p>
      </div>

      <div ref={ref} className="relative mx-auto max-w-5xl pb-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:gap-10 md:pt-24"
          >
            <div className="sticky top-36 z-40 flex max-w-xs self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-background">
                <div className="h-4 w-4 rounded-full border border-border bg-surface p-2" />
              </div>
              <h3 className="hidden pl-20 text-xl font-bold text-text/40 md:block md:text-4xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-2 md:pl-4 md:pr-0">
              <h3 className="mb-4 block text-left text-2xl font-bold text-text/40 md:hidden">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-gradient-to-b from-transparent via-border to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-accent via-accent-light to-transparent"
          />
        </div>
      </div>
    </div>
  );
};

