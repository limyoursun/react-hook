import ReactDOM from "react-dom/client";
import React, { useState } from "react";

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

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem : allTabs[currentIndex],
    changeItem : setCurrentIndex
  }
}

const App = () => {
  const {currentItem, changeItem} = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
