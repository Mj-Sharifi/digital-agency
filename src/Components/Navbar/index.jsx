import {
  AppBar,
  Box,
  Stack,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Button,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { KeyboardArrowDown, MenuSharp, Login } from "@mui/icons-material";
import HamburgerMenu from "./HamburgerMenu";
import Profile from "./Profile";
import Auth from "../../Utils/Auth";

// Menu
const navItems = [
  "Home",
  "About Us",
  "Portfolio",
  "Pricing",
  "Blog",
  "Contact",
];
const pagesItems = [
  "LOGIN/REGISTER",
  "MY PROFILE",
  "PRICING",
  "FAQ",
  "404 PAGE",
];
// const navItems = ["Home", "About Us", "Portfolio", "Blog", "Pages", "Contact"];
// const pagesItems = [
//   "LOGIN/REGISTER",
//   "MY PROFILE",
//   "PRICING",
//   "FAQ",
//   "404 PAGE",
// ];
const menuItems = [
  {
    id: "menu-item-Home",
    label: "Home",
  },
  {
    id: "menu-item-About-Us",
    label: "About Us",
  },
  {
    id: "menu-item-Portfolio",
    label: "Portfolio",
    children: [
      { id: "menu-item-Portfolio-community", label: "@mui/x-charts" },
      { id: "menu-item-Portfolio-community", label: "@mui/x-charts" },
    ],
  },
  {
    id: "menu-item-Blog",
    label: "Tree View",
    children: [{ id: "tree-view-community", label: "@mui/x-tree-view" }],
  },
  {
    id: "menu-item-Blog",
    label: "Tree View",
    children: [{ id: "tree-view-community", label: "@mui/x-tree-view" }],
  },
  {
    id: "contact",
    label: "Tree View",
    children: [{ id: "tree-view-community", label: "@mui/x-tree-view" }],
  },
];

const handleLink = (item, index) => {};
const capitalize = (str) => {
  let strArray = str.split(" ");
  strArray = strArray.map((s) => {
    return s[0].toUpperCase() + s.slice(1).toLowerCase();
  });
  const finalString = strArray.join(" ");
  return finalString;
};

export default function Navbar() {
  const { token } = useContext(Auth);
  const page = useLocation();
  const [border, setBorder] = useState();
  useEffect(() => {
    const pathname = page?.pathname;
    if (pathname === "/") {
      setBorder("Home");
    } else if (pathname.includes("about-us")) {
      setBorder("About Us");
    } else {
      navItems.slice(2).map((e) => {
        if (pathname.includes(e.toLowerCase())) {
          setBorder(e);
        }
      });
    }
  }, [page]);

  // Dropdown Menu
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(event.currentTarget.firstElementChild.innerHTML);
  };
  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };
  // Hamburger Menu
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = (event) => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <AppBar
      component="nav"
      sx={{
        backgroundColor: "black !important",
        color: "white",
        height: "80px",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", height: "100%" }}>
        <Box>
          <img
            className="w-12 h-12"
            src={`assets/images/footer/footer logo.svg`}
            alt="Makarya"
            title="Makarya"
          />
        </Box>
        <Stack
          direction={"row"}
          gap={4}
          display={{ xs: "none", md: "flex" }}
          height={"100%"}
          alignItems={"center"}
        >
          {border && navItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                transition: "0.3s",
                display: "flex",
                alignItems: "center",
                height: "100%",
                borderBottom: `${
                  item == border ? "3px solid #FFB51F" : "none"
                }`,
                paddingBottom: `${item == border ? "10px" : "0px"}`,
              }}
            >
              <Link
                to={`/${index > 0 ? item.replace(" ", "-").toLowerCase() : ""}`}
                // onClick={() => setBorder(item)}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "white !important",
                    transition: "all 0.3s",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {item.toUpperCase()}
                </Typography>
              </Link>
            </Box>
          ))}
          {/* <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open === "PAGES" && true}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "dropdown-portfolio",
            }}
            sx={{
              "& .MuiPaper-root": { backgroundColor: "black", color: "white" },
              "& a": { color: "white !important", transition: "all 0.3s" },
              "& a:hover": { color: "primary.main" },
            }}
          >
            {pagesItems.map((e, i) => (
              <MenuItem key={i} onClick={handleClose}>
                <Link
                  to={`/${
                    i === 0 ? "register" : e.toLowerCase().split(" ").join("-")
                  }`}
                >
                  {e}
                </Link>
              </MenuItem>
            ))}
          </Menu> */}
          {token ? (
            <Profile />
          ) : (
            <Link to="/register">
              <Button
                disableRipple
                variant="contained"
                sx={{
                  marginLeft: "40px",
                  color: "white",
                  width: "100px",
                  height: "40px",
                  "&:hover": { backgroundColor: "#FFB51F" },
                }}
                startIcon={<Login />}
              >
                Login
              </Button>
            </Link>
          )}
        </Stack>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          {token && <Profile />}
        </Box>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          sx={{ display: { md: "none" } }}
        >
          <MenuSharp fontSize="large" />
        </IconButton>
        <HamburgerMenu
          navItems={navItems}
          pagesItems={pagesItems}
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
      </Toolbar>
    </AppBar>
  );
}
