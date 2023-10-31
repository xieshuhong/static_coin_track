import React from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
export default function Home() {
    const [text, onChangeText] = React.useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>Expense tracker</Text>
            <Text style={styles.balance}>YOUR BALANCE</Text>
            <Text style={styles.balance}>0.00</Text>
            <View style={styles.small}>
                <View style={styles.item}>
                    <Text>INCOME</Text>
                    <Text>0.00</Text>
                </View>
                <View style={styles.item}>
                    <Text>EXPENSE</Text>
                    <Text>0.00</Text>
                </View>
            </View>
            <Text style={styles.transaction}>Add new transaction</Text>
            <Text style={styles.text}>Text</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder='Enter text...'
                value={text}
            />
            <Text style={styles.text}>Amount</Text>
            <Text >(negative - expense, positive - income)</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder='0'
                value={text}
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="Press me"
                    color="#ffffff"
                    onPress={() => {
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 30,
      },
    baseText: {
        marginTop: 20,
        fontFamily: 'Cochin',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
      },
      balance: {
        marginTop: 20,
        fontFamily: 'Arial',
        fontSize: 20,
        color: 'black' 
      },
      small: {
        flexDirection: "row",
        marginTop: 10
      },
      item: {
        backgroundColor: '#ffffff',
        height: 150,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 5,
        padding: 50,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      transaction: {
        fontSize: 25,
        marginTop: 20,
        fontWeight: 'bold',
      },
      text: {
        fontSize: 25,
        marginTop: 20,
        fontWeight: 'bold',

      },
      input: {
        height: 40,
        marginTop: 10,
        borderWidth: 1,
        padding: 10,
        width:200,
      },
      button: {
        padding: 20,
        marginTop: 10,
      },
      buttonContainer: {
        marginTop: 10,
        backgroundColor: '#007AFF',
        borderRadius: 5,
        padding: 5,
        width: 200,
      },
})