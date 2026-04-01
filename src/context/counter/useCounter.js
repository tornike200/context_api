import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export function useCounter() {
  return useContext(CounterContext);
}
