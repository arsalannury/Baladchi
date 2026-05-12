import { Link } from "react-router";


const Header = () => {
  return (
    <>
      <header className="h-8.75 sticky top-1 p-10 flex items-center justify-end">
        <nav>
          <Link to={"/login"}>ورود</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
