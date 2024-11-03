"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="flex h-14 items-center justify-center">
        <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid w-full grid-cols-3 items-center">
            <div className="flex items-center gap-1 sm:gap-4">
              <Link
                href="https://github.com/shanedle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 sm:h-9 sm:w-9"
                >
                  <Github className="h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/shane-anh-dagatan-le/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 sm:h-9 sm:w-9"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="mailto:shane.anh.d.le@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 sm:h-9 sm:w-9"
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="flex justify-center">
              <span className="whitespace-nowrap font-['Playfair_Display'] text-lg font-bold sm:text-xl">
                Shane Le
              </span>
            </div>

            <div className="flex justify-end">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 sm:h-9 sm:w-9"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
