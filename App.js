import React, {useState} from 'react';
import { NavigationContainer , getFocusedRouteNameFromRoute} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './components/login';
import Statis from './components/statis';
import Home from './components/home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'home';

  switch (routeName) {
    case 'home':
      return 'Home';
    case 'statis':
      return 'Statis';
  }
}

function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="statis"
        component={Statis}
        options={{
          tabBarLabel: 'Statistics',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons 
              name="ios-analytics-outline" 
              color={color} size={size}
              />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


export default function App() {

return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name='Login' component={Login}/>
              <Stack.Screen
                name="Home"
                component={HomeTab}
                options={({ navigation, route}) => ({
                  headerTitle: false,
                  name: '',
                  headerTitle: getHeaderTitle(route),
                  headerLeft: () => (
                    <Ionicons
                      name="ios-arrow-back"
                      size={30}
                      style={{ marginLeft: 10 }}
                      onPress={() =>{
                        navigation.navigate("Login");
                      }}
                    />
                  ),
                })}
              />
          </Stack.Navigator>
      </NavigationContainer>
);
}



