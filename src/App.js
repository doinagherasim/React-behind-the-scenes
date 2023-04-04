import { useState, useCallback } from "react";
import Component2 from "./components/Demo/Component2";
import DemoOutput from "./components/Demo/Demo";
import Button from "./UI/Button";

function App() {
  console.log("app running ")

  const [showParagraph, setShowParagraph] = useState(false);
  const [showText, setShowText] = useState(false);

  // this function is re-created for every render
  const toogleParagraphHandler = () => {
  setShowParagraph((showParagraph) => !showParagraph)
  }

  // this function is not re-created for every rende, because of useCallback
  const showTextPropsHandler = useCallback(() => {
  setShowText((showText) => !showText)
  },[])

  return (
    <div className="wrapper">
      <h2>React- behind the scenes!</h2>
      <div className="container">
      <h3>Re-evaluating components !== Re-rendering the DOM</h3>
      <p>1. Changes in the real DOM are made only for differences between evaluations.</p>
      <p>Using useState!</p>
      { showParagraph && <h4>This is new on the page!</h4>}
      <Button onClick={toogleParagraphHandler}>Toogle paragraph!</Button>
      <p>Show text Using Props!</p>
      <DemoOutput show={showText}/>
      <Component2 show={false}/>
      <Button onClick={showTextPropsHandler}>Show text from props!</Button>
      <p>2. Preventing from unecessary re-evaluation.</p>
      <p style={{fontStyle:"italic"}}>When a component is wrapped with React.memo, React will memoize the component's props and re-render the component only if its props have changed.</p>

      </div>
    </div>
  );
}

export default App;
