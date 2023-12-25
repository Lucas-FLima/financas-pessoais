import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigationStackTyped} from '../../hooks/navigation';

import Logo from '../../assets/icons/Logo.svg';
import CustomInput from '../../components/CustomInput';

type Form = {
  email: string;
  password: string;
};

export default function SignIn() {
  const navigation = useNavigationStackTyped();
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [form, setForm] = useState<Form>({
    email: '',
    password: '',
  });

  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
        style={styles.containerKeyboardAvoidingView}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.container}>
            <Logo width={200} height={200} stroke={'#00B94A'} />
            <CustomInput
              label="Email"
              placeholder="email@email.com"
              placeholderTextColor={'#D0D0D0'}
              value={form.email}
              onChangeText={email => setForm({...form, email})}
              autoCorrect={false}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <CustomInput
              label="Senha"
              placeholder="********"
              placeholderTextColor={'#D0D0D0'}
              value={form.password}
              onChangeText={password => setForm({...form, password})}
              secureTextEntry={isPasswordVisible}
              isPassword={true}
              togglePasswordVisibility={() =>
                setIsPasswordVisible(!isPasswordVisible)
              }
            />
            <TouchableOpacity style={styles.signInButton} activeOpacity={0.7}>
              <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
            <View style={styles.containerSignUpButton}>
              <Text style={styles.textInfoSignUp}>Não tenho uma conta! </Text>
              <TouchableOpacity
                style={{paddingVertical: 5}}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.textButtonSignUp}>Criar conta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
    backgroundColor: '#F0F4FF',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  containerKeyboardAvoidingView: {
    flex: 1,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: 'center',
    gap: 20,
  },
  signInButton: {
    backgroundColor: '#00B94A',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '100%',
  },
  textButton: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
  containerSignUpButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  textInfoSignUp: {
    color: '#171717',
    fontSize: 16,
  },
  textButtonSignUp: {
    color: '#00B94A',
    fontSize: 16,
    fontWeight: '600',
  },
});
