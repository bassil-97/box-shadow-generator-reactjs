import { useState, useCallback } from "react";
import "./App.css";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { ColorPicker } from "material-ui-color";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Box from "./components/Box/Box";
import SliderSizes from "./components/Slider/Slider";
import CodeBlock from "./components/CodeBlock/CodeBlock";

function App() {
  const [data, setData] = useState({
    hsl: {
      title: "Horizontal Shadow Length (X-axis)",
      value: 30,
    },
    vsl: {
      title: "Vertical Shadow Length (Y-axis)",
      value: 38,
    },
    blurR: {
      title: "Blur Radius",
      value: 40,
    },
    spreadR: {
      title: "Spread Radius",
      value: 0,
    },
    // shadowColorOpacity: {
    //   title: "Shadow Color Opacity",
    //   value: 50,
    // },
  });

  const [color, setColor] = useState("#a8a8a8");
  const [copied, setCopied] = useState(false);

  let code = `box-shadow: ${data.hsl.value}px ${data.vsl.value}px ${data.blurR.value}px ${data.spreadR.value}px ${color};
-webkit-box-shadow: ${data.hsl.value}px ${data.vsl.value}px ${data.blurR.value}px ${data.spreadR.value}px ${color};
-moz-box-shadow: ${data.hsl.value}px ${data.vsl.value}px ${data.blurR.value}px ${data.spreadR.value}px ${color};`;

  const handleColorChange = (...args) => {
    setColor("#" + args[0]["hex"]);
  };

  const handleChange = (event) => {
    setCopied(false);
    setData({
      ...data,
      [event.target.name]: {
        title: data[event.target.name].title,
        value: event.target.value,
      },
    });
  };

  const onCopy = useCallback(() => {
    setCopied(true);
  }, []);

  return (
    <div className="App">
      <div className="bx-shadow-app__header text-center">
        <h1 className="fw-bold">Box Shadow Generator</h1>
        <h5>Generate Soft-UI CSS code</h5>
      </div>
      <div className="bx-shadow-demo">
        <div className="container">
          <div className="row tool-row">
            <div className="col-lg-6 col-sm-12 d-flex align-items-center justify-content-center">
              <Box color={color} {...data} />
            </div>
            <div className="col-lg-6 col-sm-12 d-flex align-items-center justify-content-center flex-column">
              <div className="sliders-container">
                {Object.entries(data).map((el, index) => (
                  <SliderSizes
                    key={index}
                    name={el[0]}
                    title={el[1]["title"]}
                    handleChange={handleChange}
                  />
                ))}
                <Typography
                  sx={{ fontWeight: "bold", marginBottom: "10px" }}
                  variant="subtitle1"
                >
                  Shadow Color
                </Typography>
                <ColorPicker value={color} onChange={handleColorChange} />
              </div>
              <div className="code-snippet">
                <CodeBlock code={code} language="css" />
                <CopyToClipboard onCopy={onCopy} text={code}>
                  {!copied ? (
                    <Button variant="outlined" startIcon={<ContentCopyIcon />}>
                      copy code
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="success"
                      startIcon={<CheckCircleIcon />}
                    >
                      copied
                    </Button>
                  )}
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
