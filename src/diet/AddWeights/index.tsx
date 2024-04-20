import ContentContainer from "../../common/ContentContainer";
import HorizontalRowForm from "../../common/HorizontalRowForm";
import InputTypeEnums from "../../enums/InputTypeEnums";
import { SAVE_WEIGHTS } from "./mutations";

const AddWeights = () => {
  return (
    <ContentContainer>
      <HorizontalRowForm
        rowConfig={[
          {
            inputType: InputTypeEnums.NUMBER,
            label: "Weight",
            fieldName: "weight",
            isRequired: true,
          },
          {
            inputType: InputTypeEnums.DATE,
            label: "Date",
            fieldName: "date",
            isRequired: true,
          },
        ]}
        mutation={SAVE_WEIGHTS}
        mutationVariableName="weights"
      />
    </ContentContainer>
  );
};

export default AddWeights;
