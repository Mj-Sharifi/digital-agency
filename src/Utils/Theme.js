import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFB51F !important",
    },
    text: {
      main: "black !important",
      white: "white",
      grey: "#818A91",
    },
  },
});
theme.typography.h2 = {
  fontSize: "40px",
  fontWeight: "600",
  lineHeight: "60px",
  [theme.breakpoints.up("sm")]: {
    fontSize: "50px",
    fontWeight: "700",
    lineHeight: "68px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "60px",
    fontWeight: "700",
    lineHeight: "80px",
  },
};
theme.typography.h3 = {
  fontSize: "30px",
  fontWeight: "700",
  lineHeight: "45px",
  [theme.breakpoints.up("sm")]: {
    fontSize: "35px",
    fontWeight: "700",
    lineHeight: "50px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "40px",
    fontWeight: "700",
    lineHeight: "55px",
  },
};
theme.typography.h4 = {
  fontSize: "22px",
  fontWeight: "700",
  [theme.breakpoints.up("sm")]: {
    fontSize: "26px",
    fontWeight: "700",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "28px",
    fontWeight: "700",
  },
};
theme.typography.body2 = {
  fontFamily: "Roboto",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "25px",
  [theme.breakpoints.up("sm")]: {
    fontFamily: "Roboto",
    fontSize: "15px",
    fontWeight: "400",
    lineHeight: "28px",
  },
  [theme.breakpoints.up("md")]: {
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "30px",
  },
};
theme.typography.body1 = {
  fontFamily: "Roboto",
  fontSize: "12px",
  fontWeight: "300",
  lineHeight: "18px",
  [theme.breakpoints.up("sm")]: {
    fontFamily: "Roboto",
    fontSize: "13px",
    fontWeight: "300",
    lineHeight: "20px",
  },
  [theme.breakpoints.up("md")]: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "300",
    lineHeight: "22px",
  },
};
export default theme;
