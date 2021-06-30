import React from "react";
import { Link } from "react-router-dom";

const TargetBlank = ({ openLink, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location = openLink;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

export default TargetBlank;