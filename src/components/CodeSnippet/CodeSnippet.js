import React, { useState, useRef } from "react";
import "./CodeSnippet.css";
import { config } from "./config";
function CodeSnippet() {
  const [state, setstate] = useState(
    JSON.stringify(config.constants.ingo.payments, null, 6)
  );
  const cellRef = useRef(null);
  const beautify = () => {
    setstate(cellRef.current.innerText);
  };
  return (
    <div className="main-container">
      <div className="code-header-container" contentEditable={false}>
        <div className={"code-info-icon"}>
          <button onClick={() => beautify()}>Info</button>
        </div>
        <div className={"code-refresh-icon"}>
          <button onClick={() => beautify()}>Beautify</button>
        </div>
      </div>
      <pre className="language-sql" data-linenumber="0">
      <code className={"language-css"} contentEditable={true}>
          <div id="content"  ref={cellRef}>
            {state}
          </div>
       
      </code>
      </pre>
     
    </div>

      
  );
}

export default CodeSnippet;
