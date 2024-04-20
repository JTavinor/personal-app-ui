import { useState } from "react";
import { generateArray } from "../../utils/numberUtils";
import Button from "../Button";
import HorizontalRowFormRow, { FormItem } from "./HorizontalRowFormRow";

const HorizontalRowForm = ({
  rowConfig,
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
}) => {
  const [formItems, setFormItems] = useState<FormItem[]>([{}]);
  const [numRows, setNumRows] = useState(1);

  console.log("numRows", numRows);

  return (
    <div>
      {generateArray(numRows).map((rowNum) => (
        <HorizontalRowFormRow
          setFormItems={setFormItems}
          rowNum={rowNum}
          key={rowNum}
          fieldValues={formItems[numRows - 1]}
          rowConfig={rowConfig}
        />
      ))}
      <Button
        onClick={() => {
          setNumRows((prevNumRows) => prevNumRows + 1);
          setFormItems((prevFormItems) => [...prevFormItems, {}]);
        }}
      >
        Add Row
      </Button>
    </div>
  );
};

export default HorizontalRowForm;
