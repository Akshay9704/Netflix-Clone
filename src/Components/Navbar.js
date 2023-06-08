import React, { useEffect, useState } from 'react'
import logo from "../images/logo.png"
import SearchIcon from "@mui/icons-material/Search";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Navbar.css"
const Navbar = () => {

  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <div>
        <header className={`Navbar ${show && "nav_black"} bg-transparent w-full h-20`}>
        <nav className="flex sticky top-0">
          <img
            className="m-5 mr-12 ml-12"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="Logo"
            width="180"
            height="50"
            />
          <div className="flex justify-between">
            <div>
              <ul className="flex gap-8 mt-9 ml-12">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">TV Shows</a>
                </li>
                <li>
                  <a href="/">Movie</a>
                </li>
                <li>
                  <a href="/">Latest</a>
                </li>
                <li>
                  <a href="/">Mylist</a>
                </li>
                <li>
                  <a href="/">Browse by Languages</a>
                </li>
              </ul>
            </div>
            <div className="ml-96">
              <ul className="flex gap-7 mt-8">
                <li className="pointer">
                  <a href="/">
                    <SearchIcon />
                  </a>
                </li>
                <li className="pointer">
                  <a href="/">
                    <CardGiftcardIcon />
                  </a>
                </li>
                <li className="pointer">
                  <a href="/">
                    <NotificationsIcon />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img
                      width="32"
                      height="10"
                      src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                      alt="Avatar"
                      ></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar