import HorizontalRowForm from "../../common/HorizontalRowForm";
import InputTypeEnums from "../../enums/InputTypeEnums";

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
    />
  );
};

export default AddWeights;
