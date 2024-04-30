import { FlexRow } from "../../common/Layout";

const WeightDataPoint = ({
  title,
  data,
  suffix = "kg",
}: {
  title: string;
  data: number | string;
  suffix?: string;
}) => {
  return (
    <FlexRow>
      <h4 style={{ margin: 0 }}>{title + ":"}</h4>
      {data + (suffix ? " " + suffix : "")}
    </FlexRow>
  );
};

export default WeightDataPoint;
