interface Props {
  id: number;
  icon: JSX.Element;
  skillName: string;
}

export const SkillTemplate = ({ id, icon, skillName }: Props) => {
  return (
    <div
      className="flex justify-center bg-zinc-900 border border-rose-300 hover:border-rose-900 w-16 h-16 md:w-20 md:h-20 items-center m-2 p-2 rounded-md text-zinc-500 hover:text-rose-400 hover:bg-zinc-800 ease-in-out duration-400"
      key={id}
    >
      <div className="relative group-hover:opacity-100">
        <div className="text-3xl md:text-5xl">{icon}</div>
        <span className="absolute inset-0 z-10 -top-10 opacity-0 hover:opacity-100 flex justify-center text-rose-300 text-sm font-semibold whitespace-nowrap">
          {skillName}
        </span>
      </div>
    </div>
  );
};
