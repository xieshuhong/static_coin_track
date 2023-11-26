import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import RNEChartsPro from "react-native-echarts-pro";

export default function Statis() {
  const pieOption = {
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
        data: [
          { value: 105.2, name: "income" },
          { value: 310, name: "expense" },
          { value: 234, name: "cloth" },
        ],
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 12,
              color: "#23273C",
            },
          },
        },
      },
    ],
  };

  const months = [
    'September', 'October', 'November', 'December'
  ];

  return (
        <View style={styles.container}>
            <Text style={styles.text}>Amount</Text>
            <Text style={styles.text}>Year - 2023</Text>
            <View style={styles.months}>
                {months.map((month, index) => (
                <View style={styles.monthList}>
                    <Button                     
                        title={month}
                        key={index}
                        color="#ffffff"
                    />
                </View>
                ))}
            </View>
            <View>
                <Text style={styles.text}>You've spent $2,600 in this month</Text>
            </View>
            <Text style={styles.text}>Analytics</Text>
            <View style={{ height: 300, paddingTop: 25 , marginTop: 20}}>
                <RNEChartsPro height={250} option={pieOption} />
            </View>
        </View>
  );
}

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
        // flex: 1,
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