import { FormItem } from "./HorizontalRowFormRow";

export const isSaveButtonDisabled = ({
  formItems,
  rowConfig,
}: {
  formItems: FormItem[];
  rowConfig: {
    inputType: string;
    label: string;
    fieldName: string;
    isRequired?: boolean;
    selectOptions?: {
      value: string;
      label: string;
    }[];
  }[];
}) => {
  let isDisabled = false;

  rowConfig.forEach((field) => {
    formItems.forEach((entry) => {
      if (field.isRequired && entry[field.fieldName] == null) isDisabled = true;
    });
  });

  return isDisabled;
};
