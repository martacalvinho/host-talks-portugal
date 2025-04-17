
import React from "react";
import { cn } from "@/lib/utils";

interface HostsyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "link";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

const HostsyButton = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: HostsyButtonProps) => {
  return (
    <button
      className={cn(
        "font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-coral/50",
        {
          "coral-gradient text-white hover:shadow-lg hover:shadow-coral/20": variant === "primary",
          "border border-coral text-coral hover:bg-coral/5": variant === "outline",
          "text-coral hover:underline": variant === "link",
          "px-3 py-1.5 text-sm": size === "sm",
          "px-5 py-2.5 text-base": size === "md",
          "px-8 py-3.5 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default HostsyButton;
