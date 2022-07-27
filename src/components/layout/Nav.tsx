import * as React from "react";
import navData from "../../js/data/navLinks";
import GatsbyLink from "../atoms/GatsbyLink";
import LogoSVG from "../atoms/logoSVG";

interface ItemInterface {
  to: string;
  className: string;
  name: string;
}

const navLinks = (item: ItemInterface) => {
  return (
    <li key={item.name}>
      <GatsbyLink to={item.to} className="nav-item" name={item.name} />
    </li>
  );
};

const Nav: React.FC = () => {
  return (
    <div className="nav">
      <LogoSVG logoLocation="nav" />
      <ul className="nav-list">
        {navData.map((item) => {
          return navLinks(item);
        })}
      </ul>
    </div>
  );
};

export default Nav;
