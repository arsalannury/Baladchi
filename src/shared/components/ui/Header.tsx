import { BiPhoneCall } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

const Header: React.FC = () => {
  return (
    <>
      <header className="h-8.75 p-10 flex items-center justify-between bg-sky-600">
        <p className="text-white text-md flex items-center justify-center">
          <BiPhoneCall size={20} className="mr-1" />
          1190
        </p>
        <div className="flex items-center gap-3">
          <span className="text-2xl text-white font-[VazirBold]">کمک</span>
          <GiHamburgerMenu className="text-white" size={22} />
        </div>
      </header>
    </>
  );
};

export default Header;
