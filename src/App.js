import React, { useContext, useReducer } from "react";
import { UserContext } from "./index";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return initialState;

    default:
      return initialState;
  }
}

function App() {
  const value = useContext(UserContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <span>Hello, {value}</span>
      <div>Count : {state.count}</div>

      <button onClick={() => dispatch({ type: "increment" })}>increment</button>

      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>

      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default App;
