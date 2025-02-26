### 부지런한 정신과 게으른 육신이 타협한
![title](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGCGFUmU-kOjLLJJxfxXqyGoHUm-BmzXByzB0mFKZF1YTjKYwVZ65-Lii6wQPYmEZBYE&usqp=CAU)   
# REACT HOOK STUDY 
<details>
<summary>[1] useInput</summary>

```js
export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLength = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLength);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input
        type="text"
        placeholder="Name"
        value={name.value}
        onChange={name.onChange}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
```
</details>

<details><summary>[2] useTabs</summary>

```js
const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if(!allTabs || !Array.isArray(allTabs)){
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem : setCurrentIndex
  }
}

const content = [
  {
    tab:"Section 1",
    content : "I`m the content of the Section 1"
  },
  {
    tab:"Section 2",
    content : "I`m the content of the Section 2"
  }
]

const App = () => {
  const {currentItem, changeItem} = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index)=> <button onClick={() => {changeItem(index)}}>{section.tab}</button>)}
      <div>{currentItem.content}</div>
    </div>
  );
};
```
</details>
