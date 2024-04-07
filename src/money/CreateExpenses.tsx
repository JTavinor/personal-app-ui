import ContentContainer from "../common/ContentContainer";
import { QueryResult, useQuery } from "@apollo/client";
import { GET_CATEGORIES, GetCategoriesData } from "./queries";
import CreateExpenseRow from "./CreateExpenses/CreateExpenseRow";

const CreateExpenses = () => {
  const { data }: QueryResult<GetCategoriesData> = useQuery(GET_CATEGORIES);

  if (!data) return null;

  const categoryOptions = data.categories.map((cat) => ({
    value: cat._id,
    label: cat.name,
  }));

  return (
    <ContentContainer>
      <CreateExpenseRow categoryOptions={categoryOptions} />
    </ContentContainer>
  );
};

export default CreateExpenses;
