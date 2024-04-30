import { QueryResult, useQuery } from "@apollo/client";
import { GET_WEIGHT_CHART_DATA, GetWeightChartData } from "./queries";
import ContentContainer from "../../common/ContentContainer";
import LineChart from "../../common/Charts/LineChart";
import spacing from "../../styles/spacing";
import WeightDataPoint from "./WeightDataPoint";

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
        <WeightDataPoint
          title="Initial Weight"
          data={data.weightsStats.initialWeight}
        />
        <WeightDataPoint
          title="7 Day Average"
          data={data.weightsStats.lastSevenDayAverage}
        />
        <WeightDataPoint
          title="Weight change"
          data={Number(
            (
              data.weightsStats.initialWeight -
              data.weightsStats.lastSevenDayAverage
            ).toFixed(2)
          )}
        />
        <WeightDataPoint
          title="Weight change per week"
          data={(
            (Number(
              (
                data.weightsStats.initialWeight -
                data.weightsStats.lastSevenDayAverage
              ).toFixed(2)
            ) *
              -1) /
            (data.weightsChart[0].data.length / 7)
          ).toFixed(2)}
        />
      </ContentContainer>
      <ContentContainer>
        <LineChart data={data.weightsChart} />
      </ContentContainer>
    </div>
  );
};

export default WeightStats;
