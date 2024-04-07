import ContentContainer from "../common/ContentContainer";
import Category from "./Category";

const Categories = () => {
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
      <Category />
    </ContentContainer>
  );
};

export default Categories;
