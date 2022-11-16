import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import UI01Home from "./pages/UI01Home";
import UI03Register from "./pages/UI03Register";
import UI02LogIn from "./pages/UI02LogIn";
import UI07OrderHistory from "./pages/UI07OrderHistory";
import LoginDropdown from "./pages/LoginDropdown";
import UI05Profile from "./pages/UI05Profile";
import UI01HomeUser from "./pages/UI01HomeUser";
import UI06DishesMenu from "./pages/UI06DishesMenu";
import UIKitWeb from "./pages/UIKitWeb";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/ui03register":
        title = "";
        metaDescription = "";
        break;
      case "/ui02log-in":
        title = "";
        metaDescription = "";
        break;
      case "/ui07orderhistory":
        title = "";
        metaDescription = "";
        break;
      case "/logindropdown":
        title = "";
        metaDescription = "";
        break;
      case "/ui05profile":
        title = "";
        metaDescription = "";
        break;
      case "/ui01home-user":
        title = "";
        metaDescription = "";
        break;
      case "/ui06dishesmenu":
        title = "";
        metaDescription = "";
        break;
      case "/ui-kit-web":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<UI01Home />} />

      <Route path="/ui03register" element={<UI03Register />} />

      <Route path="/ui02log-in" element={<UI02LogIn />} />

      <Route path="/ui07orderhistory" element={<UI07OrderHistory />} />

      <Route path="/logindropdown" element={<LoginDropdown />} />

      <Route path="/ui05profile" element={<UI05Profile />} />

      <Route path="/ui01home-user" element={<UI01HomeUser />} />

      <Route path="/ui06dishesmenu" element={<UI06DishesMenu />} />

      <Route path="/ui-kit-web" element={<UIKitWeb />} />
    </Routes>
  );
}
export default App;
