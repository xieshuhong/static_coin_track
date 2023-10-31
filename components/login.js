import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Image, Button, View} from 'react-native';

export default function Login({setUserIsAuthenticated}) {

  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="email"
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="password"
        />
        <Button
          title="Login"
          color="#007AFF"
          onPress={() => setUserIsAuthenticated(true)}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  input: {
    height: 40,
    width: 220,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderColor: 'white',
    borderRadius: 10
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 10,
    alignSelf: "center"
  },
});
