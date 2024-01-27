type Props = {
  className?: string;
};

export const Card = ({
  children,
  className,
}: React.PropsWithChildren<Props>) => {
  return (
    <div
      className={`bg-white border-slate-100 dark:bg-zinc-900 dark:border-zinc-700 p-4 rounded border ${className}`}
    >
      {children}
    </div>
  );
};
