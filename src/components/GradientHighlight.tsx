import type { ReactNode } from "react";

export default function GradientHighlight({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="gradient-border">
      <div className="inner p-5">{children}</div>
    </div>
  );
}
