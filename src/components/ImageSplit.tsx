import { cn } from "../lib/cn";

export default function ImageSplit({
    title, text, img, reverse = false, children, className,
}: {
    title: string;
    text: string | React.ReactNode;
    img: string;
    reverse?: boolean;
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <section className={cn("max-w-6xl mx-auto px-4 py-10", className)}>
            <div className={cn("grid md:grid-cols-2 gap-6 items-center", reverse && "md:[&>*:first-child]:order-2")}>
                <img src={img} alt="" className="w-full rounded-2xl border border-black/10 object-cover aspect-[16/10]" />
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
                    <p className="mt-3 text-lg text-black/80">{text}</p>
                    {children && <div className="mt-4">{children}</div>}
                </div>
            </div>
        </section>
    );
}
