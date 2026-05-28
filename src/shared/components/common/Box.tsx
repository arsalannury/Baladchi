import type React from "react";

interface IProps {
  boxTitle: string;
}

const Box: React.FC<IProps> = ({ boxTitle }) => {
  return (
    <div
      className="w-32 h-32 border rounded-md border-sky-600 shadow-lg
       relative flex items-center justify-center group"
    >
      <span className="transition-all duration-500 absolute top-0 left-0 h-4 w-4 bg-sky-700 rounded-br-md group-hover:h-full group-hover:w-full"></span>
      <span className="text-md text-sky-700 text-center">{boxTitle}</span>
    </div>
  );
};

export default Box;
