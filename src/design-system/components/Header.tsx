import { Image, StyleSheet } from "react-native";
import Box from "./Box";
import { getComputedHeight, getComputedWidth } from "../layout/responsive";
import Icon from "../../assets/svgs/icon";
import Text from "./Text";

function Header() {
  return (
    <Box
      marginHorizontal="space-24"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      marginTop='space-16'
    >
      <Box flexDirection="row" gap="space-8">
        <Box style={styles.rating}>
          <Icon name="star" size={10} />
          <Text variant="caption-medium">2</Text>
        </Box>
        <Image
          source={require("../../assets/images/user-image.png")}
          style={{
            height: getComputedHeight(50),
            width: getComputedWidth(50),
            borderRadius: 25,
          }}
        />

        <Box>
          <Text color="black">Hi, Damilare</Text>
          <Text color="grey" variant="subtext-regular">
            How are you today?
          </Text>
        </Box>
      </Box>

      <Box flexDirection="row" gap="space-16">
        <Icon name="moon" />
        <Icon name="bell" />
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  rating: {
    position: "absolute",
    top: -15,
    left: getComputedWidth(26, 300),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFD983",
    borderRadius: 15,
    height: 30,
    width: 30,
    zIndex: 10,
  },
});

export default Header;
