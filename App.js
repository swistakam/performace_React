import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/HomePage.js';
import RenderAnimation from './components/RenderAnimation.js';
import MemoryPage from './components/MemoryPage.js';
import ImageSpin from './components/Spin.js';
import MyGifs from './components/MyGifs.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="CPU" component={RenderAnimation} />
        <Stack.Screen name="Memory" component={MemoryPage} />
        <Stack.Screen name="Spin" component={ImageSpin} />
        <Stack.Screen name="Gifs" component={MyGifs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
