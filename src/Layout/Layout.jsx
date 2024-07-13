import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from '../../src/assets/svg/logo.svg';
import like from '../../src/assets/svg/like.svg';
import Switcher from "../components/Switcher";
import burger from '../../src/assets/icons/icons8-burger-50.png';
import CartIcon from "../components/shopingCartIcon";
import IconWithModal from "../components/iconaccaunt";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { Button } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Layout = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen">
      <nav className="bg-white dark:bg-gray-800 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            <Link to='/'>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <ul className="flex sm:hidden space-x-4">
            <li>
              <Link to="/" className="text-gray-700 dark:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 dark:text-gray-300">Contact</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 dark:text-gray-300">About</Link>
            </li>
            <li>
              <Link to="/login" className="text-gray-700 dark:text-gray-300">Sign in</Link>
            </li>
          </ul>
          <div className="flex gap-5 items-center">
            <Switcher />
            <img src={like} alt="Like" className="dark:invert" />
            <CartIcon />
            <IconWithModal />
            <img onClick={handleOpen} className="hidden sm:block dark:invert" src={burger} alt="Menu" />
          </div>
        </div>
      </nav>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Where do you want to go?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button onClick={() => handleNavigate("/")}>Home</Button>
            <Button onClick={() => handleNavigate("/contact")}>Contact</Button>
            <Button onClick={() => handleNavigate("/about")}>About</Button>
            <Button onClick={() => handleNavigate("/login")}>Sign in</Button>
          </Typography>
        </Box>
      </Modal>
      <Outlet />
      <footer className="bg-black dark:bg-gray-800 mt-20 text-white py-8">
        <div className="container mx-auto flex justify-around flex-wrap gap-8">
          <ul className="flex gap-3 flex-col">
            <li>
              <Link className="font-semibold text-lg" to="/">Exclusive</Link>
            </li>
            <li>
              <Link className="text-gray-300 dark:text-gray-400" to="/">Subscribe</Link>
            </li>
            <li>
              <Link className="text-gray-300 dark:text-gray-400" to="/">Get 10% off your first order</Link>
            </li>
          </ul>
          <ul className="flex gap-3 flex-col">
            <li>
              <Link className="text-gray-300 dark:text-gray-400" to="/">Home</Link>
            </li>
            <li>
              <Link className="text-gray-300 dark:text-gray-400" to="/contact">Contact</Link>
            </li>
            <li>
              <Link className="text-gray-300 dark:text-gray-400" to="/about">About</Link>
            </li>
            <li>
              <Link className="text-gray-300 dark:text-gray-400" to="/signup">Sign Up</Link>
            </li>
          </ul>
          <ul className="flex gap-3 flex-col">
            <li>
              <Link className="text-gray-300 dark:text-gray-400" to="/">Help</Link>
            </li>
            <li>
              <Link className="text-gray-300 dark:text-gray-400" to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link className="text-gray-300 dark:text-gray-400" to="/">Terms & Conditions</Link>
            </li>
            <li>
              <Link className="text-gray-300 dark:text-gray-400" to="/">Returns & Refunds</Link>
            </li>
          </ul>
          <ul className="flex gap-3 flex-col">
            <li>
              <Link className="text-gray-300 dark:text-gray-400" to="/">Blog</Link>
            </li>
            <li>
              <Link className="text-gray-300 dark:text-gray-400" to="/">Careers</Link>
            </li>
            <li>
              <Link className="text-gray-300 dark:text-gray-400" to="/">Press</Link>
            </li>
            <li>
              <Link className="text-gray-300 dark:text-gray-400" to="/">Affiliate Program</Link>
            </li>
          </ul>
          <ul className="flex gap-3 flex-col">
            <li>
              <Link className="text-gray-300 dark:text-gray-400" to="/">Account</Link>
            </li>
            <li>
              <Link className="text-gray-300 dark:text-gray-400" to="/">Checkout</Link>
            </li>
            <li>
              <Link className="text-gray-300 dark:text-gray-400" to="/">Wishlist</Link>
            </li>
            <li>
              <Link className="text-gray-300 dark:text-gray-400" to="/">Compare</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
