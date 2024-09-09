import { useState } from "react";

export const Input = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input) return;

    onSubmit(input);

    setInput("");
  };

  return (
    <div className="container">
      <input
        className="border-2 border-black rounded-md p-0.25 px-2 ml-2 text-1xl"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="border-2 border-black rounded-md p-0.25 px-2 ml-2"
      >
        Add
      </button>
    </div>
  );
};
