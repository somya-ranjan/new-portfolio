import { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// // static import
import MainLayouts from "./layouts/main/MainLayouts";
import Maintenance from "./view/userFallback/Maintenance ";
import { appRoutes } from "./routes";
import "./App.css";

function App() {
  // // initial state
  const location = useLocation();
  const navigate = useNavigate();

  // // local state
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(true);

  const mainContent = appRoutes.map((route) => {
    return route.component ? (
      <Route
        key={route.name}
        path={route.path}
        exact={route.exact}
        name={route.name}
        element={<route.component />}
      />
    ) : (
      route.redirectRoute && (
        <Route
          path="*"
          key={route.name}
          element={<Navigate to={route.path} />}
        />
      )
    );
  });

  const toggleMaintenanceMode = () => {
    setIsMaintenanceMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isMaintenanceMode) {
      navigate("/maintenance", { replace: true });
    }
  }, [isMaintenanceMode, navigate]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        {isMaintenanceMode ? (
          <Route
            path="/maintenance"
            element={<Maintenance toggle={toggleMaintenanceMode} />}
          />
        ) : (
          <Route element={<MainLayouts />}> {mainContent}</Route>
        )}
      </Routes>
    </AnimatePresence>
  );
}

export default App;
