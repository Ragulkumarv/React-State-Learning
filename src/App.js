import "./App.css";
import UseStateHook from "./UseStateHook";
import UseRefHook from "./UseRefHook";
import PropDrilling from "./PropDrilling";
import { useState } from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";

function App() {
  const [fruits] = useState([
    { fruitName: "apple", id: 1 },
    { fruitName: "apple", id: 2 },
    { fruitName: "plum", id: 3 },
  ]);
  return (
    <div>
      <UseStateHook />
      <UseRefHook />
      <PropDrilling msg="I passed through the Header and the Wrapper and I reached the Button component" />
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  );
}

export default App;
