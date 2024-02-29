// App.js
import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  const [loginSession, setLoginSession] = useState();

  function startLoginSession(loginToken) {
    console.log(loginToken);
    setLoginSession(loginToken);
  }

  return (
    <View style={styles.container}>
      <Image source={require('./assets/A2K-LOGO.png')} style={styles.logo} />
      {loginSession === 'Logged in' ? (
        <Dashboard />
      ) : (
        <Login userToken={startLoginSession} />
      )}
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbbac6',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
    marginTop: 50,
    margin: 10,
  },
});

export default App;
