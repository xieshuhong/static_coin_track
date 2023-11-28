import React, {Component} from 'react';
import { Alert } from 'react-native';
import { Text, StyleSheet, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { connect } from 'react-redux';
import { setIncome, setExpense, totalIncome } from '../src/redux/actions';

const mapStateToProps = (state) => {
   console.log('Redux State:', state);
     return {
        incomes: state.reducers.incomes,
        expenses: state.reducers.expenses,
        totalIncomeValue: state.reducers.totalIncome
     }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setIncome: (income) => dispatch(setIncome(income)),
    setExpense: (expense) => dispatch(setExpense(expense)),
    totalIncome: () => dispatch(totalIncome()),
  };
};



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIncomeType: null,
      selectedExpenseType: null,
      incomeAmount: 0,
      expenseAmount: 0,
    };
    this.incomeDropdownRef = React.createRef();
    this.expenseDropdownRef = React.createRef();
  }

  setSelectedIncomeType = (selectedItem) => {
    this.setState({ selectedIncomeType: selectedItem });
  };

  setSelectedExpenseType = (selectedItem) => {
    this.setState({ selectedExpenseType: selectedItem });
  };
  render() {
    const { incomes, expenses, totalIncomeValue } = this.props;
    const { selectedIncomeType, selectedExpenseType, incomeAmount, expenseAmount } = this.state;

    const incomeTypeOptions = incomes && incomes.map((income) => income.type);
    const expenseTypeOptions = expenses && expenses.map((expense) => expense.type);
  
    const isSubmissionValid = () => {
      return (
        (selectedIncomeType !== null && incomeAmount > 0) ||
        (selectedExpenseType !== null && expenseAmount > 0)
      );
    };
    const onSubmit = async () => {
      if (isSubmissionValid()) {
            // Dispatch actions to update Redux state
          await this.props.setIncome({ type: selectedIncomeType, amount: incomeAmount });
          await this.props.setExpense({ type: selectedExpenseType, amount: expenseAmount });
          Alert.alert('Success', 'Submission successful!', [{ text: 'OK' }]);
          await this.props.totalIncome();
          this.setState({
            selectedIncomeType: null,
            selectedExpenseType: null,
            incomeAmount: 0,
            expenseAmount: 0,
          });
          this.incomeDropdownRef.current.reset();
          this.expenseDropdownRef.current.reset();
      } else {
          Alert.alert('Error', 'Please fill in all the fields.', [{ text: 'OK' }]);
      }
    }
    return(
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
                <Text>{totalIncomeValue}</Text>
              </View>
              <View style={styles.item}>
                <Text>total expense</Text>
                <Text>0.00</Text>
              </View>
            </View>
            <Text style={styles.text}>Select an income source</Text>
            <SelectDropdown
              ref={this.incomeDropdownRef}
              data={incomeTypeOptions}
              onSelect={(selectedItem, index) => {
                this.setSelectedIncomeType(selectedItem);
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
              onChangeText={(value) => this.setState({ incomeAmount: parseFloat(value) || 0 })}
              onFocus={() => this.setState({incomeAmount: ''})}
              value={incomeAmount.toString()}
              keyboardType='numeric'
            />
            <Text style={styles.text}>Select an expense type</Text>
            <SelectDropdown
              ref={this.expenseDropdownRef}
              data={expenseTypeOptions}
              onSelect={(selectedItem, index) => {
                this.setSelectedExpenseType(selectedItem);
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
              onChangeText={(value) => this.setState({ expenseAmount: parseFloat(value) || 0 })}
              value={expenseAmount.toString()}
              onFocus={() => this.setState({expenseAmount: ''})}
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

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