import { gql } from "@apollo/client";

export const SAVE_EXPENSE = gql`
  mutation SaveExpense($expense: ExpenseInput) {
    saveExpense(expense: $expense)
  }
`;
