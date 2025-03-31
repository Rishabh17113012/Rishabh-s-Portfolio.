"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { Award, Calendar, Building, CheckCircle } from "lucide-react";

interface TimelineEntry {
  title: string;
  date: string;
  organization: string;
  content?: string;
  imageUrl?: string;
  skills?: string[];
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
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
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-5xl mb-6 text-black dark:text-white max-w-4xl font-bold">
          My <span className="text-blue-600 dark:text-blue-400">Certifications</span>
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-lg max-w-xl">
          A timeline of my professional certifications and achievements that showcase my expertise and continuous learning journey.
        </p>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-12 absolute left-3 md:left-3 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center shadow-md">
                <div className="h-8 w-8 rounded-full bg-blue-500 dark:bg-blue-600 flex items-center justify-center text-white">
                  <Award size={16} />
                </div>
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-blue-600 dark:text-blue-400">
                {item.date}
              </h3>
            </div>
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-blue-600 dark:text-blue-400">
                {item.date}
              </h3>
              <div className="mb-12 bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-800">
                <h4 className="text-neutral-800 dark:text-neutral-200 text-base md:text-2xl font-bold mb-2">
                  {item.title}
                </h4>
                <div className="flex items-center mb-4 text-neutral-600 dark:text-neutral-400 text-sm">
                  <Building size={16} className="mr-2" />
                  <p className="font-medium">{item.organization}</p>
                </div>
                <div className="flex items-center mb-4 text-neutral-600 dark:text-neutral-400 text-sm">
                  <Calendar size={16} className="mr-2" />
                  <p>Issued: {item.date}</p>
                </div>
                
                {item.imageUrl && (
                  <div className="mb-4 flex justify-center">
                    <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-md border border-gray-200 dark:border-gray-700 w-64 md:w-80">
                      <img 
                        src={item.imageUrl} 
                        alt={`${item.title} Certificate`} 
                        className="w-full h-auto object-contain max-h-40"
                      />
                    </div>
                  </div>
                )}
                
                {item.content && (
                  <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-normal mb-4">
                    {item.content}
                  </div>
                )}
                
                {item.skills && (
                  <div className="mt-3">
                    <p className="text-sm font-semibold mb-2 text-neutral-800 dark:text-neutral-200">Key Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full flex items-center"
                        >
                          <CheckCircle size={12} className="mr-1" /> 
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-600 via-purple-500 to-transparent from-[0%] via-[30%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};