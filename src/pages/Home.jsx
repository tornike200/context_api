import Button from "../components/Button";
import CounterControls from "../components/CounterControls";
import { useCounter } from "../context/counter/useCounter";
import { useTheme } from "../context/theme/useTheme";

const Home = () => {
  let { count, increase, decrease, reset } = useCounter();
  let { isDark } = useTheme();

  return (
    <div
      className={` ${isDark ? "bg-gray-800 text-white" : "bg-white text-black"} h-screen transition-colors duration-500 flex flex-col items-center justify-center gap-4`}
    >
      <h2>Home Page</h2>
      <h3>count is: {count}</h3>

      <CounterControls>
        <Button handleClick={increase}>increase</Button>
        <Button handleClick={decrease}>decrease</Button>
        <Button handleClick={reset}>reset</Button>
      </CounterControls>
    </div>
  );
};

export default Home;
