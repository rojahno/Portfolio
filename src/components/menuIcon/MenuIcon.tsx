import { useState } from "react";
import "./MenuIcon.css";

interface MenuIconProps {
    onClick?: () => void;
}

export const MenuIcon = (props: MenuIconProps) => {
    return (
        <>
            <input id="toggle" type="checkbox" />
            <label htmlFor="toggle" className="hamburger" onClick={props.onClick}>
                <div className="top-bun"></div>
                <div className="meat"></div>
                <div className="bottom-bun"></div>
            </label>
        </>
    );
};
