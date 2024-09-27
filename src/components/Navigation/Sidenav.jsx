import React, { useState } from "react";
import styles from "./sidenav.module.css";
import { navData } from "./NavData.js";
import { NavLink } from "react-router-dom";
export default function Sidenav() {
  const [open, setopen] = useState(true);
  const toggleOpen = () => {
    setopen(!open);
  };
  return (
    <div
      className={
        open
          ? `bg-gradient-to-b from-lime-600 via-lime-500 to-lime-600 ${styles.sidenav}`
          : `bg-gradient-to-b from-lime-600 via-lime-500 to-lime-600 ${styles.sidenavClosed}`
      }
    >
      <div className="fixed w-100">
        <div
          className={
            open
              ? `${styles.hamburger} ${styles.is_active}`
              : `${styles.hamburger}`
          }
          onClick={toggleOpen}
        >
          <div className={`${styles._layer} ${styles._top}`}></div>
          <div className={`${styles._layer} ${styles._mid}`}></div>
          <div className={`${styles._layer} ${styles._bottom}`}></div>
        </div>

        {navData.map((item) => {
          return (
            <NavLink
              key={item.id}
              className={({ isActive }) =>
                isActive
                  ? `text-amber-300 ${styles.sideitem}`
                  : `text-lime-900 ${styles.sideitem}`
              }
              to={item.link}
            >
              {item.icon}

              <span
                className={open ? `${styles.linkText}` : styles.linkTextClosed}
              >
                {item.text}
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
