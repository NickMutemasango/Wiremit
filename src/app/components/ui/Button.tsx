import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
};

export default function Button({
  children,
  type = "button",
  disabled = false,
  className = "",
  onClick,
  variant = "primary",
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantStyles = {
    primary: " text-white bg-[#2F3765] cursor-pointer  hover:bg-[#248FA0]",
    outline: "bg-white text-[#248FA0] border border-[#2F3765] hover:bg-blue-50 cursor-pointer",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}