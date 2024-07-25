import { Image, StyleSheet } from "react-native";
import Box from "./Box";
import { getComputedHeight, getComputedWidth } from "../layout/responsive";
import Icon from "../../assets/svgs/icon";
import Text from "./Text";

function Header() {
    return (
        <Box flexDirection='row' justifyContent='space-between' alignItems='center'>
            <Box flexDirection='row' gap='space-8'>
                <Box style={styles.rating}>
                    <Icon name="star" size={15} />
                    <Text variant='caption-medium'>2</Text>
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
                    <Text color='black'>Hi, Damilare</Text>
                    <Text color='grey' variant='subtext-regular'>How are you today?</Text>
                </Box>
            </Box>

            <Box flexDirection='row' gap='space-16'>
                <Icon name='moon' />
                <Icon name='bell' />
            </Box>
        </Box>
    )
};

const styles = StyleSheet.create({
    rating: {
        position: "absolute",
        top: -15,
        left: getComputedWidth(25, 300),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFD983',
        borderRadius: 50,
        height: 30,
        width: 30,
        zIndex: 10,
    }
});

export default Header;