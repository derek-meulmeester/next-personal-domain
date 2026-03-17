import { IconType } from "react-icons";

type Props = {
  title: string;
  Icon: IconType;
};

export const SectionTitle = ({ title, Icon }: Props) => {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 rounded-lg bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-500">
        <Icon className="w-5 h-5" />
      </div>
      <h2 className="text-2xl font-bold text-stone-900 dark:text-zinc-100 tracking-tight">
        {title}
      </h2>
    </div>
  );
};
