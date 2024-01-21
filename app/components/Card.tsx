type Props = {
  className?: string;
};

export const Card = ({
  children,
  className,
}: React.PropsWithChildren<Props>) => {
  return (
    <div
      className={`bg-white p-4 rounded border border-slate-100 ${className}`}
    >
      {children}
    </div>
  );
};
