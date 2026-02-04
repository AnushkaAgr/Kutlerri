import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 outline-none",
  {
    variants: {
      variant: {
        // 🔹 Default (keep if needed)
        default: "bg-primary text-primary-foreground hover:bg-primary/90",

        // ✅ Button Type 1: Pink Filled
        primaryPink: `
  !flex !w-[136px] !h-[37.333px]
  !px-[23px] !pt-[11.889px] !pb-[9.444px]
  !rounded-[50px]
  !bg-[#EF118F]
  !text-white
  font-gotham !font-[350]
  !text-[15.213px] !leading-[17.114px]
  hover:opacity-90 transition
`,


        // ✅ Button Type 2: White Outline
        outlineWhite: `
          flex
          px-[40.468px] pt-[8.817px] pb-[8.841px]
          rounded-[48.003px]
          border border-[0.857px] border-white
          bg-transparent
          text-white
          font-gotham font-[350]
          text-[15.213px] leading-[17.114px]
          hover:bg-white hover:text-black
        `,

        destructive:
          "bg-destructive text-white hover:bg-destructive/90",

        ghost:
          "hover:bg-accent hover:text-accent-foreground",

        link:
          "text-primary underline-offset-4 hover:underline",
      },

      size: {
        default: "",
        sm: "",
        lg: "",
        icon: "size-9",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
