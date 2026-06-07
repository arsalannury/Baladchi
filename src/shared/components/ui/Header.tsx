import { Link } from "react-router";
import {
  Search,
  Bell,
  MessageSquare,
  Award,
  User,
  Menu,
  Plus,
  UserRoundPen,
  LogOut,
  TrendingUp,
} from "lucide-react";
import Dropdown from "../common/Dropdown";
import Drawer from "../common/Drawer";

const Header: React.FC = () => {

  return (
    <>
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Version ----------------------------------- */}
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-linear-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hidden sm:block">
                بلدچی
              </span>
            </Link>

            {/* Search Bar - Desktop Section */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="جستجوی سوالات، موضوعات و کاربران..."
                  className="w-full pr-10 pl-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Desktop Navigation Section */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  location.pathname.startsWith("/")
                    ? "text-purple-600 bg-purple-50"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Award className="w-5 h-5" />
                <span className="font-medium">دسته بندی</span>
              </Link>

              <Dropdown>
                <Dropdown.Trigger icon={<Bell className="w-5 h-5" />}>
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  <Dropdown.Body />
                </Dropdown.Trigger>
              </Dropdown>

              <Dropdown>
                <Dropdown.Trigger icon={<User className="w-5 h-5" />}>
                  <Dropdown.Body>
                    <Dropdown.Item>
                      <UserRoundPen size={19} />
                      <span className="text-sm">مشاهده پروفایل</span>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <LogOut size={19} />
                      <span className="text-sm">خروج از حساب</span>
                    </Dropdown.Item>
                  </Dropdown.Body>
                </Dropdown.Trigger>
              </Dropdown>

              <Link
                to="/ask"
                className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-shadow font-medium"
              >
                <Plus className="w-5 h-5" />
                <span>پرسش جدید</span>
              </Link>
            </nav>

            {/* Mobile Menu Button */}

            <Drawer>
              <Drawer.Trigger icon={<Menu className="w-6 h-6" />} />
              <Drawer.Body>
                <Drawer.Item>
                  <Link
                    to="/"
                    className={`flex items-center gap-3 `}
                  >
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-medium">خانه</span>
                  </Link>
                </Drawer.Item>
                <Drawer.Item>
                  <Link
                    to="/topic/technology"
                    className={`flex items-center gap-3`}
                  >
                    <Award className="w-5 h-5" />
                    <span className="font-medium">موضوعات</span>
                  </Link>
                </Drawer.Item>
                <Drawer.Item>
                  <Link
                    to="/"
                    className="flex items-center gap-3 "
                  >
                    <User className="w-5 h-5" />
                    <span className="font-medium">پروفایل</span>
                  </Link>
                </Drawer.Item>
                <Drawer.Item>
                  <Link
                    to="/ask"
                    className="flex items-center gap-3"
                  >
                    <Plus className="w-5 h-5" />
                    <span>پرسش جدید</span>
                  </Link>
                </Drawer.Item>
              </Drawer.Body>
            </Drawer>
          </div>

          {/* Mobile Version ----------------------------------- */}
          {/* Mobile Search */}
          <div className="md:hidden pb-3">
            <div className="relative w-full">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="جستجو..."
                className="w-full pr-10 pl-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
