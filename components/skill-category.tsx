import { Skill } from "@/types";
import { SkillItem } from "./skill-item";

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

export function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white text-center mb-6">
        {title}
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {skills.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}
