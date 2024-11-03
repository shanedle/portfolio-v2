import React from "react";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import TextRevealByWord from "@/components/ui/text-reveal";

const IntroSection = () => {
  return (
    <MaxWidthWrapper>
      <TextRevealByWord
        className="lg:ml-32"
        text="I transform ideas into polished, user-centric websites and applications that combine clean aesthetics with powerful functionality."
      />
    </MaxWidthWrapper>
  );
};

export default IntroSection;
