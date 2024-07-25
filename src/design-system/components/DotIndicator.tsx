import { Color } from "../theme/theme";
import Box from "./Box";

function DotIndicator({ bgColor = "grey" }: { bgColor?: Color }) {
  return (
    <Box
      backgroundColor={bgColor}
      height={10}
      width={10}
      borderRadius="space-5"
      marginHorizontal="space-8"
    ></Box>
  );
}

export default DotIndicator;
