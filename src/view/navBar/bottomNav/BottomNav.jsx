import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { SiPolymerproject } from "react-icons/si";
import { MdContactMail } from "react-icons/md";
import { GiJourney } from "react-icons/gi";
import "./style.scss";

function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState(location.pathname);

  const handleChange = (event, newValue) => {
    navigate(newValue);
    setValue(newValue);
  };
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className="d-sm-none shadow-lg bottom_nav"
    >
      <BottomNavigationAction
        label="Home"
        value="/"
        icon={<AiFillHome className="fs-2" />}
      />
      <BottomNavigationAction
        label="About"
        value="/about"
        icon={<AiFillInfoCircle className="fs-2" />}
      />
      <BottomNavigationAction
        label="Project"
        value="/project"
        icon={<SiPolymerproject className="fs-2" />}
      />
      <BottomNavigationAction
        label="Journey"
        value="/journey"
        icon={<GiJourney className="fs-2" />}
      />
      <BottomNavigationAction
        label="Contact"
        value="/contact"
        icon={<MdContactMail className="fs-2" />}
      />
    </BottomNavigation>
  );
}

export default BottomNav;
