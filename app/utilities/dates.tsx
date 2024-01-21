type Options = {
  start: Date;
  end?: Date;
};

export const timeSince = ({ start, end }: Options) => {
  const current = new Date();
  const diff = (end || current).getTime() - start.getTime();
  const days = Math.ceil(diff / 864e5);

  if (days < 30) {
    return `${days} days`;
  } else if (days >= 30 && days < 365) {
    return `${Math.floor(days / 30)} months`;
  } else {
    return `${(days / 365).toFixed(1)} years`;
  }
};

export const formatShortDate = (date: Date) => {
  const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  });

  return dateTimeFormat
    .formatToParts(date)
    .map((p) => p.value.trim())
    .filter((p) => !!p)
    .join(", ");
};
