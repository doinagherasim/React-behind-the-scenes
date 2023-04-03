import { useState } from "react";
import DemoOutput from "./components/Demo/Demo";

function App() {

  const [showParagraph, setShowParagraph] = useState(false);

  const toogleParagraphHandler = () => {
  setShowParagraph((showParagraph) => !showParagraph)
  }

  return (
    <div className="wrapper">
      <DemoOutput/>
      <h2>React- behind the scenes!</h2>
      <div className="container">
      <h3>Re-evaluating components !== Re-rendering the DOM</h3>
      <p>Changes in the real DOM are made only for differences between evaluations.</p>
      <p>Using useState!</p>
      { showParagraph && <h4>This is new on the page!</h4>}
      <button onClick={toogleParagraphHandler}>Toogle paragraph!</button>
      <p>Using Props!</p>
      </div>
    </div>
  );
}

export default App;
