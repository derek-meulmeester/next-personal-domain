type Props = {
  size?: "medium" | "large";
};

export const DateWrapper = ({
  children,
  size,
}: React.PropsWithChildren<Props>) => {
  const mobileWidth = size === "large" ? "w-64" : "w-28";

  return (
    <div className={`text-xs md:text-base ${mobileWidth} md:w-auto`}>
      {children}
    </div>
  );
};
