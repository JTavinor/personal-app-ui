import { faEdit, faSave } from "@fortawesome/free-regular-svg-icons";
import IconButton from "../common/IconButton";
import { useState } from "react";
import InputField from "../common/InputField";

interface CategoryProps {
  name: string;
  _id: string;
}

const Category = ({ category }: { category: CategoryProps }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(category.name);

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
          {value}
          <IconButton onClick={() => setIsEditing(!isEditing)} icon={faEdit} />
        </>
      )}
    </div>
  );
};

export default Category;
