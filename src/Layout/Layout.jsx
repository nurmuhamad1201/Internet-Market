
import { Link, Outlet } from "react-router-dom";
import logo from '../../src/assets/svg/logo.svg'
import like from '../../src/assets/svg/like.svg'

const Layout = () => {
  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold"><Link to='/'><img src={logo} alt="" /></Link></div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-gray-700">Home</Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700">Contact</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700">About</Link>
            </li>
            <li>
              <Link to="/login" className="text-gray-700">Sign in</Link>
            </li>
          </ul>
          <div className=" flex  items-center">
           
          <img src={like} alt="" />
         
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

          </div>
        </div>
      </nav>
      <Outlet />

      <footer className="bg-[#000000] text-white py-8">
  <div className="container mx-auto flex justify-around flex-wrap gap-8">
    <ul className="flex gap-3 flex-col">
      <li>
        <Link className="font-semibold text-lg" to="/">Exclusive</Link>
      </li>
      <li>
        <Link className="text-gray-300" to="/">Subscribe</Link>
      </li>
      <li>
        <Link className="text-gray-300" to="/">Get 10% off your first order</Link>
      </li>
    </ul>

    <ul className="flex gap-3 flex-col">
      <li>
        <Link className="text-gray-300" to="/">Home</Link>
      </li>
      <li>
        <Link className="text-gray-300" to="/contact">Contact</Link>
      </li>
      <li>
        <Link className="text-gray-300" to="/about">About</Link>
      </li>
      <li>
        <Link className="text-gray-300" to="/signup">Sign Up</Link>
      </li>
    </ul>

    <ul className="flex gap-3 flex-col">
      <li>
        <Link className="text-gray-300" to="/">Help</Link>
      </li>
      <li>
        <Link className="text-gray-300" to="/">Privacy Policy</Link>
      </li>
      <li>
        <Link className="text-gray-300" to="/">Terms & Conditions</Link>
      </li>
      <li>
        <Link className="text-gray-300" to="/">Returns & Refunds</Link>
      </li>
    </ul>

    <ul className="flex gap-3 flex-col">
      <li>
        <Link className="text-gray-300" to="/">Blog</Link>
      </li>
      <li>
        <Link className="text-gray-300" to="/">Careers</Link>
      </li>
      <li>
        <Link className="text-gray-300" to="/">Press</Link>
      </li>
      <li>
        <Link className="text-gray-300" to="/">Affiliate Program</Link>
      </li>
    </ul>

    <ul className="flex gap-3 flex-col">
      <li>
        <Link className="text-gray-300" to="/">Account</Link>
      </li>
      <li>
        <Link className="text-gray-300" to="/">Checkout</Link>
      </li>
      <li>
        <Link className="text-gray-300" to="/">Wishlist</Link>
      </li>
      <li>
        <Link className="text-gray-300" to="/">Compare</Link>
      </li>
    </ul>
  </div>
</footer>


    </div>
  );
};

export default Layout;
