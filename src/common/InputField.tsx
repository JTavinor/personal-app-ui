import { useState } from "react";

const InputField = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label
        htmlFor="stringInput"
        style={{ fontSize: "12px", fontWeight: 600 }}
      >
        Enter String:
      </label>
      <input
        type="text"
        id="stringInput"
        value={inputValue}
        placeholder="
        Placeholder text..."
        onChange={handleChange}
        style={{
          height: "34px",
          borderRadius: "4px",
          border: "1px solid gray",
          padding: "4px 6px 3px",
          fontSize: "16px",
          maxWidth: "280px",
        }}
      />
    </div>
  );
};

export default InputField;
