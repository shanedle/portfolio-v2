import { Skill } from "@/types";

interface SkillItemProps {
  skill: Skill;
}

export function SkillItem({ skill }: SkillItemProps) {
  return (
    <div className="group relative" key={skill.id}>
      <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 bg-zinc-800 border border-rose-300/20 rounded-lg hover:border-rose-400/40 transition-colors duration-300">
        <div className="text-3xl md:text-4xl text-zinc-400 group-hover:text-rose-400 transition-colors duration-300">
          {skill.icon}
        </div>
      </div>
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 rounded text-sm text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {skill.name}
      </div>
    </div>
  );
}
