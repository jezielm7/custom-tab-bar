/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Search from '../screens/Search';
import New from '../screens/New';
import Profile from '../screens/Profile';
import Notifications from '../screens/Notifications';

import Button from '../components/Button';

const Router = () => {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <Navigator
      tabBarOptions={{
        style: {
          height: 60,
          borderTopWidth: 0,
          backgroundColor: '#030812',
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 24,
          height: 24,
        },
        labelStyle: {
          marginTop: 8,
          fontSize: 12,
        },
        activeTintColor: '#bf94ff',
        inactiveTintColor: '#efeff1',
      }}
    >
      <Screen name="Home" component={Home} options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <Icon
              name="home"
              size={size}
              color={focused ? '#bf94ff' : '#efeff1'}
            />
          )
        }
      }} />

      <Screen name="Search" component={Search} options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <Icon
              name="search-outline"
              size={size}
              color={focused ? '#bf94ff' : '#efeff1'}
            />
          )
        }
      }} />

      <Screen name="New" component={New} options={{
        tabBarLabel: '',
        tabBarIcon: ({ size, focused }) => {
          return (
            <Button size={size} focused={focused} />
          )
        }
      }} />

      <Screen name="Notifications" component={Notifications} options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <Icon
              name="notifications"
              size={size}
              color={focused ? '#bf94ff' : '#efeff1'}
            />
          )
        }
      }} />

      <Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <Icon
              name="person"
              size={size}
              color={focused ? '#bf94ff' : '#efeff1'}
            />
          )
        }
      }} />
    </Navigator>
  );
};

export default Router;
