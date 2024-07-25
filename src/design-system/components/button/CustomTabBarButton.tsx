import { StyleSheet, TouchableOpacity } from "react-native";
import Box from "../Box";
import { ReactNode } from "react";
import { getComputedHeight, getComputedWidth } from "../../layout/responsive";
import Icon from "../../../assets/svgs/icon";


function CustomTabBarButton() {
  return (
    <TouchableOpacity style={styles.root}>
      <Box
        height={getComputedHeight(60)}
        width={getComputedWidth(60)}
        backgroundColor="green"
        borderRadius='space-40'
        justifyContent='center'
        alignItems='center'
      >
        <Icon name="send" size={30} />
      </Box>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomTabBarButton;
