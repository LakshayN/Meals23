import React, { Fragment, useContext, useState } from "react";

import userImg from "../../assets/user1.png";
import { motion } from "framer-motion";
import HeaderCardButton from "../../components/Topbar/HeaderCartButton.js";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase.config";
import { CartContext } from "../../store/cart-context";
import { MdAdd, MdLogout } from "react-icons/md";
import Cart from "../CartComponent/Cart";
import Card from "../UI/Card";

const Header = (props) => {
  const { user, setUserFromLogin } = useContext(CartContext);
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [isMenu, setIsMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleLoginLogout = async () => {
    if (!user) {
      const { user } = await signInWithPopup(firebaseAuth, provider);

      setUserFromLogin(user?.providerData[0]);

      //setting in localstorage so data doesnt go after refresh
      localStorage.setItem("user", JSON.stringify(user?.providerData[0]));
    } else {
      localStorage.clear();

      setUserFromLogin(null);
    }
    setIsMenu(false);
  };

  const handleProfileClick = () => {
    setIsMenu((prev) => !prev);
  };

  return (
    <Fragment>
      <header className='fixed w-screen p-3 px-4 md:p-6 md:px-16 bg-primary flex top-0 z-50'>
        <Link
          to={"/"}
          className='hidden md:flex w-full h-full items-center justify-between '
        >
          <p className='text-headingColor text-xl font-bold'>Meals Mania</p>
        </Link>

        <div className=' items-center gap-8 mr-8'>
          <motion.ul
            className='flex items-center gap-20'
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
          >
            <motion.li
              whileTap={{ scale: 0.6 }}
              className='text-md text-textColor items-center hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'
            >
              Home
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.6 }}
              className='text-md text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'
            >
              Menu
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.6 }}
              className='text-md text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'
            >
              Service
            </motion.li>
          </motion.ul>
        </div>

        <div
          className='relative flex items-center justify-center'
          onClick={() => {
            setShowCart((prev) => !prev);
          }}
        >
          <HeaderCardButton onClick={props.onShowCart} />
        </div>

        <motion.img
          whileTap={{ scale: 0.6 }}
          className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full ml-8'
          src={user ? user?.photoURL : userImg}
          onClick={handleProfileClick}
        />

        {isMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 z-10 mt-4'
          >
            <Link to={"/create"}>
              <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>
                New Item <MdAdd />
              </p>
            </Link>

            <p
              className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 
          transition-all duration-100 ease-in-out text-textColor text-base'
              onClick={handleLoginLogout}
            >
              {user ? "Logout" : "Login"} <MdLogout />
            </p>
          </motion.div>
        )}

        {showCart && (
          <div className='z-index-111 absolute w-4/5'>
            <Card>
              <Cart
                onClose={() => {
                  setShowCart(false);
                }}
              />
            </Card>
          </div>
        )}
      </header>
    </Fragment>
  );
};

export default Header;
