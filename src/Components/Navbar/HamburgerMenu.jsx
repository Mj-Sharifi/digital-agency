import React from "react";
import { Box, Drawer, Divider, Typography, Stack } from "@mui/material";
import { TreeItem, TreeView } from "@mui/x-tree-view";
import { ExpandMore, ChevronRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
const drawerWidth = "250px";

export default function HamburgerMenu({
  navItems,
  pagesItems,
  handleDrawerToggle,
  setMobileOpen,
  mobileOpen,
}) {
  return (
    <Drawer
      open={mobileOpen}
      onClose={(event) => handleDrawerToggle(event)}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", md: "none" },
        "& .MuiPaper-root": {
          width: drawerWidth,
          backgroundColor: "black",
          paddingY: "10px",
        },
        "& a": { color: "text.white" },
      }}
    >
      <Box sx={{ textAlign: "center", color: "white !important" }}>
        <img
          className="w-12 h-12 mx-auto my-3"
          src={`assets/images/footer/footer logo.svg`}
          alt="Makarya"
          title="Makarya"
        />
        <Divider
          sx={{ backgroundColor: "#FFB51F", mb: "15px" }}
          variant="middle"
        />
        <Stack flexDirection={"column"} gap={2}>
          {navItems.map((item, index) => (
            <Link
              to={`/${index > 0 ? item.replace(" ", "-").toLowerCase() : ""}`}
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
          ))}
        </Stack>
      </Box>
    </Drawer>
  );
}
