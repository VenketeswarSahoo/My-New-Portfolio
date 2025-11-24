export const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 18,
} as const;

export const layoutTransition = {
    type: "spring",
    stiffness: 80,
    damping: 12,
} as const;

export const blurFade = {
    initial: { opacity: 0, filter: "blur(8px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(8px)" },
    transition: { duration: 0.4, ease: "easeInOut" },
} as const;
