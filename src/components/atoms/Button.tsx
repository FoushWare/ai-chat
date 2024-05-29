
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}
const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`p-2 bg-monta-purple text-white rounded-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
