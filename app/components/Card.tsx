type Props = {
  className?: string;
};

export const Card = ({
  children,
  className,
}: React.PropsWithChildren<Props>) => {
  return (
    <div
      className={`bg-white dark:bg-zinc-900 rounded-xl border border-stone-200 dark:border-zinc-800 shadow-sm p-6 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
};
