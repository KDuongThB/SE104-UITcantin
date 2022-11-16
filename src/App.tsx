import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import UI01HomeMaindish from "./pages/UI01HomeMaindish";
import UI07OrderHistory2 from "./pages/UI07OrderHistory2";
import UI07OrderHistory1 from "./pages/UI07OrderHistory1";
import UI06DishesMenu from "./pages/UI06DishesMenu";
import UI05Profile from "./pages/UI05Profile";
import UI01HomeUserSidedish from "./pages/UI01HomeUserSidedish";
import UI01HomeUserMaindish from "./pages/UI01HomeUserMaindish";
import UI03Register from "./pages/UI03Register";
import UI02LogIn from "./pages/UI02LogIn";
import UI01HomeSidedish from "./pages/UI01HomeSidedish";
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
      case "/ui07orderhistory2":
        title = "";
        metaDescription = "";
        break;
      case "/ui07orderhistory1":
        title = "";
        metaDescription = "";
        break;
      case "/ui06dishesmenu":
        title = "";
        metaDescription = "";
        break;
      case "/ui05profile":
        title = "";
        metaDescription = "";
        break;
      case "/ui01home-usersidedish":
        title = "";
        metaDescription = "";
        break;
      case "/ui01home-user":
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
      case "/ui01homesidedish":
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
      <Route path="/" element={<UI01HomeMaindish />} />

      <Route path="/ui07orderhistory2" element={<UI07OrderHistory2 />} />

      <Route path="/ui07orderhistory1" element={<UI07OrderHistory1 />} />

      <Route path="/ui06dishesmenu" element={<UI06DishesMenu />} />

      <Route path="/ui05profile" element={<UI05Profile />} />

      <Route path="/ui01home-usersidedish" element={<UI01HomeUserSidedish />} />

      <Route path="/ui01home-user" element={<UI01HomeUserMaindish />} />

      <Route path="/ui03register" element={<UI03Register />} />

      <Route path="/ui02log-in" element={<UI02LogIn />} />

      <Route path="/ui01homesidedish" element={<UI01HomeSidedish />} />
    </Routes>
  );
}
export default App;
