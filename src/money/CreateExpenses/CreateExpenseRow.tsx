import { useState } from "react";
import InputField from "../../common/Inputs/InputField";
import Select from "../../common/Inputs/Select";
import { CreateExpensesRowWrapper } from "./styles";
import { SelectOption } from "../../common/Inputs/inputs";

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
    </CreateExpensesRowWrapper>
  );
};

export default CreateExpenseRow;
