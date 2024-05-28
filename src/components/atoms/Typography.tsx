// src/components/atoms/Typography.jsx

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}
export const Typography = ({ children, className, ...props }: TypographyProps) => {
  return (
    <p className={`font-poppins ${className}`} {...props}>
      {children}
    </p>
  );
};
