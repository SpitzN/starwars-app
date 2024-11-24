import { ReactNode } from "react";

export function highlightText(text: string, query: string): ReactNode[] {
  if (!query.trim()) {
    return [text];
  }

  const regex = new RegExp(`(${query})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (part.toLowerCase() === query.toLowerCase()) {
      return (
        <span key={index} className="bg-theme-accent">
          {part}
        </span>
      );
    }
    return part;
  });
}
