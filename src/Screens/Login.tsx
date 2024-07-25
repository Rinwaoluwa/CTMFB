import { useState } from "react";
import { ScrollView } from "react-native";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Box from "../design-system/components/Box";
import { FLEX } from "../utils/constants";
import { Button } from "../design-system/components/button/button";
import {
  getComputedHeight,
  getComputedWidth,
} from "../design-system/layout/responsive";
import Text from "../design-system/components/Text";
import { login, LoginFormValues } from "../utils/schema";
import { TextInput } from "../design-system/components/TextInput";
import { TextInput as RNPaperTextInput } from "react-native-paper";
import Icon from "../assets/svgs/icon";
import { useAppDispatch, useAppSelector } from "../utils/redux/hooks";
import { RootState } from "../utils/redux/store";
import { setIsAuthenticated } from "../utils/redux/slices/auth-tracker";

function Login({ navigation }: any) {
  const dispatch = useAppDispatch();
  const { phoneNumber, password } = useAppSelector(
    (state: RootState) => state.profile
  );
  const [hidePassword, setHidePassword] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<LoginFormValues>({
    defaultValues: {
      phoneNumber: '0123456789',
      password: 'aaabbbccc',
    },
    mode: "onSubmit",
    resolver: zodResolver(login),
  });

  const onSubmit: SubmitErrorHandler<LoginFormValues> = (data) => {
    try {
      // Simulates user entering incorrect password with known phone number,
      // redirecting to SignInError Screen.
      if (data.phoneNumber === phoneNumber && data.password !== password) {
        navigation.navigate("Error");
        return;
      }

      if (data.phoneNumber !== phoneNumber) {
        setError("phoneNumber", {
          type: "custom",
          message: "Invalid phone number",
        });
        return;
      }

      dispatch(setIsAuthenticated(true));
      reset();
    } catch (error: { name: string; message: string }) {
      setError(error?.name, {
        type: "custom",
        message: error?.message,
      });
    }
  };

  return (
    <ScrollView>
      <Box style={FLEX} marginHorizontal="space-24">
        <Button
          title="Cancel"
          backgroundColor="transparent"
          color="green"
          style={{
            borderWidth: 1.5,
            borderColor: "green",
            width: getComputedWidth(100),
            marginTop: getComputedHeight(50),
          }}
        />
        <Text color="green" variant="heading-2" marginTop="space-32">
          Login to your account
        </Text>
        <Text
          color="grey"
          variant="subtext-regular"
          marginVertical="space-32"
          style={{ width: getComputedWidth(250) }}
        >
          We are glad to have you, kindly enter your login details.
        </Text>

        <TextInput
          // value="+2348095316411"
          control={control}
          label="Phone Number*"
          placeholder="0123456789"
          error={errors.phoneNumber?.message}
          name="phoneNumber"
          textContentType="telephoneNumber"
          keyboardType="phone-pad"
        />

        <Box marginVertical="space-12" />

        <TextInput
          control={control}
          label="Your Password"
          placeholder="aaabbbccc"
          error={errors.password?.message}
          name="password"
          textContentType="password"
          secureTextEntry={hidePassword}
          right={
            <RNPaperTextInput.Icon
              onPress={() => setHidePassword(!hidePassword)}
              icon={hidePassword ? "eye-off-outline" : "eye-outline"}
            />
          }
        />

        <Box marginVertical="space-20" />

        <Button
          title="Login"
          backgroundColor="green"
          onPress={handleSubmit(onSubmit)}
        />

        <Box marginVertical="space-20" alignItems="center" gap="space-16">
          <Text color="green">Don’t have an account? Sign up</Text>
          <Text color="grey">Forgot Password?</Text>
          <Icon name="biometrics" size={50} />
        </Box>
        <Box marginVertical="space-64" alignItems="center">
          <Text color="grey">v1.1.1</Text>
        </Box>
      </Box>
    </ScrollView>
  );
}

export default Login;
