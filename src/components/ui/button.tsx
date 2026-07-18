import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

const buttonVariants = cva("inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground hover:brightness-110",
      secondary: "border bg-surface text-foreground hover:bg-muted",
      ghost: "text-foreground hover:bg-muted"
    },
    size: { sm: "min-h-9 px-4", md: "min-h-11 px-5", lg: "min-h-13 px-7 text-base" }
  },
  defaultVariants: { variant: "primary", size: "md" }
});

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}
export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
export { buttonVariants };
