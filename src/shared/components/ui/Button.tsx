import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ children, onClick }: IProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-shadow font-medium"
      >
        {children}
      </button>
    </>
  );
};

export default Button;
