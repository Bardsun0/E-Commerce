import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="bg-gray-800 text-white h-[58px] flex items-center justify-between px-4">
        <div className="flex items-center">
          <span className="mr-4">(225) 555-0118</span>
          <span>michelle.rivera@example.com</span>
        </div>
        <div>Follow Us and get a chance to win 80% off</div>
        <div className="flex items-center">
          <span className="mr-2">Follow Us :</span>
          <i className="fab fa-instagram mx-1"></i>
          <i className="fab fa-youtube mx-1"></i>
          <i className="fab fa-facebook mx-1"></i>
          <i className="fab fa-twitter mx-1"></i>
        </div>
      </div>
      <nav className="bg-white h-[78px] flex items-center justify-between px-4 shadow-md">
        <div className="text-2xl font-bold">Bandage</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/pages">Pages</Link>
          </li>
        </ul>
        <div className="flex items-center">
          <Link to="/login" className="flex items-center mr-4">
            <i className="far fa-user mr-2"></i>
            Login
          </Link>
          <Link to="/signup" className="flex items-center mr-4">
            <i className="fas fa-user-plus mr-2"></i>
            Register
          </Link>
          <i className="fas fa-search mx-2"></i>
          <i className="fas fa-shopping-cart mx-2"></i>
          <span className="mx-2">1</span>
          <i className="far fa-heart mx-2"></i>
          <span className="mx-2">1</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
