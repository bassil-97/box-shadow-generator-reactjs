import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

import "./Slider.css";

export default function SliderSizes({ name, title, handleChange }) {
  return (
    <Box className="slider-box">
      <Typography sx={{ fontWeight: "bold" }} variant="subtitle1">
        {title}
      </Typography>
      <Slider
        defaultValue={50}
        aria-label="Default"
        valueLabelDisplay="auto"
        name={name}
        onChange={handleChange}
      />
    </Box>
  );
}
