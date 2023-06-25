import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "./imgs/samurai1.png";
import AdbIconMob from "./imgs/samurai.png";
import classes from "./Navbar.module.css";
import HeaderCartButton from "./Button/HeaderCartButton.js";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

const pages = ["Home", "Contact", "Sizechart", "FAQ"];

function Navbar({ showCartHandler, hideCartHandler, onShowCart }) {
  // eslint-disable-next-line
  const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);
  const [sidebar, setSidebar] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    toggleSidebar();
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
  const toggleSidebar = () => {
    setSidebar(!sidebar);
    setShowBackdrop(!showBackdrop);
  };

  return (
    <AppBar position="static" className={classes.appBarContainer}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <img
              src={AdbIcon}
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              alt="brand-logo"
              className={classes.brandLogo}
            />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <FaIcons.FaBars />
            </IconButton>
            <nav
              className={
                sidebar ? "nav-menu zeeind active" : " zeeind nav-menu"
              }
            >
              <img
                src={AdbIconMob}
                alt="brand-logo"
                style={{
                  width: "10rem",
                  height: "10rem",
                  position: "absolute",
                  left: "50%",
                  transform: "translate(-45%,10%)",
                }}
              />
              <ul className={classes["nav-menu-items"]} onClick={toggleSidebar}>
                <li className={classes["navbar-toggle"]}>
                  <span
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      fontFamily: "Bebas Neue",
                    }}
                    className="menu-bars"
                  >
                    <BsIcons.BsBoxArrowInLeft />
                    &nbsp;Back
                  </span>
                </li>
                <div className={classes["sidebar-items-container"]}>
                  {pages.map((page) => (
                    <Link
                      key={page}
                      to={page === "Home" ? "/" : `${page.toLowerCase()}`}
                      className={classes["sidebar-items"]}
                    >
                      <Box onClick={handleCloseNavMenu}>
                        <Typography
                          textAlign="center"
                          sx={{ fontFamily: "Bebas Neue", fontSize: "3rem" }}
                        >
                          {page}
                        </Typography>
                      </Box>
                    </Link>
                  ))}
                </div>
              </ul>
            </nav>
            {/* <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { sm: "block", md: "none" },
              }}
              className={classes.menuAppbar}
            >
              <div id={classes["menu-appbar"]}>
                <span
                  style={{ cursor: "pointer" }}
                  className="menu-bars"
                  onClick={handleOpenNavMenu}
                >
                  <BsIcons.BsBoxArrowInLeft />
                </span>
                {pages.map((page) => (
                  <Link to={page === "Home" ? "/" : `${page.toLowerCase()}`}>
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </div>
            </Menu> */}
          </Box>
          <Link
            to="/"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%,0)",
            }}
          >
            <img
              src={AdbIcon}
              alt="brand-logo"
              className={classes.AdbIconMob}
            />
          </Link>

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            className={classes.navbarRoutesLayout}
          >
            {pages.map((page) => (
              <Link
                key={page}
                to={page === "Home" ? "/" : `${page.toLowerCase()}`}
                className={classes.navbarRoutesItem}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "Bebas Neue",
                    fontSize: "1.5rem",
                    letterSpacing: "3px",
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          <HeaderCartButton onClick={onShowCart} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
