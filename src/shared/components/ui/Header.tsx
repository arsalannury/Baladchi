// import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <header className="h-8.75 sticky top-1 p-10 flex items-center justify-between">
        {/* <nav>
          <Link to={"/login"}>ورود</Link>
        </nav> */}
        <p className="text-amber-500 text-lg">1598</p>
        <div className="flex items-center gap-3">
          <span className="text-2xl text-amber-500 font-bold">پینه</span>
          <img className="w-5 h-5" src="favicon.svg" />
        </div>
      </header>
    </>
  );
};

export default Header;
