import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import logo from "../assets/img/logonav.png";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // التحقق من وجود التوكن في الكوكيز باستخدام js-cookie
    const token = Cookies.get("token");
    setIsAuthenticated(!!token);
  }, [location]); // يتم إعادة التحقق عند تغيير المسار

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


const handleLogout = async () => {
  try {
    await axios.post(
      "http://localhost:5000/api/logout",
      {},
      { withCredentials: true }
    );

    Cookies.remove("token"); // حذف التوكن من الكوكيز
    console.log("✅ تم تسجيل الخروج وحذف التوكن");

    navigate("/login");
  } catch (error) {
    console.error("❌ خطأ في تسجيل الخروج:", error);
  }
};

  const handleDropdownChange = (event) => {
    const selectedPath = event.target.value;
    if (selectedPath) {
      navigate(selectedPath);
    }
  };

  const navItems = [
    { name: "الرئيسية", path: "/" },
    { name: "المشاريع", path: "/projects" },
    { name: "من نحن", path: "/About" },
    { name: "اتصل بنا", path: "/Contact" },
  ];

  return (
    <nav className="shadow-lg bg-[#EAEAEA]" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-start items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center justify-end mb-4">
            <img
              src={logo}
              alt="شعار"
              className="h-14 w-15 mt-3 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-12 mr-80">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-[#2DAA9E] p-2 rounded-lg hover:bg-[#66D2CE] hover:text-[#2DAA9E] transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}

            {!isAuthenticated ? (
              <select
                onChange={handleDropdownChange}
                className="bg-[#2DAA9E] hover:bg-[#66D2CE] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 cursor-pointer"
              >
                <option value="">التسجيل</option>
                <option value="/login">تسجيل الدخول</option>
                <option value="/signup">إنشاء حساب</option>

              </select>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                تسجيل الخروج
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white py-2 mobile-menu">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-4 py-2 text-[#2DAA9E] hover:bg-[#66D2CE] hover:text-white transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="px-4 py-2">
              {!isAuthenticated ? (
                <select
                  onChange={handleDropdownChange}
                  className="block w-full bg-[#2DAA9E] hover:bg-[#66D2CE] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 cursor-pointer text-center"
                >
                  <option value="">التسجيل</option>
                  <option value="/login">تسجيل الدخول</option>
                  <option value="/signup">إنشاء حساب</option>
                </select>
              ) : (
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="block w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 cursor-pointer text-center"
                >
                  تسجيل الخروج
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;