import "@fontsource/roboto";
import "@fontsource/roboto";
import "@fontsource/roboto";
import "@fontsource/roboto";
import "@fontsource/source-sans-pro";
import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./Utils/Theme";
import Auth from "./Utils/Auth";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Portfolio from "./Pages/Portfolio";
import PortfolioDetail from "./Pages/PortfolioDetail";
import ArticleDetail from "./Pages/ArticleDetail";
import MainLayout from "./Layouts/MainLayout";
import SecondaryLayout from "./Layouts/SecondaryLayout";
import FAQ from "./Pages/FAQ";
import Pricing from "./Pages/Pricing";
import Blog from "./Pages/Blog";
import MyProfile from "./Pages/MyProfile";
import { useState } from "react";
import Register from "./Pages/Register";

function App() {
  const [token, setToken] = useState("");
  const handleToken = (t) => {
    setToken(t);
  };
  return (
    <Auth.Provider value={{ token, handleToken }}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id/:title" element={<PortfolioDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id/:title" element={<ArticleDetail />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/my-profile" element={token?<MyProfile />:<Navigate to="/register"/>} />
          </Route>
          <Route element={<SecondaryLayout />}>
            <Route path="/not-found" elemene={<NotFound />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/register" element={token?<Navigate to="/"/>:<Register/>}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </Auth.Provider>
  );
}

export default App;
