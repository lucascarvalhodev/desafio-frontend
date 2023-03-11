interface IconButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function IconButton({ children, className, onClick }: IconButtonProps) {
  return (
    <div
      className={`w-10 h-10 flex justify-center items-center rounded-full text-2xl hover:bg-neutral-700 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
