import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from '../pages/App';
import CreateBook from '../pages/createBook'

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown: false
      }} >
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="Create" component={CreateBook} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;