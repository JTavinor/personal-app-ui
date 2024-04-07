import { faEdit, faSave } from "@fortawesome/free-regular-svg-icons";
import IconButton from "../common/IconButton";
import { useState } from "react";
import InputField from "../common/InputField";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NewCategory = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("");

  const handleCategorySave = () => {
    console.log("jjj");
    setIsEditing(false);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "280px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {isEditing ? (
        <>
          <InputField onChange={setValue} value={value} />
          <IconButton onClick={() => handleCategorySave()} icon={faSave} />
        </>
      ) : (
        <>
          <p>{value}</p>
          <IconButton onClick={() => setIsEditing(!isEditing)} icon={faPlus} />
        </>
      )}
    </div>
  );
};

export default NewCategory;
