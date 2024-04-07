import { gql } from "@apollo/client";

export const SAVE_CATEGORY = gql`
  mutation SaveCategory($category: CategoryInput) {
    saveCategory(category: $category)
  }
`;
