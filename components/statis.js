import React, {Component} from 'react';
import { View, StyleSheet, Text, Button } from "react-native";
import RNEChartsPro from "react-native-echarts-pro";
import { connect } from 'react-redux';

  const mapStateToProps = (state) => {
    return {
      incomes: state.reducers.incomes,
      expenses: state.reducers.expenses,
      totalExpenseValue: state.reducers.totalExpense
    }
  }



  class Statis extends Component {
    constructor(props) {
      super(props);
    }


    generatePieData = (data) => {
      return data.map((item) => ({ value: item.amount, name: item.type }));
    };

    formatLabel = (params) => {
      return `${params.name}: ${params.value} (${((params.percent * 100).toFixed(2))}%)`;
    };

    render() {
      const { incomes, expenses, totalExpenseValue} = this.props;
      const incomePieOption  = {
        series: [
          {
            name: "Source",
            type: "pie",
            legendHoverLink: true,
            hoverAnimation: true,
            avoidLabelOverlap: true,
            startAngle: 180,
            radius: "55%",
            center: ["50%", "35%"],
            data: this.generatePieData(incomes),
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 12,
                  color: '#23273C',
                },
              },
            },
          },
        ],
      };
      const expensePieOption = {
        series: [
          {
            name: 'Expense',
            type: 'pie',
            legendHoverLink: true,
            hoverAnimation: true,
            avoidLabelOverlap: true,
            startAngle: 180,
            radius: '55%',
            center: ['50%', '35%'],
            data: this.generatePieData(expenses),
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 12,
                  color: '#23273C',
                },
              },
            },
          },
        ],
      };
      return (
              <View style={styles.container}>
                  <Text style={styles.text}>Year - 2023</Text>
                  <View>
                      <Text style={styles.text}>You've spent {totalExpenseValue} on this year!</Text>
                  </View>
                  <Text style={styles.text}>Analytics</Text>
                  <View style={{ height: 250, paddingTop: 25, marginTop: 20 }}>
                    <RNEChartsPro height={250} option={incomePieOption} />
                  </View>
                  <View style={{ height: 250, marginTop: 20 }}>
                      <RNEChartsPro height={250} option={expensePieOption} />
                  </View>
              </View>
      );
    };
  }

  export default connect(mapStateToProps)(Statis);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
      },
      text: {
        fontSize: 25,
        marginTop: 20,
        fontWeight: 'bold',
        marginLeft: 30,
      },
      pie: {
        height: 300,
        paddingTop: 25,
        marginTop: 20,
      },
      months: {
        flexDirection: 'row',

      },
      monthList: {
        marginLeft: 10,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007AFF',
        borderRadius: 5,
        padding: 5,
        fontSize: 10,
        width: 120,
      },
      monthText: {

        fontSize: 8,
        margin: 5,
      },
      

})