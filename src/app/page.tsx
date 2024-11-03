"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import HeroSection from "@/components/sections/hero";
import IntroSection from "@/components/sections/intro";
import Projects from "@/components/sections/projects";
import Preloader from "@/components/ui/preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("preloader-active");
    } else {
      document.body.classList.remove("preloader-active");
    }
  }, [isLoading]);

  return (
    <main className="min-h-screen pt-14">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <HeroSection />
      <IntroSection />
      <Projects />
    </main>
  );
}
