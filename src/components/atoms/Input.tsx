// src/components/atoms/Input.jsx

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={`w-full p-2 border border-gray-300 rounded-l-md ${className}`}
      {...props}
    />
  );
};

export default Input;