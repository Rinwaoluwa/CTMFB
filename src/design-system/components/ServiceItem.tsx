import Icon from "../../assets/svgs/icon";
import { IconName, IconProps } from "../../assets/svgs/types";
import { getComputedHeight, getComputedWidth } from "../layout/responsive";
import Box from "./Box";
import Text from "./Text";

function ServiceItem({
  name,
  bgColor = "lightGreen",
  title,
}: {
  name: IconName;
  bgColor: any;
  title: string;
}) {
  return (
    <Box alignItems="center">
      <Box
        backgroundColor={bgColor}
        height={getComputedHeight(60)}
        width={getComputedWidth(60)}
        justifyContent="center"
        alignItems="center"
        borderRadius="space-8"
      >
        <Icon name={name} size={30} />
      </Box>
      <Text color="black" variant='subtext-regular' textAlign='center' marginTop='space-8'>{title}</Text>
    </Box>
  );
}

export default ServiceItem;
