import { gql } from "@apollo/client";

export const SAVE_WEIGHTS = gql`
  mutation SaveWeights($weights: [WeightsInput]) {
    saveWeights(weights: $weights)
  }
`;
