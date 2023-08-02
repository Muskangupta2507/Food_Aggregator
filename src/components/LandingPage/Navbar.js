/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useParams } from "react";
// import Logo from "../Assets/Logo.svg";
import Logo from "../../Assets/dine_logo1.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import LoginIcon from '@mui/icons-material/Login';
import { getActiveElement } from "@testing-library/user-event/dist/utils";
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  // const { id } = useParams();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    {
      text: "Home",
      path: "#home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      path: "#about",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      path: "#test",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      path: "#contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Login",
      path: "",
      icon: <LoginIcon />,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container pad-4">
        <img src={Logo} alt="" />
        <p>Dine<span>Hub</span></p>
      </div>
      <div className="navbar-links-container pad-4">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#test" >Testimonials</a>
        <a href="#contact">Contact</a>
        <NavLink to={`/login`} className="text-decoration-none text-light">
        <button className="primary-button"> Order Now</button>
        </NavLink>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right" >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton href={item.path} onClick={() => item.text=='Login'? navigate('/login'): ()=>{}}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text}  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};


export default Navbar;
