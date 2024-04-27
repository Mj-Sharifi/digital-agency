import React from "react";
import { Box, Drawer, Divider } from "@mui/material";
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
          paddingY:"10px"
        },
        "& a":{color:"text.white"}
      
      }}
    >
      <Box sx={{ textAlign: "center", color: "white !important" }}>
        <img
          className="w-12 h-12 mx-auto my-3"
          src={`assets/images/footer/footer logo.svg`}
          alt="Makarya"
          title="Makarya"
        />
        <Divider sx={{ backgroundColor: "#FFB51F",mb:"15px" }} variant="middle" />
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMore />}
          defaultExpandIcon={<ChevronRight />}
          sx={{
            "& li .MuiTreeItem-label": { order: "1", width: "auto",color:"text.white" },
            "& li .MuiTreeItem-iconContainer": { order: "2" },
            "& li.MuiTreeItem-root": { marginBottom: "20px" },
            "& .MuiCollapse-wrapperInner li":{marginBottom:"5px"},
            
          }}
        >
          <Box >
            {navItems.map((e, i) => {
              if (i === 4) {
                return (
                  <TreeItem
                    key={i}
                    nodeId={(i + 1).toString()}
                    label={e}
                    onClick={() => {
                      setMobileOpen(true);
                    }}
                  
                  >
                    {pagesItems.map((item, index) => (
                      <Link
                        to={`/${
                          index === 0 ? "register" : item.toLowerCase().split(" ").join("-")
                        }`}
                        key={index + 10}
                      >
                        <TreeItem
                          nodeId={item + index.toString()}
                          label={item}
                          onClick={() => setMobileOpen(false)}
                          
                        />
                      </Link>
                    ))}
                  </TreeItem>
                );
              } else {
                return (
                  <Link
                    key={i}
                    to={
                      i === 0 ? "/" : `/${e.toLowerCase().split(" ").join("-")}`
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    <TreeItem nodeId={(i + 1).toString()} label={e} />
                  </Link>
                );
              }
            })}
          </Box>
        </TreeView>
      </Box>
    </Drawer>
  );
}
