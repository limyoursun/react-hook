import ReactDOM from "react-dom/client";
import React, { useEffect, useState, useRef } from "react";

const App = () => {
  const input = useRef();
  setTimeout(() => input.current.focus(), 500)
  return (
    <div className="App">
      <div>Hi</div>
      <input ref={input} placeholder="CUTE"/>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
