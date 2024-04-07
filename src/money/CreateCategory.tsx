import ContentContainer from "../common/ContentContainer";
import InputField from "../common/InputField";

const CreateCategory = () => {
  return (
    <ContentContainer>
      <InputField label="Category:" placeholder="Enter new category..." />
    </ContentContainer>
  );
};

export default CreateCategory;
