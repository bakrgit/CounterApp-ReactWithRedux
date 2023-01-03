import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  //import redux logic #3
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);
  return (
    <div className="App">
      {count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}

export default App;
