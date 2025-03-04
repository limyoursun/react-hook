import ReactDOM from "react-dom/client";
import React, { useEffect, useRef } from "react";

const App = () => {

  const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
      if(element.current){ // componentDidMount
        element.current.addEventListener("click", onClick)
      }
      return () => { // componentWillUnMount
        if(element.current){
          element.current.removeEventListener("click", onClick)
        }
      }
    }, [])
    return element;
  }
  const sayHello = () => console.log("하이염");
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>click to sat hi</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
