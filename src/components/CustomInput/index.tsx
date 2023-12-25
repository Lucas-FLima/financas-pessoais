import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import Olho from '../../assets/icons/Eye.svg';
import OlhoFechado from '../../assets/icons/EyeOff.svg';

interface CustomInputProps extends TextInputProps {
  label?: string;
  isPassword?: boolean;
  togglePasswordVisibility?: () => void;
}

export default function CustomInput({
  label,
  isPassword = false,
  secureTextEntry = false,
  togglePasswordVisibility,
  ...otherProps
}: CustomInputProps) {
  return (
    <View style={styles.inputArea}>
      {label && <Text style={styles.inputLabel}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          secureTextEntry={isPassword ? secureTextEntry : false}
          {...otherProps}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.icon}>
            {secureTextEntry ? (
              <OlhoFechado width={24} height={24} stroke={'#D0D0D0'} />
            ) : (
              <Olho width={24} height={24} stroke={'#D0D0D0'} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputArea: {
    width: '100%',
    gap: 8,
  },
  inputLabel: {
    color: '#171717',
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    width: '100%',
    color: '#171717',
    fontSize: 16,
    lineHeight: 24,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 16,
  },
  icon: {
    marginLeft: 10,
  },
});
