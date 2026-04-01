import { useCounter } from "../context/counter/useCounter";
import { useTheme } from "../context/theme/useTheme";

const Contact = () => {
  let { count } = useCounter();

  let { isDark } = useTheme();

  return (
    <div
      className={`${isDark ? "bg-gray-800 text-white" : "bg-white text-black"} h-screen transition-colors duration-500 flex flex-col items-center justify-center gap-4`}
    >
      <h2>Contact Page</h2>

      <h3>count is : {count}</h3>
    </div>
  );
};

export default Contact;
