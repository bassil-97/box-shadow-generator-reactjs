import React from "react";
import { ColorPicker } from "material-ui-color";

export default function ColorPick({ handleColorChange }) {
  return <ColorPicker onChange={handleColorChange} />;
}
