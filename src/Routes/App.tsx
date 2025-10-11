import { AnimatePresence, motion } from "framer-motion";
import React, { createContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../_reset.scss";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { getData, initDB, itemType } from "../db";
import ScrollToTop from "../lib/Utils/ScrollToTop";
import "./App.scss";

export const CartContext = createContext<any>([]);
export const DBStatusContext = createContext<any>("pending");

export default function App() {
  const [cartItems, setCartItems] = useState<Array<itemType>>([]);
  const [dbStatus, setDBStatus] = useState("pending");
  const location = useLocation();

  useEffect(() => {
    initDB().then((status) => {
      setDBStatus(status);
    });

    getData("cartItemsStore").then((data) => {
      setCartItems(data);
    });
  }, []);

  return (
    <div className='app'>
      <CartContext.Provider value={[cartItems, setCartItems]}>
        <DBStatusContext.Provider value={[dbStatus, setDBStatus]}>
          <ToastContainer theme='dark' position='bottom-right' />
          <PageWrapper>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
          </PageWrapper>
        </DBStatusContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    key={location.pathname}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);
