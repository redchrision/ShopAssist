// Bibliography: Schwarzmüller M., 2022, React Native - The Practical Guide [2022], https://www.udemy.com/course/react-native-the-practical-guide/

import { NavigationContainer } from '@react-navigation/native'; // component to set for wrapping all navigation elements
import { createNativeStackNavigator } from '@react-navigation/native-stack' // for the stack navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' // for the bottom tabs navigator
import AllItems from './screens/AllItems';
import ItemManager from './screens/ItemManager';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from './constants/Styles';
import IconButton from './components/UI/IconButton';
import ItemsContextProvider from './store/items-context';

const Stack = createNativeStackNavigator(); // constant that holds the results of calling createNativeStackNavigator()
// Stack will hold an object that gives us access to 2 components: 1/ the navigator component and 2/ the component for registering screens
const BottomTabs = createBottomTabNavigator(); // the same as the other constant

function BottomTabItems() { // used for the nested navigator
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
            navigation.navigate('Item Manager');
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen 
        name='All Items' 
        component={AllItems} 
        options={{
          title: 'ShopAssist',
          tabBarLabel: 'All Items',
          tabBarIcon: ({color, size}) => 
          <Ionicons name='hourglass' size={size} color={color}/>
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ItemsContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: 'white',
            }}
          > 
            <Stack.Screen 
              name='BottonTabItems' 
              component={BottomTabItems} 
              options={{ headerShown: false}}
            />
            <Stack.Screen 
              name='Item Manager' 
              component={ItemManager}
              options={{
                presentation: 'modal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
       </ItemsContextProvider>
    </>
  );
}