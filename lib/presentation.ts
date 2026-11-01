export const categoryClass = (c: string) =>
  c.startsWith("Business")
    ? "business"
    : c === "Psychologie"
      ? "psychology"
      : "philosophy";
