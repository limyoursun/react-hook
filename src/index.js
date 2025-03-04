import ReactDOM from "react-dom/client";
import React, { useState } from "react";

const content = [
  {
    tab:"section1",
    content:"I`m the section1",
  },
  {
    tab:"section2",
    content:"I`m the section2",
  }
]

const useTab = (inintialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(inintialTab);
  return {
    currentItem : allTabs[currentIndex],
    changeItem : setCurrentIndex
  }
}

const App = () => {
  const {currentItem, changeItem} = useTab(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button type="button" onClick={() => {{changeItem(index)}}}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
