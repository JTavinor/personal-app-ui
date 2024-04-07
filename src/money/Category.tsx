import { faEdit, faSave } from "@fortawesome/free-regular-svg-icons";
import IconButton from "../common/IconButton";
import { useState } from "react";
import InputField from "../common/Inputs/InputField";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useMutation } from "@apollo/client";
import { SAVE_CATEGORY } from "./mutations";
import { CategoryType, GET_CATEGORIES } from "./queries";

const Category = ({ category }: { category?: CategoryType }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(category?.name || "");

  const [saveCategory] = useMutation(SAVE_CATEGORY, {
    refetchQueries: [GET_CATEGORIES],
  });

  const handleCategorySave = () => {
    saveCategory({
      variables: { category: { _id: category?._id, name: value } },
    });
    setValue("");
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
