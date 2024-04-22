import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFB51F !important",
    },
    text:{
      main: 'black !important',
      white: 'white',
      grey: "#818A91"
    }
  },
  typography: {
    xl: {
      display: "block",
      fontFamily: "Source Sans Pro",
      fontSize: "60px",
      fontWeight: "700",
      lineHeight: "75px",
    },
    l: {
      display: "block",
      fontSize: "40px",
      fontWeight: "700",
      lineHeight: "50px",
    },
    m: {
      display: "block",
      fontFamily: "Source Sans Pro",
      fontSize: "28px",
      fontWeight: "700",
    },
    s: {
      display: "block",
      fontFamily: "Roboto",
      color: "black",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "30px",
    },
    xs:{
      display: "block",
      fontFamily: "Roboto",
      color: "black",
      fontSize: "12px",
      fontWeight: "300",
      lineHeight: "14px",
    }
  },
});
export default theme;
