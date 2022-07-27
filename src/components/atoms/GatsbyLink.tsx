import React from "react";
import { Link } from "gatsby";

interface GatsbyLinkProps {
  to: string;
  className: string;
  name: string;
}

const GatsbyLink: React.FC<GatsbyLinkProps> = (props) => {
  return (
    <Link to={props.to} className={props.className}>
      {props.name}
    </Link>
  );
};

export default GatsbyLink;
