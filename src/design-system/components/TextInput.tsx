import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {
  View,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Text from './Text';
import {TextInput as RNPaperTextInput} from 'react-native-paper';

interface TextInputProps extends Omit<RNTextInputProps, 'onBlur' | 'onFocus'> {
  label: string;
  name: string;
  error?: string;
  placeholder?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  control: Control<any, any>;
  editable?: boolean;
  onPress?: Function;
  onFocus?: Function;
  onBlur?: Function;
  multiline?: boolean;
  numberOfLines?: number;
  secureTextEntry?: boolean;
  style?: TextStyle;
  containerStyle?: ViewStyle;
}

export const TextInput = ({
  error,
  onBlur: pureOnBlur,
  onFocus,
  ...props
}: TextInputProps) => {


  return (
    <View style={[styles.textInputContainer]}>
      <Controller
        control={props.control}
        render={({field: {onChange, onBlur, value}}) => (
          <RNPaperTextInput
            mode="outlined"
            value={value}
            onChangeText={onChange}
            onBlur={() => (pureOnBlur ? pureOnBlur(onBlur) : onBlur())}
            left={props.left}
            right={props.right}
            outlineColor={!error ? "#666666" : "red"}
            textColor="grey"
            error={!!error}
            onFocus={() => onFocus?.()}
            autoCapitalize="none"
            activeOutlineColor='green'
            editable={props?.editable}
            style={props.containerStyle}
            onPressIn={() => props.onPress?.()}
            {...props}
          />
        )}
        name={props.name}
      />
      {error ? <Text variant="error" marginTop='space-8'>{error}</Text> : null}
    </View>
  );
};


const styles = StyleSheet.create({
  textInputContainer: {
    marginVertical: 8,
  },
});
