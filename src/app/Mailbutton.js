import React from "react";
import { NavLink } from "react-router-dom";

const Mailbutton = ({mailto}) => {
  return (
    <>
      <NavLink
        to="#"
        onClick={(e) => {
          window.location.href = mailto;
          e.preventDefault();
        }}
      >
        hardeepbhimra1992@gmail.com
      </NavLink>
    </>
  );
};

export default Mailbutton;
