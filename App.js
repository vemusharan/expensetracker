import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IndexScreen from './src/screens/index';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
   <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{headerStyle: {backgroundColor: '#9370DB'}}}>
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={{title: 'Expense Tracker',headerTintColor:'white'}}
      />

   
    </Stack.Navigator>
  </NavigationContainer>
);
