import React from "react";

export default function Subtitle({ text, color }) {
  return <h3 className={`text-2xl font-bold ${color}`}>{text}</h3>;
}
