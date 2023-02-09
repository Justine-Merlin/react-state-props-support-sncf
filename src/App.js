import './App.css';
import { useState } from "react";
import CounterButton from './components/CounterButton';

function App() {
  // const [state, setState] = useState("");

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <h2>{state}</h2>
      <button onClick={() => setState("hello world")}>Change le state</button> */}
      <h1>{count}</h1>

      <CounterButton label="incrémenter" operation="+" modifyCount={() => setCount(count + 1)} />
      <CounterButton label="décrémenter" operation="-" modifyCount={() => setCount(count + 1)} />
    </div>
  );
}

export default App;
