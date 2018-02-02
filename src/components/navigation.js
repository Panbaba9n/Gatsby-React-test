import React from "react";
import Link from "gatsby-link";

const Navigation = props =>
    <li className="nav-link" style={{ display: `inline-block`, marginRight: `1rem`, marginBottom: `0`,  }}>
        <Link to={props.to}>
            {props.children}
        </Link>
    </li>

export default Navigation;