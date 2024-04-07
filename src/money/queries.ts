import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
      _id
    }
  }
`;

export interface CategoryType {
  name: string;
  _id: string;
}

export interface GetCategoriesData {
  categories: CategoryType[];
}
