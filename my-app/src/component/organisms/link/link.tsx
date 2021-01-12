import React from "react";
import { NavLink as Link } from "react-router-dom";

interface Props {
  to: string;
}
export const LinkR: React.FC<Props> = ({ to }) => {
  return (
    <Link to={`/t/${to}`} className="link" activeClassName="active">
      {to}
    </Link>
  );
};
