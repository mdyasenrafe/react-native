import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import About from './src/Screens/About';
import Menu from './src/Componets.js/Menu';
import Contact from './src/Screens/Contact';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {/* home screen  */}
          <Stack.Screen
            component={Home}
            name="Home"
            options={{
              headerShown: false,
            }}></Stack.Screen>

          {/* Course Screen  */}
          <Stack.Screen
            name="About"
            component={About}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
