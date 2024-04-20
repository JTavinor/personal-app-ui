import React from "react";
import InputField from "../Inputs/InputField";
import InputTypeEnums from "../../enums/InputTypeEnums";
import Select from "../Inputs/Select";
import { HorizontalFlexWrapper } from "../../styles/formatWrappers";

export interface FormItem {
  [key: string]: number | string; // Assuming values are either numbers or strings
}

interface HorizontalRowFormRowProps {
  setFormItems: React.Dispatch<React.SetStateAction<FormItem[]>>;
  rowNum: number;
  fieldValues: FormItem;
  rowConfig: {
    inputType: string;
    label: string;
    fieldName: string;
    selectOptions?: {
      value: string;
      label: string;
    }[];
  }[];
}

const HorizontalRowFormRow: React.FC<HorizontalRowFormRowProps> = ({
  setFormItems,
  rowNum,
  fieldValues,
  rowConfig,
}: HorizontalRowFormRowProps) => {
  return (
    <HorizontalFlexWrapper>
      {rowConfig.map((field, index) => {
        if (field.inputType === InputTypeEnums.NUMBER) {
          return (
            <InputField
              key={index}
              label={field.label}
              value={fieldValues[field.fieldName]}
              onChange={(newValue) =>
                setFormItems((prevFormItems: FormItem[]) => {
                  const updatedFormItems = prevFormItems.map((item, idx) => {
                    return idx === rowNum - 1
                      ? { ...item, [field.fieldName]: Number(newValue) }
                      : item;
                  });
                  return updatedFormItems;
                })
              }
              type="number"
            />
          );
        }
        if (field.inputType === InputTypeEnums.INPUT) {
          return (
            <InputField
              key={index}
              label={field.label}
              value={fieldValues[field.fieldName]}
              onChange={(newValue) =>
                setFormItems((prevFormItems: FormItem[]) => {
                  const updatedFormItems = prevFormItems.map((item, idx) =>
                    idx === rowNum - 1
                      ? { ...item, [field.fieldName]: newValue }
                      : item
                  );
                  return updatedFormItems;
                })
              }
            />
          );
        }

        if (field.inputType === InputTypeEnums.SELECT) {
          return (
            <Select
              key={index}
              label={field.label}
              options={field.selectOptions || []}
              onChange={(newValue) =>
                setFormItems((prevFormItems: FormItem[]) => {
                  const updatedFormItems = prevFormItems.map((item, idx) =>
                    idx === rowNum - 1
                      ? { ...item, [field.fieldName]: newValue }
                      : item
                  );
                  return updatedFormItems;
                })
              }
              value={fieldValues[field.fieldName]}
            />
          );
        }

        if (field.inputType === InputTypeEnums.DATE) {
          return (
            <input
              key={index}
              type="date"
              onChange={(e) =>
                setFormItems((prevFormItems: FormItem[]) => {
                  const updatedFormItems = prevFormItems.map((item, idx) =>
                    idx === rowNum - 1
                      ? { ...item, [field.fieldName]: e.target.value }
                      : item
                  );
                  return updatedFormItems;
                })
              }
            />
          );
        }

        return null;
      })}
    </HorizontalFlexWrapper>
  );
};

export default HorizontalRowFormRow;
