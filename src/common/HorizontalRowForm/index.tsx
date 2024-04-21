import { useState } from "react";
import { generateArray } from "../../utils/numberUtils";
import Button from "../Button";
import HorizontalRowFormRow, { FormItem } from "./HorizontalRowFormRow";
import { HorizontalFlexWrapper } from "../../styles/formatWrappers";
import { DocumentNode, useMutation } from "@apollo/client";
import spacing from "../../styles/spacing";
import {
  addDefaultsToInitialEntry,
  isSaveButtonDisabled,
} from "./horizontalRowFormHelper";

const HorizontalRowForm = ({
  rowConfig,
  mutationVariableName,
  mutation,
}: {
  rowConfig: {
    inputType: string;
    label: string;
    fieldName: string;
    isRequired?: boolean;
    default?: string | number;
    selectOptions?: {
      value: string;
      label: string;
    }[];
  }[];
  mutationVariableName: string;
  mutation: DocumentNode;
}) => {
  const [formItems, setFormItems] = useState<FormItem[]>([
    addDefaultsToInitialEntry(rowConfig),
  ]);
  const [numRows, setNumRows] = useState(1);

  const [saveForm] = useMutation(mutation, {
    onCompleted: () => {
      setNumRows(1);
      setFormItems([addDefaultsToInitialEntry(rowConfig)]);
    },
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: spacing.STANDARD,
      }}
    >
      {generateArray(numRows).map((rowNum) => (
        <HorizontalRowFormRow
          setFormItems={setFormItems}
          rowNum={rowNum}
          key={rowNum}
          fieldValues={formItems[rowNum - 1]}
          rowConfig={rowConfig}
        />
      ))}
      <HorizontalFlexWrapper>
        <Button
          onClick={() => {
            setNumRows((prevNumRows) => prevNumRows + 1);
            setFormItems((prevFormItems) => [
              ...prevFormItems,
              addDefaultsToInitialEntry(rowConfig),
            ]);
          }}
        >
          Add Row
        </Button>
        <Button
          onClick={() => {
            saveForm({ variables: { [mutationVariableName]: formItems } });
          }}
          disabled={isSaveButtonDisabled({ formItems, rowConfig })}
        >
          Save
        </Button>
      </HorizontalFlexWrapper>
    </div>
  );
};

export default HorizontalRowForm;
