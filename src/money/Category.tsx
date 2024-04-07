import { faEdit, faSave } from "@fortawesome/free-regular-svg-icons";
import IconButton from "../common/IconButton";
import { useState } from "react";
import InputField from "../common/InputField";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface CategoryProps {
  name: string;
  _id: string;
}

const Category = ({ category }: { category?: CategoryProps }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(category?.name || "");

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
          <InputField
            onChange={setValue}
            value={value}
            placeholder={category ? "" : "New category..."}
          />
          <IconButton onClick={() => handleCategorySave()} icon={faSave} />
        </>
      ) : (
        <>
          <span>{value}</span>
          <IconButton
            onClick={() => setIsEditing(!isEditing)}
            icon={category ? faEdit : faPlus}
          />
        </>
      )}
    </div>
  );
};

export default Category;
