import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Image, Button, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login({navigation}) {
  // const navigation = useNavigation();

  const onPressHandler = (() => {
    navigation.navigate('Home');
  })

  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
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
              onPress={onPressHandler}
            />
          </SafeAreaView>
        </View>
    </TouchableWithoutFeedback>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 100,
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
