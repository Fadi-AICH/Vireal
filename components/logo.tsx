import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
  withText?: boolean
}

export function Logo({ className, size = "md", withText = true }: LogoProps) {
  // Size classes for the logo
  const sizeClasses = {
    xs: "h-5 w-5",
    sm: "h-7 w-7",
    md: "h-10 w-10",
    lg: "h-14 w-14",
    xl: "h-20 w-20",
    "2xl": "h-32 w-32",
    "3xl": "h-40 w-40",
  }

  // Text size classes
  const textSizeClasses = {
    xs: "text-base",
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
    "2xl": "text-5xl",
    "3xl": "text-6xl",
  }

  return (
    <Link href="/" className={cn("flex items-center space-x-3", className)} scroll={true}>
      <div className={cn("relative flex items-center justify-center", sizeClasses[size])}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-md"></div>
        <div className="absolute inset-[2px] bg-gray-900 rounded-[3px] flex items-center justify-center">
          <span
            className="font-black"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize:
                size === "xs"
                  ? "10px"
                  : size === "sm"
                    ? "14px"
                    : size === "md"
                      ? "20px"
                      : size === "lg"
                        ? "28px"
                        : size === "xl"
                          ? "36px"
                          : size === "2xl"
                            ? "48px"
                            : "60px",
            }}
          >
            V
          </span>
        </div>
      </div>
      {withText && (
        <span
          className={cn("font-extrabold tracking-tight", textSizeClasses[size])}
          style={{
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 15px rgba(139, 92, 246, 0.3)",
            letterSpacing: "-0.02em",
          }}
        >
          VIREAL
        </span>
      )}
    </Link>
  )
}
