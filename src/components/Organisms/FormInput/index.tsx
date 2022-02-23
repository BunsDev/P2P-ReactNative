import React from 'react';
import { TextInputProps, TextInput } from 'react-native';
import { Input } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useStyles } from './styles';

type FormInputType = TextInputProps & {
  icon: string;
  refInput: React.Ref<TextInput>;
  errorMessage: string;
};

const FormInput = (props: FormInputType) => {
  const { icon, refInput, ...otherProps } = props;
  const styles = useStyles();

  return (
    <Input
      {...otherProps}
      ref={refInput}
      inputContainerStyle={styles.inputContainer}
      leftIcon={
        <Icon name={icon} type={'simple-line-icon'} color="#7384B4" size={18} />
      }
      inputStyle={styles.inputStyle}
      autoFocus={false}
      autoCapitalize="none"
      keyboardAppearance="dark"
      errorStyle={styles.errorInputStyle}
      autoCorrect={false}
      blurOnSubmit={false}
      placeholderTextColor="#7384B4"
    />
  );
};

export default FormInput;
