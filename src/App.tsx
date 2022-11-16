import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import UI01HomeMaindish from "./pages/UI01HomeMaindish";
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

      <Route path="/ui02log-in" element={<UI02LogIn />} />

      <Route path="/ui01homesidedish" element={<UI01HomeSidedish />} />
    </Routes>
  );
}
export default App;
