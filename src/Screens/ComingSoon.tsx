import { ImageBackground } from "react-native";
import { FLEX } from "../utils/constants";

function ComingSoon() {
  return (
    <ImageBackground
      source={require("../assets/images/coming-soon-img.png")}
      style={FLEX}
    />
  );
}

export default ComingSoon;
