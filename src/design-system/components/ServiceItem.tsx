import Icon from "../../assets/svgs/icon";
import { IconName, IconProps } from "../../assets/svgs/types";
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
        height={80}
        width={80}
        justifyContent="center"
        alignItems="center"
        borderRadius="space-8"
      >
        <Icon name={name} size={30} />
      </Box>
      <Text color="black" variant='subtext-regular'>{title}</Text>
    </Box>
  );
}

export default ServiceItem;
