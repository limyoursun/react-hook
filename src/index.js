import ReactDOM from "react-dom/client";
import React, { useEffect, useState } from "react";

const content = [
  {
    tab:"Section 1",
    content:"this is Section 1"
  },
  {
    tab:"Section 2",
    content:"this is Section 2"
  }
]

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }
  useEffect(updateTitle, [title]);
  return setTitle;
}

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 500)
  return (
    <div className="App">

    </div>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
