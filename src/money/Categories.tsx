import { useState } from "react";
import ContentContainer from "../common/ContentContainer";
import InputField from "../common/InputField";
import Button from "../common/Button";
import Category from "./Category";
import NewCategory from "./NewCategory";

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
      <NewCategory />
    </ContentContainer>
  );
};

export default Categories;
