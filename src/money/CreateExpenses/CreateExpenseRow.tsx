import { useState } from "react";
import InputField from "../../common/InputField";
import Select, { SelectOptions } from "../../common/Select";
import { CreateExpensesRowWrapper } from "./styles";

const CreateExpenseRow = ({
  categoryOptions,
}: {
  categoryOptions: SelectOptions[];
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
