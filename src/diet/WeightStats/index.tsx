import { QueryResult, useQuery } from "@apollo/client";
import { GET_WEIGHT_CHART_DATA, GetWeightChartData } from "./queries";
import ContentContainer from "../../common/ContentContainer";
import LineChart from "../../common/Charts/LineChart";
import spacing from "../../styles/spacing";

const WeightStats = () => {
  const { data }: QueryResult<GetWeightChartData> = useQuery(
    GET_WEIGHT_CHART_DATA
  );

  if (!data) return null;

  console.log("data.weightsChart", data.weightsChart);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: spacing.LARGE }}
    >
      <ContentContainer>
        <h4>7 Day Average:</h4>
        {data.weightsStats
          ? `${data.weightsStats} kg`
          : "No weights provided in last 7 days"}
      </ContentContainer>
      <ContentContainer>
        <LineChart data={data.weightsChart} />
      </ContentContainer>
    </div>
  );
};

export default WeightStats;
