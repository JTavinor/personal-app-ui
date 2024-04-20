import { useState } from "react";
import InputField from "../../common/Inputs/InputField";
import Select from "../../common/Inputs/Select";
import { CreateExpensesRowWrapper } from "./styles";
import { SelectOption } from "../../common/Inputs/inputs";
import IconButton from "../../common/IconButton";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import { SAVE_EXPENSE } from "./mutations";
import { useMutation } from "@apollo/client";

const CreateExpenseRow = ({
  categoryOptions,
}: {
  categoryOptions: SelectOption[];
}) => {
  const [newExpense, setNewExpense] = useState({
    name: "",
    value: 0,
    category: "",
    date: "",
  });

  const [saveExpense] = useMutation(SAVE_EXPENSE);

  return (
    <CreateExpensesRowWrapper>
      <InputField
        label="Expense Name"
        value={newExpense.name}
        onChange={(newValue) =>
          setNewExpense({ ...newExpense, name: newValue })
        }
      />
      <InputField
        label="Total"
        value={newExpense.value}
        onChange={(newValue) =>
          setNewExpense({ ...newExpense, value: Number(newValue) })
        }
        type="number"
      />
      <Select
        label="Category"
        options={categoryOptions}
        onChange={(newValue) =>
          setNewExpense({ ...newExpense, category: newValue })
        }
        value={newExpense.category}
      />
      <input
        type="date"
        onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
      />
      <IconButton
        onClick={() => {
          saveExpense({ variables: { expense: newExpense } });
        }}
        icon={faSave}
      />
    </CreateExpensesRowWrapper>
  );
};

export default CreateExpenseRow;
