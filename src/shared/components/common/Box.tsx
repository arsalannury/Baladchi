import type React from "react";

interface IProps {
    boxTitle: string;

}

const Box:React.FC<IProps> = ({boxTitle}) => {
    return (
      <div className="w-28 h-28 border rounded-md border-sky-600 shadow-lg relative flex items-center justify-center">
            <span className="absolute top-0 left-0 h-4 w-4 bg-sky-700 rounded-br-md"></span>
            <span className="text-lg text-sky-700">{boxTitle}</span>
      </div>
    );
}
 
export default Box;