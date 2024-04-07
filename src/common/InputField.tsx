import { useState } from "react";

const InputField = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <div>
      <label htmlFor="stringInput">Enter String:</label>
      <input
        type="text"
        id="stringInput"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputField;
