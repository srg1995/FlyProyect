import React from "react";
import { Link } from "react-router-dom";

export default function BasicLink({ text, redirect, icon, position, styles }) {
  return (
    <Link className={styles} to={redirect}>
      {position === "left" ? icon : ""}
      {text}
      {position === "right" ? icon : ""}
    </Link>
  );
}
