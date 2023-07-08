export const cx = (...classNames: string[]) =>
  classNames.filter(Boolean).join(" ");
