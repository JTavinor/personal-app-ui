import { useState } from "react";
import { generateArray } from "../../utils/numberUtils";
import Button from "../Button";
import HorizontalRowFormRow, { FormItem } from "./HorizontalRowFormRow";
import { HorizontalFlexWrapper } from "../../styles/formatWrappers";
import { DocumentNode, useMutation } from "@apollo/client";
import spacing from "../../styles/spacing";

const HorizontalRowForm = ({
  rowConfig,
  mutationVariableName,
  mutation,
}: {
  rowConfig: {
    inputType: string;
    label: string;
    fieldName: string;
    selectOptions?: {
      value: string;
      label: string;
    }[];
  }[];
  mutationVariableName: string;
  mutation: DocumentNode;
}) => {
  const [formItems, setFormItems] = useState<FormItem[]>([{}]);
  const [numRows, setNumRows] = useState(1);

  const [saveForm] = useMutation(mutation);

  console.log("formItems", typeof formItems[0].weight);

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
            setFormItems((prevFormItems) => [...prevFormItems, {}]);
          }}
        >
          Add Row
        </Button>
        <Button
          onClick={() => {
            saveForm({ variables: { [mutationVariableName]: formItems } });
          }}
        >
          Save
        </Button>
      </HorizontalFlexWrapper>
    </div>
  );
};

export default HorizontalRowForm;
