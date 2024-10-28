import { Languages, Libraries, Frameworks, Tools } from "@/data";
import { SkillCategory } from "./skill-category";

export function TechnicalSkills() {
  const categories = [
    { title: "Languages", skills: Languages },
    { title: "Libraries & Frameworks", skills: [...Libraries, ...Frameworks] },
    { title: "Tools & Services", skills: Tools },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-rose-600 text-center mb-12">
        Technical Skills
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {categories.map((category) => (
          <SkillCategory
            key={category.title}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </section>
  );
}
