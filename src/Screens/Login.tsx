import Box from "../design-system/components/Box";
import { FLEX } from "../utils/constants";
import { Button } from "../design-system/components/button/button";
import {
  getComputedHeight,
  getComputedWidth,
} from "../design-system/layout/responsive";
import Text from "../design-system/components/Text";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Login() {
    const [hidePassword, setHidePassword] = useState(true);
    // const {control, handleSubmit, formState: {errors}, setError, getValues} = useForm<SignInFormValues>({
    //     defaultValues: {
    //       email: '',
    //       password: '',
    //     },
    //     mode: 'onSubmit',
    //     resolver: zodResolver(sigin),
    //   });

  return (
    <Box
      style={[FLEX, { backgroundColor: "white" }]}
      marginHorizontal="space-24"
    >
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
        marginTop="space-32"
        style={{width: getComputedWidth(250)}}
    >
        We are glad to have you, kindly enter your login details.
      </Text>
    </Box>
  );
}

export default Login;
