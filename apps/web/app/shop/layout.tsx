import clsx from "clsx";
import { MakeBreakPoint } from "@/utils";

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className={clsx(
        "w-full py-8 md:py-10 flex flex-col items-center  gap-6",
        MakeBreakPoint("flex-row justify-center", "md")
      )}
    >
      {children}
    </section>
  );
}
