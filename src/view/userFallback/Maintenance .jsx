import React from "react";
import TransitionLayouts from "../../layouts/transition/TransitionLayouts";
import { Link } from "react-router-dom";

function Maintenance({ toggle }) {
  return (
    <TransitionLayouts>
      <div className="text-center d-flex flex-column align-items-center justify-content-center gap-1 vh-100">
        <img
          src="https://demo.wpbeaveraddons.com/wp-content/uploads/2018/02/main-vector.png"
          alt="Maintenance"
          className="img-fluid mb-5"
        />
        <h5>SOMETHING AMAZING IS COMING</h5>
        <h1 className="fw-bold">Portfolio Under Renovation</h1>
        <p>
          I'm working on bringing you an enhanced portfolio experience with
          fresh designs, improved features, and exciting new projects. <br />
          Stay tuned! In the meantime, feel free to explore my previous
          portfolio{" "}
          <Link to="/" onClick={toggle}>
            here
          </Link>
          .
        </p>
      </div>
    </TransitionLayouts>
  );
}

export default Maintenance;
