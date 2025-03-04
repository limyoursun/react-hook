import ReactDOM from "react-dom/client";
import React, { useRef } from "react";

const App = () => {
  const saecom = useRef();
    setTimeout(() => saecom.current?.focus(), 1000)

  return (
    <div className="App">
      <input ref={saecom} placeholder="텍스트를 입력하세요"/>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
