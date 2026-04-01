import { useState } from "react";
import { CounterContext } from "./CounterContext";

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((prev) => prev + 1);
  }

  function decrease() {
    setCount((prev) => prev - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <CounterContext.Provider value={{ count, increase, decrease, reset }}>
        {children}
      </CounterContext.Provider>
    </div>
  );
};

export default CounterProvider;
