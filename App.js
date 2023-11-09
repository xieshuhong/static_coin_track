import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './components/login';
import Statis from './components/statis';
import Home from './components/home';
import { Button } from 'react-native';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          headerLeft: () => (
            <Button
              title='< Back'
            >

            </Button>
          ),
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
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-analytics-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [userIsAuthenticated, setUserIsAuthenticated] = React.useState(false);
  return (
      <NavigationContainer>
        {userIsAuthenticated ?
        (<MyTabs/>) :
        (<Stack.Navigator>
          <Stack.Screen name="login">
              {() => (
                <Login
                  setUserIsAuthenticated={setUserIsAuthenticated}
                />
              )}
          </Stack.Screen>
        </Stack.Navigator>)
        }
      </NavigationContainer>
  );
}



