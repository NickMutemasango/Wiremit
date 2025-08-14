import { InputHTMLAttributes, ReactNode } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon?: ReactNode;
};

export default function Input({ label, icon, ...props }: InputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#2F3765] mb-1">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          className={`w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#248FA0]/50 focus:border-[#248FA0] ${
            icon ? 'pl-10' : ''
          }`}
          {...props}
        />
      </div>
    </div>
  );
}