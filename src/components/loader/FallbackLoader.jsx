import React from "react";
import { FALLBACK_LOADER } from "../../assets/loader";
import "./style.scss";
function FallbackLoader() {
  return (
    <div className="fallback_loader">
      <img src={FALLBACK_LOADER} alt="loader" />
    </div>
  );
}

export default FallbackLoader;
