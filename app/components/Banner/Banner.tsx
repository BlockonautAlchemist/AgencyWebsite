"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// Hook to detect prefers-reduced-motion
function usePrefersReducedMotion(): boolean {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);

        const handler = (event: MediaQueryListEvent) => {
            setPrefersReducedMotion(event.matches);
        };

        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    return prefersReducedMotion;
}

// Helper to conditionally apply motion values or static fallback
function useMotionOrStatic<T>(
    motionValue: MotionValue<T>,
    staticValue: T,
    prefersReducedMotion: boolean
): MotionValue<T> | T {
    return prefersReducedMotion ? staticValue : motionValue;
}

const Banner = () => {
    const heroRef = useRef<HTMLElement>(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    // Track scroll progress within the hero section
    // offset: ["start start", "end start"] means:
    // - Animation starts when hero top reaches viewport top
    // - Animation ends when hero bottom reaches viewport top
    // For a ~250px scroll range, we use a pixel-based end offset
    const { scrollYProgress } = useScroll({
        target: heroRef,
        // "start start" = hero top at viewport top (0%)
        // "250px start" = 250px scrolled from start (100%)
        offset: ["start start", "250px start"],
    });

    // Headline: translateY 0 → -30px, opacity 1 → 0.75
    const headlineY = useTransform(scrollYProgress, [0, 1], [0, -30]);
    const headlineOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.75]);

    // Subheadline: translateY 0 → -20px, opacity 1 → 0.6
    const subheadlineY = useTransform(scrollYProgress, [0, 1], [0, -20]);
    const subheadlineOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

    // CTA buttons: translateY 0 → -15px, opacity stays 1
    const ctaY = useTransform(scrollYProgress, [0, 1], [0, -15]);

    return (
        <main
            ref={heroRef}
            className="relative isolate overflow-hidden bg-transparent [overflow-anchor:none] hero-section"
            style={{ minHeight: '100svh' }}
        >
            {/* Main content - pt-24 accounts for fixed navbar (h-20 = 80px + extra spacing) */}
            <div className="relative z-20 px-6 lg:px-8 w-full pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
                <div className="mx-auto max-w-7xl flex flex-col items-center text-center gap-6">
                    <div className="w-full">
                        {/* Headline with parallax + fade */}
                        <motion.h1
                            className="text-4xl font-semibold text-navyblue sm:text-5xl lg:text-7xl md:4px lh-96"
                            style={{
                                y: useMotionOrStatic(headlineY, 0, prefersReducedMotion),
                                opacity: useMotionOrStatic(headlineOpacity, 1, prefersReducedMotion),
                                // will-change hints to browser for GPU acceleration
                                willChange: prefersReducedMotion ? "auto" : "transform, opacity",
                            }}
                        >
                            <span>We help businesses</span> <br /> <span>get noticed, get chosen,</span> <br /> <span>and get paid.</span>
                        </motion.h1>

                        {/* Subheadline with parallax + fade */}
                        <motion.p
                            className="mt-3 text-lg leading-8 text-bluegrey mx-auto"
                            style={{
                                y: useMotionOrStatic(subheadlineY, 0, prefersReducedMotion),
                                opacity: useMotionOrStatic(subheadlineOpacity, 1, prefersReducedMotion),
                                willChange: prefersReducedMotion ? "auto" : "transform, opacity",
                            }}
                        >
                            Creative design and smart ideas that help your business run better and sell more.
                        </motion.p>
                    </div>

                    {/* CTA buttons with parallax only (opacity stays 1) */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-3"
                        style={{
                            y: useMotionOrStatic(ctaY, 0, prefersReducedMotion),
                            willChange: prefersReducedMotion ? "auto" : "transform",
                        }}
                    >
                        <button type="button" className='text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton'>
                            Get a Free Improvement Check
                        </button>
                        <button type="button" className='text-15px mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton'>
                            See Examples
                        </button>
                    </motion.div>
                </div>
            </div>
        </main>
    )
}

export default Banner;
