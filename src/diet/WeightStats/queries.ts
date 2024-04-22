import { gql } from "@apollo/client";

export const GET_WEIGHT_CHART_DATA = gql`
  query WeightsChart {
    weightsChart {
      id
      data {
        x
        y
      }
    }
    weightsStats
  }
`;

export interface WeightDataPoint {
  x: string;
  y: number;
}

export interface WeightChartData {
  id: string;
  data: WeightDataPoint[];
}

export interface GetWeightChartData {
  weightsChart: WeightChartData[];
  weightsStats: number;
}
