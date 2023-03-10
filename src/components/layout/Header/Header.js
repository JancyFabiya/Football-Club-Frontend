import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../../redux/slices/adminSlices";
import { toast } from "react-toastify";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  

  const { loading, appErr, serverErr, logout } = useSelector(
    (store) => store?.admin
  );
 
  const login = JSON.parse(localStorage.getItem("login"));

  function logoutUser() {
    dispatch(logoutAction(""));
   
  }

  useEffect(() => {
    if(logout?.success == true){
      toast.success(logout.message)
    navigate("/")

    }
     
  }, [logout]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = (event) => {
  //   if (details && Object.keys(details).length === 0) {
  //   } else {
  //     if (details && details.email) {
  //       navigate(`/user/account`);
       
  //     }else {
  //       navigate(`/user/login`);
  //     }
  //   }






  // //   setAnchorEl(event.currentTarget);
  // //   setAnchorEl(null);
  // // };
  // const cartHandler = (event) => {
  //   navigate(`/cart`);
  //   setAnchorEl(event.currentTarget);
  //   setAnchorEl(null);
  // };
  // const wishlistHandler = (event) => {
  //   navigate(`/wishlist`);
  //   setAnchorEl(event.currentTarget);
  //   setAnchorEl(null);
  // };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick=''>Profile</MenuItem>
      <MenuItem onClick=''>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick=''>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent='' color="error">
            <LocalMallIcon className="mobLocalMallIcon" />
          </Badge>
        </IconButton>
        <p>Bag</p>
      </MenuItem>

      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          onClick=''
        >
          <Badge badgeContent='' color="error">
            {/* <NotificationsIcon /> */}
            <FavoriteBorderIcon />
          </Badge>
        </IconButton>
        <p>Wishlist</p>
      </MenuItem>
      <MenuItem onClick=''>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" style={{ backgroundColor: "#FF6347" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            FOOTBALL-CLUB
          </Typography>
          </Link>
          {/* <form className="searchBox" onSubmit={searchSubmitHandler}> */}
            {/* <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search???"
                inputProps={{ "aria-label": "search" }}
                // onChange={(e) => setKeyword(e.target.value)}
              />
            </Search> */}
          {/* </form> */}
          <Box sx={{ flexGrow: 1 }} />
          {login ?
          (<Box sx={{ display: { xs: "none", md: "flex" } }}>
          {/* <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            // onClick={cartHandler}
          >
            <Badge badgeContent='' color="error">
              <LocalMallIcon className="LocalMallIcon" />
            </Badge>
          </IconButton>
  
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            // onClick={wishlistHandler}
          >
            <Badge badgeContent='' color="error">
              <FavoriteBorderIcon />
            </Badge>
          </IconButton> */}
  
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            // aria-controls={menuId}
            aria-haspopup="true"
            // onClick={handleProfileMenuOpen}
            onClick={logoutUser}
            color="inherit"
          >
            {/* <Link to="/"> */}
              <ExitToAppIcon className="accountCircle" />
            {/* </Link> */}
          </IconButton>
        </Box>
        )
        :
        (<Box sx={{ display: { xs: "none", md: "flex" } }}>
        {/* <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
          // onClick={cartHandler}
        >
          <Badge badgeContent='' color="error">
            <LocalMallIcon className="LocalMallIcon" />
          </Badge>
        </IconButton>

        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          // onClick={wishlistHandler}
        >
          <Badge badgeContent='' color="error">
            <FavoriteBorderIcon />
          </Badge>
        </IconButton> */}

        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          // aria-controls={menuId}
          aria-haspopup="true"
          // onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <Link to="/user/login">
            <AccountCircle className="accountCircle" />
          </Link>
        </IconButton>
      </Box>
      
          
          )}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              // aria-controls={mobileMenuId}
              aria-haspopup="true"
              // onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu}
      {renderMenu} */}
    </Box>
  );
}
