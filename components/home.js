import React from 'react';
import { Text, StyleSheet, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
export default function Home() {
  const [income, setIncome] = React.useState(1000);
  const [expense, setExpense] = React.useState(1000);
  const [balance, setBalance] = React.useState(1000);
  const [selectedIncomeType, setSelectedIncomeType] = React.useState(null);
  const [selectedExpenseType, setSelectedExpenseType] = React.useState(null);

  const incomeTypes = ["Salary", "Freelance Work", "Rental Income", "Investments", "Side Business"];
  const expenseTypes = ["Rent", "Mortgage", "Utilities", "Groceries", "Transportation", "Entertainment"];

  const isSubmissionValid = () => {
    return selectedIncomeType !== null && income.trim() !== '' &&
           selectedExpenseType !== null && expense.trim() !== '';
  };
  const onSubmit = () => {
    if (isSubmissionValid()) {
      // Perform the submission logic here
      console.log('Submission successful!');
    } else {
      console.log('Please fill in all the fields.');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
        <KeyboardAvoidingView
                    style={styles.container}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 120 : 0} // Adjust this value based on your layout
        >
          <ScrollView style={styles.container}>
            <Text style={styles.balance}>YOUR BALANCE: 0.00</Text>
            <View style={styles.small}>
              <View style={styles.item}>
                <Text>total income</Text>
                <Text>{income}</Text>
              </View>
              <View style={styles.item}>
                <Text>total expense</Text>
                <Text>0.00</Text>
              </View>
            </View>
            <Text style={styles.text}>Select an income source</Text>
            <SelectDropdown
              data={incomeTypes}
              onSelect={(selectedItem, index) => {
                setSelectedIncomeType(selectedItem);
              }}
              defaultButtonText={'Select an income source'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
            <Text style={styles.text}>The amount of income</Text>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setIncome(parseFloat(value) || 0)}
              placeholder='0'
              value={income.toString()}
              keyboardType='numeric'
            />
            <Text style={styles.text}>Select an expense type</Text>
            <SelectDropdown
              data={expenseTypes}
              onSelect={(selectedItem, index) => {
                setSelectedExpenseType(selectedItem);
              }}
              defaultButtonText={'Select an expense type'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
            <Text style={styles.text}>The amount of expense</Text>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setExpense(parseFloat(value) || 0)}
              placeholder='0'
              value={expense.toString()}
              keyboardType='numeric'
            />
            <View style={styles.buttonContainer}>
              <Button
                title="Submit"
                color="#ffffff"
                onPress={onSubmit}
              />
            </View>
          </ScrollView>
          </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 10,
    backgroundColor: '#E5E4E2'
  },
  balance: {
    marginTop: 20,
    fontFamily: 'Arial',
    fontSize: 20,
    color: 'black',
  },
  small: {
    flexDirection: "row",
    marginTop: 10,
  },
  item: {
    backgroundColor: '#ffffff',
    height: 110,
    justifyContent: 'center',
    marginVertical: 18,
    marginHorizontal: 15,
    padding: 30,
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
    borderWidth: 0.5,
    padding: 10,
    width: 200,
    backgroundColor: '#ffffff',
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
    borderWidth: 0.5,
    width: 200,
  },
  dropdown1BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: { color: '#444', textAlign: 'left' },
  dropdown1DropdownStyle: { backgroundColor: '#EFEFEF' },
  dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
  dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },
})