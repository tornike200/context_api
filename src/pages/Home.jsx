import { useCounter } from "../context/counter/useCounter";

const Home = () => {
  let { count, increase, decrease, reset } = useCounter();

  return (
    <div>
      <h2>Home Page</h2>
      <h3>count is: {count}</h3>

      <div className="flex gap-3 text-red-400">
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
};

export default Home;
