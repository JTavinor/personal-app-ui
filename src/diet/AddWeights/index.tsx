import HorizontalRowForm from "../../common/HorizontalRowForm";
import InputTypeEnums from "../../enums/InputTypeEnums";
import { SAVE_WEIGHTS } from "./mutations";

const AddWeights = () => {
  return (
    <HorizontalRowForm
      rowConfig={[
        {
          inputType: InputTypeEnums.NUMBER,
          label: "Weight",
          fieldName: "weight",
        },
        {
          inputType: InputTypeEnums.DATE,
          label: "Date",
          fieldName: "date",
        },
      ]}
      mutation={SAVE_WEIGHTS}
      mutationVariableName="weights"
    />
  );
};

export default AddWeights;
