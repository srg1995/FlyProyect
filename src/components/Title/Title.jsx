import React from "react";

export default function Title({ text, color }) {
  return (
    <h2 className={`text-3xl font-bold underline text-center mb-8 ${color}`}>
      {text}
    </h2>
  );
}
