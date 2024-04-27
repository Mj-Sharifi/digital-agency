import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Tooltip,
  Menu,
  MenuItem,
  Avatar,
  IconButton,
  Typography,
  tooltipClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Auth from "../../Utils/Auth";
const settings = ["Profile", "Logout"];

const BlackTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.primary.main,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.primary.main,
    color:theme.palette.text.main,
    fontWeight:"600",
    fontSize:"11px"
  },
}));
export default function Profile() {
  const { handleToken } = useContext(Auth);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    try {
      (async () => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}makarya-users`);
        const data = await res.json();
        setUserInfo(data[0]);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      sx={{
        flexGrow: 0,
        marginLeft: { md: "40px" },
      }}
    >
      <BlackTooltip title={userInfo?.fullName}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt={userInfo?.fullName}
            src={`assets/images/testimony/${userInfo?.avatar}`}
          />
        </IconButton>
      </BlackTooltip>
      <Menu
        sx={{
          mt: "20px",
          "& .MuiPaper-root": { backgroundColor: "black", color: "white" },
        }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        keepMounted
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting, index) => (
          <MenuItem key={index} onClick={handleCloseUserMenu}>
            {index === 0 ? (
              <Link to="/my-profile">
                <Typography textAlign="center" variant="body1" color={"text.white"}>{setting}</Typography>
              </Link>
            ) : (
              <Typography textAlign="center" variant="body1" onClick={() => handleToken("")}>
                {setting}
              </Typography>
            )}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
