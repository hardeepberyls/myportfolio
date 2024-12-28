import React from "react";
import { NavLink } from "react-router-dom";

const Callbutton = ({telto}) => {
  return (
    <NavLink
      to="#"
      onClick={(e) => {
        window.location.href = telto;
        e.preventDefault();
      }}
    >+91-9810677283</NavLink>
  );
};

export default Callbutton;
