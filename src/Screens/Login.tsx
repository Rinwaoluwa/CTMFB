import { useState } from "react";
import { useForm } from "react-hook-form";
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

function Login() {
  const [hidePassword, setHidePassword] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(login),
  });

  return (
    <Box style={FLEX} marginHorizontal="space-24">
      <Button
        title="Cancel"
        backgroundColor="white"
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
        value="+234 809 531 6411"
        control={control}
        label="Phone Number*"
        placeholder="+234 809 531 6411"
        error={errors.email?.message}
        name="phone"
        textContentType="telephoneNumber"
        keyboardType="phone-pad"
      />

      <Box marginVertical="space-12" />

      <TextInput
        value="aaabbbccc"
        control={control}
        label="Your Password"
        placeholder="Password"
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

      <Button title="Login" backgroundColor="green" />

      <Box marginVertical="space-20" alignItems="center" gap="space-16">
        <Text color="green">Don’t have an account? Sign up</Text>
        <Text color="grey">Forgot Password?</Text>
        <Icon name="biometrics" size={50} />
      </Box>
      <Box marginVertical="space-64" alignItems="center">
        <Text color="grey">v1.1.1</Text>
      </Box>
    </Box>
  );
}

export default Login;
