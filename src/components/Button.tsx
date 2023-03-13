interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="py-1 px-3 bg-neutral-800 disabled:text-neutral-600 disabled:cursor-no-drop"
    >
      {children}
    </button>
  );
}
