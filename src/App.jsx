import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// // static import
import MainLayouts from "./layouts/main/MainLayouts";
import { appRoutes } from "./routes";
import "./App.css";

function App() {
  // // initial state
  const location = useLocation();

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
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayouts />}> {mainContent}</Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
