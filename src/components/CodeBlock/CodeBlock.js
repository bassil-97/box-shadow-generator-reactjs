import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function CodeBlock({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <pre style={{ width: "100%", borderRadius: "10px", position: "relative" }}>
      <code className={`lang-${language}`}>{code}</code>
    </pre>
  );
}
