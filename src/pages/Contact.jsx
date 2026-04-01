import { useCounter } from "../context/counter/useCounter";

const Contact = () => {
  let { count } = useCounter();

  return (
    <div>
      <h2>Contact Page</h2>

      <h3>count is : {count}</h3>
    </div>
  );
};

export default Contact;
