/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, Header} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Signnin from './src/screens/Signin';
import AnimatedSignin from './src/screens/SignAnimated';
import SigninAnimated from './src/screens/SigninAnimated';
import Index from './src/screens';
import HotelBooking_1_First from './src/screens/HotelBooking/1/screens/First';
import Hotel_1_Homepage from './src/screens/HotelBooking/1/screens/Homepage';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchPage from './src/screens/HotelBooking/1/screens/SearchPage';
import Favorites from './src/screens/HotelBooking/1/screens/Favorites';

const Stack = createStackNavigator();
/* const Tabs = createMaterialBottomTabNavigator(); */
const Tabs = createBottomTabNavigator();
export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={Index}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signin"
          component={Signnin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AnimatedSignin"
          component={AnimatedSignin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SigninAnimated"
          component={SigninAnimated}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HotelBooking"
          component={HotelBooking_1_First}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Hotel1Tabs"
          component={Hotel_1_tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SearchPage"
          component={SearchPage}
          options={{
            headerShown: false,
            title: 'Search',
            headerBackTitle: 'Back',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Hotel_1_tabs = () => {
  return (
    <Tabs.Navigator
      labeled={true}
      activeTintColor="#5948F6"
      activeColor="#5948F6"
      inactiveColor="#ddd"
      inactiveTintColor="#ddd"
      barStyle={{backgroundColor: '#fff', paddingBottom: 0}}
      backBehavor="history"
      shifting={true}
      tabBarOptions={{
        activeTintColor: '#5948F6',
        inactiveTintColor: 'gray',
        keyboardHidesTabBar: true,
      }}>
      <Tabs.Screen
        name="Home"
        component={Hotel_1_Homepage}
        options={{
          tabBarLabel: 'Home',
          /* tabBarColor: '#5948F6', */
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <Icon name="home" color={color} size={24} />
            ) : (
              <Icon name="home-outline" color={color} size={24} />
            ),
        }}
      />
      <Tabs.Screen
        name="Home1"
        component={Favorites}
        options={{
          tabBarLabel: 'Favorite',
          /* tabBarColor: '#CDDEE5', */
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <Icon name="bookmark" color={color} size={24} />
            ) : (
              <Icon name="bookmark-outline" color={color} size={24} />
            ),
        }}
      />
      <Tabs.Screen
        name="Home2"
        component={Hotel_1_Homepage}
        options={{
          tabBarLabel: 'Trips',
          /* tabBarColor: '#CDDEE5', */
          tabBarIcon: ({color, size, focused}) => (
            <Icon name="receipt" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="Home3"
        component={Hotel_1_Homepage}
        options={{
          tabBarLabel: 'Settings',
          /* tabBarColor: '#EA903B', */
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <Icon name="settings" color={color} size={24} />
            ) : (
              <Icon name="settings-outline" color={color} size={24} />
            ),
        }}
      />
    </Tabs.Navigator>
  );
};
