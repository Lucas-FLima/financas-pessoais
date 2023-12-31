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
  ActivityIndicator,
} from 'react-native';

import {useForm, Controller} from 'react-hook-form';

import {useNavigationStackTyped} from '../../hooks/navigation';

import Logo from '../../assets/icons/Logo.svg';
import CustomInput from '../../components/CustomInput';

import {useAuth} from '../../contexts/Auth';

type Form = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignUp() {
  const {signUp, loadingAuth} = useAuth();
  const navigation = useNavigationStackTyped();
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<Form>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: Form) => {
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
        style={styles.containerKeyboardAvoidingView}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.container}>
            <Logo width={200} height={200} stroke={'#00B94A'} />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              name="name"
              render={({field: {onChange, value}}) => (
                <CustomInput
                  label="Nome completo"
                  placeholder="ex: João da Silva"
                  placeholderTextColor={'#D0D0D0'}
                  value={value}
                  onChangeText={onChange}
                  autoCorrect={false}
                />
              )}
            />
            {errors.name && <Text>Nome é obrigatório</Text>}
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              name="email"
              render={({field: {onChange, value}}) => (
                <CustomInput
                  label="Email"
                  placeholder="ex: "
                  placeholderTextColor={'#D0D0D0'}
                  value={value}
                  onChangeText={onChange}
                  autoCorrect={false}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              )}
            />
            {errors.email && <Text>Email é obrigatório</Text>}
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              name="password"
              render={({field: {onChange, value}}) => (
                <CustomInput
                  label="Senha"
                  placeholder="********"
                  placeholderTextColor={'#D0D0D0'}
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry={isPasswordVisible}
                  isPassword={true}
                  togglePasswordVisibility={() =>
                    setIsPasswordVisible(!isPasswordVisible)
                  }
                />
              )}
            />
            {errors.password && <Text>Senha é obrigatório</Text>}
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              name="confirmPassword"
              render={({field: {onChange, value}}) => (
                <CustomInput
                  label="Confirmar senha"
                  placeholder="********"
                  placeholderTextColor={'#D0D0D0'}
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry={isPasswordVisible}
                  isPassword={true}
                  togglePasswordVisibility={() =>
                    setIsPasswordVisible(!isPasswordVisible)
                  }
                />
              )}
            />
            {errors.confirmPassword && (
              <Text>Confirmar senha é obrigatório</Text>
            )}
            <TouchableOpacity
              style={styles.signInButton}
              activeOpacity={0.7}
              onPress={handleSubmit(onSubmit)}
              disabled={loadingAuth}>
              {loadingAuth ? (
                <ActivityIndicator color={'#FFF'} />
              ) : (
                <Text style={styles.textButton}>Criar conta</Text>
              )}
            </TouchableOpacity>
            <View style={styles.containerSignUpButton}>
              <Text style={styles.textInfoSignUp}>Já possuo conta! </Text>
              <TouchableOpacity
                style={{paddingVertical: 5}}
                onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.textButtonSignUp}>Voltar</Text>
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
    gap: 15,
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
