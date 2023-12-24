import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import Logo from '../../assets/icons/Logo.svg';
import Olho from '../../assets/icons/Eye.svg';
import OlhoFechado from '../../assets/icons/EyeOff.svg';

type Form = {
  email: string;
  password: string;
};

export default function SignIn() {
  const [form, setForm] = useState<Form>({
    email: '',
    password: '',
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F0F4FF'}}>
      <View style={styles.container}>
        <Logo width={200} height={200} stroke={'#00B94A'} />
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="email@email.com"
            placeholderTextColor={'#D0D0D0'}
            value={form.email}
            onChangeText={email => setForm({...form, email})}
            onFocus={() => {
              console.log('focus');
            }}
            autoCorrect={false}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 12,
              backgroundColor: '#FFF',
              paddingHorizontal: 16,
              justifyContent: 'center',
              width: '100%',
            }}>
            <TextInput
              style={styles.inputSenha}
              placeholder="********"
              placeholderTextColor={'#D0D0D0'}
              value={form.password}
              onChangeText={password => setForm({...form, password})}
              onFocus={() => {
                console.log('focus');
              }}
              autoCorrect={false}
              secureTextEntry={isPasswordVisible}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordVisible(prev => !prev)}>
              {isPasswordVisible ? (
                <Olho width={24} height={24} stroke={'#D0D0D0'} />
              ) : (
                <OlhoFechado width={24} height={24} stroke={'#D0D0D0'} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Text style={{color: '#171717', fontSize: 16}}>
            Não tenho conta.{' '}
          </Text>
          <TouchableOpacity>
            <Text style={{color: '#00B94A', fontSize: 16, fontWeight: '600'}}>
              Criar conta!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  inputArea: {
    width: '100%',
  },
  inputLabel: {
    color: '#171717',
    fontSize: 16,
    fontWeight: '500',
  },
  inputSenha: {
    flex: 1,
    fontSize: 16,
  },
  input: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    borderRadius: 10,
    justifyContent: 'center',
    width: '100%',
    color: '#171717',
    fontSize: 16,
    lineHeight: 24,
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
  signUpButton: {
    backgroundColor: '#006729',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
