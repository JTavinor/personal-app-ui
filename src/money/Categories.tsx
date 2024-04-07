import { QueryResult, useQuery } from "@apollo/client";
import ContentContainer from "../common/ContentContainer";
import Category from "./Category";
import { GET_CATEGORIES, GetCategoriesData } from "./queries";

const Categories = () => {
  const { data }: QueryResult<GetCategoriesData> = useQuery(GET_CATEGORIES);

  return (
    <ContentContainer>
      {data?.categories.map((cat) => (
        <Category category={cat} key={cat.name} />
      ))}
      <Category />
    </ContentContainer>
  );
};

export default Categories;
