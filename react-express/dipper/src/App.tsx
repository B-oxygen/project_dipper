import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import REGISTERPAGE from "./pages/REGISTERPAGE";
import LOGINPAGE from "./pages/LOGINPAGE";
import MYPage from "./pages/MYPage";
import CustomPageBackground from "./pages/CustomPageBackground";
import RouteFollowingPage from "./pages/RouteFollowingPage";
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
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/my-page":
        title = "";
        metaDescription = "";
        break;
      case "/custom-page-background":
        title = "";
        metaDescription = "";
        break;
      case "/route-following-page":
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
      <Route path="/" element={<REGISTERPAGE />} />

      <Route path="/login-page" element={<LOGINPAGE />} />

      <Route path="/my-page" element={<MYPage />} />

      <Route
        path="/custom-page-background"
        element={<CustomPageBackground />}
      />

      <Route path="/route-following-page" element={<RouteFollowingPage />} />
    </Routes>
  );
}
export default App;
