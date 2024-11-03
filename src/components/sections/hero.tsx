"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiDotnet,
  SiCsharp,
  SiCss3,
  SiHtml5,
  SiCypress,
  SiJest,
  SiVuedotjs,
  SiFirebase,
} from "react-icons/si";

import OrbitingCircles from "@/components/ui/orbiting-circles";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import { FlipWords } from "@/components/ui/flip-words";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

const WORDS = [
  "Full Stack Developer",
  "Fitness enthusiast",
  "Gamer",
  "Cat Lover",
];

const SOCIAL_MEDIA_HANDLES = [
  {
    name: "GitHub",
    url: "https://github.com/shanedle",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shane-anh-dagatan-le/",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:shane.anh.d.le@gmail.com",
    icon: Mail,
  },
];

const TECH_STACK = [
  // Inner circle
  {
    icon: SiReact,
    duration: 20,
    delay: 0,
    radius: 50,
    reverse: false,
    size: "h-[22px] w-[22px]",
  },
  {
    icon: SiTypescript,
    duration: 20,
    delay: 10,
    radius: 50,
    reverse: true,
    size: "h-[22px] w-[22px]",
  },
  // Middle circle
  {
    icon: SiExpress,
    duration: 25,
    delay: 0,
    radius: 90,
    reverse: false,
    size: "h-[26px] w-[26px]",
  },
  {
    icon: SiMongodb,
    duration: 25,
    delay: 6,
    radius: 90,
    reverse: true,
    size: "h-[26px] w-[26px]",
  },
  {
    icon: SiCss3,
    duration: 25,
    delay: 12,
    radius: 90,
    reverse: false,
    size: "h-[26px] w-[26px]",
  },
  {
    icon: SiHtml5,
    duration: 25,
    delay: 18,
    radius: 90,
    reverse: true,
    size: "h-[26px] w-[26px]",
  },
  // Outer circle
  {
    icon: SiDotnet,
    duration: 30,
    delay: 0,
    radius: 130,
    reverse: false,
    size: "h-[30px] w-[30px]",
  },
  {
    icon: SiCsharp,
    duration: 30,
    delay: 5,
    radius: 130,
    reverse: true,
    size: "h-[30px] w-[30px]",
  },
  {
    icon: SiCypress,
    duration: 30,
    delay: 10,
    radius: 130,
    reverse: false,
    size: "h-[30px] w-[30px]",
  },
  {
    icon: SiJest,
    duration: 30,
    delay: 15,
    radius: 130,
    reverse: true,
    size: "h-[30px] w-[30px]",
  },
  {
    icon: SiVuedotjs,
    duration: 30,
    delay: 20,
    radius: 130,
    reverse: false,
    size: "h-[30px] w-[30px]",
  },
  {
    icon: SiFirebase,
    duration: 30,
    delay: 25,
    radius: 130,
    reverse: true,
    size: "h-[30px] w-[30px]",
  },
];

const HeroSection = () => {
  return (
    <MaxWidthWrapper className="grid min-h-screen grid-cols-1 items-center sm:grid-cols-2">
      <div className="flex flex-col items-center text-center sm:ml-20 sm:items-start sm:text-left">
        <h1 className="mb-2 text-5xl font-semibold">Hi, I&apos;m Shane</h1>
        <div className="max-w-prose px-10 text-xl sm:px-0">
          <span className="inline-block">
            <FlipWords duration={2000} words={WORDS} />
          </span>
          <br />
          <span>Crafting Digital Experiences That Matter</span>
        </div>
        <div className="mt-2 flex space-x-2">
          {SOCIAL_MEDIA_HANDLES.map((handle) => {
            const Icon = handle.icon;
            return (
              <Link
                key={handle.name}
                target="_blank"
                href={handle.url}
                className={cn(
                  buttonVariants({
                    variant: "secondary",
                    size: "sm",
                  }),
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background">
        {TECH_STACK.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <OrbitingCircles
              key={index}
              className={`${tech.size} border-none bg-transparent`}
              duration={tech.duration}
              delay={tech.delay}
              radius={tech.radius}
              reverse={tech.reverse}
            >
              <Icon className="h-8 w-8" />
            </OrbitingCircles>
          );
        })}
      </div>
    </MaxWidthWrapper>
  );
};

export default HeroSection;
