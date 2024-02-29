// Login.js
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';
import { TextInput } from 'react-native-paper';

function Login({ userToken }) {
  const [userInput, setUserInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleUserInputChange = (text) => {
    setUserInput(text);
  };

  const handlePasswordInputChange = (text) => {
    setPasswordInput(text);
  };

  const adminUsername = 'admin';
  const adminPassword = 'admin'; // Replace with your actual hardcoded password

  const confirmLoginHandler = () => {
    if (userInput === adminUsername && passwordInput === adminPassword) {
      // Successful login
      userToken('Logged in');
    } else {
      // Incorrect credentials
      Alert.alert('Error', 'Invalid username or password.');
    }
  };

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Username'
          onChangeText={handleUserInputChange}
          value={userInput}
          mode='outlined'
        />
        <TextInput
          style={styles.textInput}
          placeholder='Password'
          onChangeText={handlePasswordInputChange}
          value={passwordInput}
          secureTextEntry
          right={<TextInput.Icon icon='eye' />}
        />
        {/* <View style={styles.buttonContainer}>
          <View style={styles.button}>
            
            <Button
              title='Login'
              color='#4DA167'
              onPress={confirmLoginHandler}
            />
          </View>
        </View> */}
        <TouchableOpacity
          onPress={confirmLoginHandler}
          style={styles.buttonContainer}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    padding: 50,
    backgroundColor: '#6E7E85',
    borderRadius: 10,
    marginTop: 20,
  },
  textInput: {
    backgroundColor: '#E2E2E2',
    color: '#120438',
    borderRadius: 10,
    width: 200,

    margin: 7,
  },
  buttonContainer: {
    marginTop: 16,
    backgroundColor: '#3BC14A',
    borderRadius: 10,
    padding: 10,
    width: 90,
    alignItems: 'center',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
