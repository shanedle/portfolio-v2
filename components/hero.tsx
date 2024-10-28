interface HeroProps {
  TypingEffect: React.ComponentType<any>;
}

export function HeroSection({ TypingEffect }: HeroProps) {
  const roles = [`Frontend Developer`, `Gym-goer`, `Learner`, `Cat Lover`];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 sm:py-32 text-center">
      <h1 className="text-4xl sm:text-6xl font-bold text-rose-600 mb-6">
        Hallo, I'm Shane! 👋
      </h1>

      <h2 className="text-3xl sm:text-4xl text-white mb-6">
        <TypingEffect
          text={roles}
          typingDelay={200}
          speed={30}
          eraseSpeed={30}
          eraseDelay={1500}
        />
      </h2>

      <p className="text-xl text-white max-w-2xl mx-auto">
        I love to design and build beautiful user-friendly websites and web
        applications.
      </p>
    </section>
  );
}
