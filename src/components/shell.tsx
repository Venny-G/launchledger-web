import { ReactNode } from "react";

type ShellProps = {
  children: ReactNode;
  className?: string;
};

export function Shell({ children, className = "" }: ShellProps) {
  return (
    <div className={`mx-auto w-full max-w-shell px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

