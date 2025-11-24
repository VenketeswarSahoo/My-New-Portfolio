"use client";

import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { springTransition, layoutTransition, blurFade } from "@/lib/animations";

const accordionData = [
  {
    id: "getting-started",
    title: "aluminum unibody",
    description: `aluminum unibody. Optimized for performance and battery. Aluminum alloy is remarkably light and has exceptional thermal conductivity.`,
  },
  {
    id: "animation-properties",
    title: "vapor chamber",
    description: `vapor chamber. Deionized water sealed inside moves heat away from the A19 Pro chip, allowing for even higher sustained performance.`,
  },
  {
    id: "advanced-features",
    title: "ceramic shield",
    description: `ceramic shield. Protects the back of iPhone 17 Pro, making it 4x more resistant to cracks. New Ceramic Shield 2 on the front has 3x better scratch resistance.`,
  },
  {
    id: "community-support",
    title: "immersive pro display",
    description: `immersive pro display. Our best-ever 6.3-inch and 6.9-inch Super Retina XDR displays. Brighter. Better anti-reflection. ProMotion up to 120Hz.`,
  },
];

export default function FeaturedSection() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Accordion
      className="flex w-full flex-col items-start"
      transition={springTransition}
      onValueChange={(val) => setActiveItem(val as string)}
      expandedValue={activeItem}
    >
      {accordionData.map((item) => {
        const isActive = activeItem === item.id;

        return (
          <motion.div
            key={item.id}
            layout
            transition={{
              layout: layoutTransition,
            }}
            animate={{
              scale: isActive ? 1.03 : 1,
              backgroundColor: isActive
                ? isDark
                  ? "rgb(39 39 42)"
                  : "rgb(244 244 245)"
                : isDark
                  ? "rgb(24 24 27)"
                  : "rgb(255 255 255)",
              boxShadow: isActive
                ? isDark
                  ? "0px 8px 25px rgba(0,0,0,0.4)"
                  : "0px 8px 25px rgba(0,0,0,0.15)"
                : isDark
                  ? "0px 2px 8px rgba(0,0,0,0.2)"
                  : "0px 2px 8px rgba(0,0,0,0.15)",
            }}
            onClick={() => setActiveItem(isActive ? null : item.id)}
            className="p-6 mt-4 rounded-3xl backdrop-blur-sm relative overflow-hidden cursor-pointer max-w-2xl"
          >
            <AccordionItem value={item.id}>
              <AccordionTrigger className="w-full text-left">
                <motion.div
                  key={isActive ? "desc" : "title"}
                  initial={blurFade.initial}
                  animate={blurFade.animate}
                  exit={blurFade.exit}
                  transition={blurFade.transition}
                  className="text-xl leading-relaxed select-none dark:text-zinc-50 text-zinc-900 cursor-pointer"
                >
                  {!isActive ? (
                    <div className="flex items-center gap-4 font-medium capitalize">
                      <div className="border dark:border-white/70 border-black/10 rounded-full p-0.5">
                        <Plus className="h-4 w-4 dark:text-white text-black" />
                      </div>
                      {item.title}
                    </div>
                  ) : (
                    <p className="dark:text-white text-zinc-700 max-w-lg">{item.description}</p>
                  )}
                </motion.div>
              </AccordionTrigger>
            </AccordionItem>
          </motion.div>
        );
      })}
    </Accordion>
  );
}
