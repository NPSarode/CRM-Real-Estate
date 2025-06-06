import React, { useState } from 'react';
import {
  TextInput,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { router } from 'expo-router';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Screen from '@/components/customs/Layout/Screen';
import { useMutation } from '@tanstack/react-query';
import { login } from '@/service';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutate: onlogin, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      router.replace('drawer')
      alert('Login Success');
    },
    onError: (error) => {
      console.log(error.message)
      alert('Login Failed');
    }
  })

  const handleLogin = () => {
    const obj = {
      "username": "nikhilsarode",
      "password": "Admin@123"
    }
    router.replace('drawer')
    // onlogin(obj)
  };

  return (
    <Screen useKeyboardAvoidingView style={{ width: '100%' }}>
      <ThemedView style={$main}>

        <ThemedView style={$logo}>
          <IconSymbol name="users" color={Colors.dark.primary} size={60} />
        </ThemedView>

        <ThemedText type="title" style={$title}>
          Sign In
        </ThemedText>

        <ThemedView style={$formWrapper}>
          {/* Email Field */}
          <ThemedView style={$inputContainer}>
            <ThemedText style={$label}>Email</ThemedText>
            <TextInput
              style={[$input, $shadow]}
              value={email}
              onChangeText={setEmail}
              placeholder={"Enter your email..."}
              placeholderTextColor={Colors.dark.text.secondary}
              keyboardType="email-address"
              secureTextEntry
            />
          </ThemedView>
          <ThemedView style={$inputContainer}>
            <ThemedText style={$label}>Password</ThemedText>
            <TextInput
              style={[$input, $shadow]}
              value={password}
              onChangeText={setPassword}
              placeholder={"Enter your password..."}
              placeholderTextColor={Colors.dark.text.secondary}
              secureTextEntry
            />
          </ThemedView>
        </ThemedView>

        <Button
          title={isPending ? "Logging..." : "Login"}
          onPress={handleLogin}
          style={[$button, isPending ? { backgroundColor: Colors.dark.tabIconDefault } : {}]}
          rightAccessory={!isPending && <IconSymbol name='chevron.right' color={Colors.dark.text.primary} size={20} />}
          disabled={isPending}
        />
      </ThemedView>
    </Screen>
  );
};

export default Login;

const $main: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  gap: 30,
};

const $logo: ViewStyle = {
  backgroundColor: '#1B223B',
  padding: 10,
  borderRadius: 10,
};

const $title: TextStyle = {
  textAlign: 'center',
  color: Colors.dark.text.primary,
};

const $button: ViewStyle = {
  width: '100%',
  marginTop: 20,
};

const $formWrapper: ViewStyle = {
  width: '100%',
  gap: 20,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
}

const $inputContainer: ViewStyle = {
  width: '100%',
}
const $label: TextStyle = {
  marginBottom: 5,
  color: Colors.dark.text.secondary,
}
const $input: TextStyle = {
  height: 50,
  borderRadius: 10,
  padding: 10,
  backgroundColor: Colors.dark.secondary,
  color: Colors.dark.text.secondary,
}
const $shadow: TextStyle = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 2,
}
