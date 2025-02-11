import React from "react";
import { cva } from "class-variance-authority";

import "./button.css";

const buttonStyles = cva("base", {
  variants: {
    variant: {
      primary: "primary",
      secondary: "secondary",
    },
    size: {
      small: "small",
      medium: "medium",
    },
    disabled: {
      false: "enabled",
      true: "disabled",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
    disabled: false,
  },
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium";
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  variant,
  size,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonStyles({ variant, size, disabled, className })}
      disabled={disabled || undefined}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
