import Head from "next/head";
import dynamic from "next/dynamic";
import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/hero";
import { TechnicalSkills } from "@/components/technical-skills";
import { Projects } from "@/components/projects";

const DynamicTypingEffect = dynamic(() => import("react-typing-effect"), {
  ssr: false,
});

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Shane Le | Front-End Developer</title>
        <meta
          name="description"
          content="Front-end developer specializing in React, TypeScript and modern web technologies"
        />
      </Head>

      <main className="min-h-screen bg-zinc-900">
        <HeroSection TypingEffect={DynamicTypingEffect} />
        <TechnicalSkills />
        <Projects />
      </main>
    </Layout>
  );
}
