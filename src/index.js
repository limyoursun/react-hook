import ReactDOM from "react-dom/client";
import React, { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const upDateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }
  useEffect(upDateTitle, [title])
  return setTitle;
}

const App = () => {
  const titleUpdater  = useTitle("loading..");
  setTimeout(() => {titleUpdater("닌자 하이얏")}, 500)
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
