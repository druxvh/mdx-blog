import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
  className: string;
  children: React.ReactNode;
}

function MaxWidthWrapper({ className, children }: MaxWidthWrapperProps) {
  return (
    <div className={cn("mx-auto max-w-screen-xl w-full", className)}>
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
