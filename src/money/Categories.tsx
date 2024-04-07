import { useState } from "react";
import ContentContainer from "../common/ContentContainer";
import InputField from "../common/InputField";
import Button from "../common/Button";
import Category from "./Category";

const Categories = () => {
  const [category, setCategory] = useState("");

  const categories = [
    {
      name: "Food",
      _id: "1",
    },
    {
      name: "Eating Out",
      _id: "2",
    },
    {
      name: "Bills",
      _id: "3",
    },
  ];

  return (
    <ContentContainer>
      {categories.map((cat) => (
        <Category category={cat} key={cat.name} />
      ))}
      <InputField
        label="Category:"
        placeholder="Enter new category..."
        onChange={setCategory}
      />
      <Button onClick={() => console.log(category)}>Save</Button>
    </ContentContainer>
  );
};

export default Categories;
