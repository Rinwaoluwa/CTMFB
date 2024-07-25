import { useEffect, useState } from "react";
import * as Clipboard from "expo-clipboard";
import Icon from "../../assets/svgs/icon";
import Box from "./Box";
import Text from "./Text";
import { Switch } from "react-native-paper";
import { getComputedHeight, getComputedWidth } from "../layout/responsive";
import { useAppDispatch, useAppSelector } from "../../utils/redux/hooks";
import { RootState } from "../../utils/redux/store";
import { setHideBalance } from "../../utils/redux/slices/profile";
import { StyleSheet, TouchableOpacity } from "react-native";
import { position } from "@shopify/restyle";

interface IProps {
  accountType: string;
  balance: string;
  accountName: string;
  accountNumber: string;
  opacity: number;
}

function Card({
  accountName = "Adewole Damilare",
  accountNumber = "2040011238",
  accountType = "Savings Account Balance",
  balance = "NGN102,238.71",
  opacity,
}: IProps) {
  const dispatch = useAppDispatch();
  const { hideBalance } = useAppSelector((state: RootState) => state.profile);
  const [isSwitchOn, setIsSwitchOn] = useState(hideBalance);
  const [textCopied, setTextCopied] = useState(false); // !! CHANE TO FALSE ERR11

  useEffect(() => {
    const removeClipboardSuccessModal = setInterval(
      () => setTextCopied(false),
      1000
    );

    return () => clearInterval(removeClipboardSuccessModal);
  }, [textCopied]);

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    dispatch(setHideBalance(!isSwitchOn));
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(accountNumber);
    setTextCopied(true);
  };

  return (
    <Box
      backgroundColor="green"
      paddingHorizontal="space-20"
      paddingVertical="space-12"
      marginLeft="space-12"
      zIndex={-20}
      overflow="hidden"
      height={getComputedHeight(200)}
      width={getComputedWidth(300)}
      borderRadius="space-8"
      opacity={opacity}
    >
      {/* Account Details */}
      <Box gap="space-12">
        <Text color="white" opacity={0.7} variant="subtext-regular">
          {accountType}
        </Text>
        <Text color="white" variant="heading-2">
          {hideBalance ? "******" : balance}
        </Text>
        <Box marginVertical="space-16" />

        <Text color="white" variant="caption-medium">
          {accountName}
        </Text>

        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
          onPress={copyToClipboard}
        >
          {!textCopied && (
            <Text color="white" variant="caption-medium">
              {accountNumber}
            </Text>
          )}
          <Icon name="clipboard" size={15} />
          {textCopied && (
            <Text
              color="black"
              variant="caption-medium"
              style={styles.clipboardSuccessModal}
            >
              Copied!
            </Text>
          )}
        </TouchableOpacity>
      </Box>

      {/* Toggle Show balance */}
      <Box
        flexDirection="row"
        alignItems="center"
        gap="space-4"
        position="absolute"
        bottom={8}
        right={4}
      >
        <Text color="white" variant="subtext-regular">
          Hide balance
        </Text>
        <Switch
          value={isSwitchOn}
          onValueChange={onToggleSwitch}
          color="#EBEBEB"
        />
      </Box>
      {/* Backgroun Triangles */}
      <Box position="absolute" right={-70} zIndex={-10}>
        <Icon name="triangles" size={250} />
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  clipboardSuccessModal: {
    backgroundColor: "white",
    paddingHorizontal: 4,
    paddingVertical: 6,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: "absolute",
  },
});

export default Card;
