import { Box, Breadcrumbs, Typography} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const capitalize = (str) => {
  let strArray = str.split("-");
  strArray = strArray.map((s) => {
    return s[0].toUpperCase() + s.slice(1).toLowerCase();
  });
  const finalString = strArray.join(" ");
  return finalString;
};
const handleLinks = (p) => {
  const segments = p.split("/");
  ((segments.includes("blog") || segments.includes("portfolio")) && segments.length>2)&&segments.splice(2,1)
  const pathArray = segments.reduce((acc, segment, index) => {
    if (segment !== "") {
      const path = "/" + segments.slice(1, index + 1).join("/");
      acc.push(path);
    }
    return acc;
  }, []);

  return pathArray;
};
const handleBreadcumbs = (page, pathNames) => {
  let breadCrumb;
  if (page.length === 1) {
    breadCrumb = (
      <Typography color={"primary"}>{capitalize(page[0])}</Typography>
    );
  } else {
    breadCrumb = page.map((p, i) =>
      i === page.length - 1 ? (
        <Link key={i} className="text-[#FFB51F]" to={pathNames[i]}>
          {capitalize(p)}
        </Link>
      ) : (
        <Link key={i} to={pathNames[i]}>
          {capitalize(p)}
        </Link>
      )
    );
  }
  return breadCrumb;
};

export default function Bread() {
  const pathName = useLocation();
  const page = pathName?.pathname.split("/").slice(1);
  ((page.includes("blog") || page.includes("portfolio")) && page.length>2)&&page.splice(1,1)
  let pathNames = handleLinks(pathName?.pathname)

  return (
    <Box
      sx={{
        width: "100%",
        paddingY: "10px",
        paddingLeft: { xs: "20px", md: "10%" },
        position: "absolute",
        bottom: "0",
        backgroundColor: "#00000080",
      }}
    >
      <Breadcrumbs aria-label="breadcrumb" sx={{ color: "white !important" }}>
        <Link to="/">Home</Link>
        {handleBreadcumbs(page, pathNames)}
      </Breadcrumbs>
    </Box>
  );
}
