import React, { useEffect } from "react";
import { Link } from "gatsby";
import LogoSVG from "../atoms/logoSVG";

const Footer = () => {
  return (
    <div className="footer">
      <LogoSVG logoLocation="footer" />
    </div>
  );
};

export default Footer;
