import { IconType } from "react-icons";

type Props = {
  title: string;
  Icon: IconType;
};

export const SectionTitle = ({ title, Icon }: Props) => {
  return (
    <div className="sticky top-16 top-[calc(env(safe-area-inset-top,0px)+4rem)] z-40 bg-stone-50 dark:bg-zinc-950 py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 flex items-center gap-3 mb-3">
      <div className="p-2 rounded-lg bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-500">
        <Icon className="w-5 h-5" />
      </div>
      <h2 className="text-2xl font-bold text-stone-900 dark:text-zinc-100 tracking-tight">
        {title}
      </h2>
    </div>
  );
};
