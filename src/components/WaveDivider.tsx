export default function WaveDivider({
  color = "bg-skyline",
  position = "top",
}: {
  color?: string;
  position?: "top" | "bottom";
}) {
  const mask = position === "top" ? "wave-top" : "wave-bottom";
  return <div className={`${color} ${mask} h-8 w-full`} />;
}
