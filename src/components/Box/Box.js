import React from "react";

export default function Box({ hsl, vsl, blurR, spreadR, color }) {
  let boxStyles = {
    boxShadow: `${hsl.value}px ${vsl.value}px ${blurR.value}px ${spreadR.value}px ${color}`,
    width: "400px",
    height: "350px",
    backgroundColor: "#ECF0F1",
    borderRadius: "30px",
  };

  return <div style={boxStyles}></div>;
}
