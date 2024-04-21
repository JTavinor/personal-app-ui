import { QueryResult, useQuery } from "@apollo/client";
import { GET_WEIGHT_CHART_DATA, GetWeightChartData } from "./queries";
import ContentContainer from "../../common/ContentContainer";
import LineChart from "../../common/Charts/LineChart";

const WeightStats = () => {
  const { data }: QueryResult<GetWeightChartData> = useQuery(
    GET_WEIGHT_CHART_DATA,
  );

  if (!data) return null;

  console.log("data.weightsChart", data.weightsChart);
  return (
    <ContentContainer>
      <LineChart data={data.weightsChart} />
    </ContentContainer>
  );
};

export default WeightStats;
