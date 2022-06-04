import React, {useContext, useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashBoard from '../Pages/App/Dashboard';
import Deposit from '../Pages/App/Deposit';
import Services from '../Pages/App/Services';
import Account from '../Pages/App/Account';


import * as Icons from 'phosphor-react-native';

const Tap = createBottomTabNavigator();

const AppRoute: React.FC = () => {
  return (
    <Tap.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#1D5C63',
        tabBarStyle: {
          height: 60,
          justifyContent: 'center',
        },
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 16,
          color: '#1c1c1e',
        },
      }}>
      <Tap.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icons.House weight='fill' size={38} color={focused ? '#1D5C63' : '#8F8F8F'} />
          ),
        }}
        name="Home"
        component={DashBoard}
      />
      <Tap.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icons.Money weight='fill' size={38} color={focused ? '#1D5C63' : '#8F8F8F'} />
          ),
        }}
        name="Depósito"
        component={Deposit}
      />
      <Tap.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icons.ArrowCircleUp weight='fill' size={38} color={focused ? '#1D5C63' : '#8F8F8F'} />
          ),
        }}
        name="Serviços"
        component={Services}
      />
      <Tap.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icons.UserCircleGear weight='fill' size={38} color={focused ? '#1D5C63' : '#8F8F8F'} />
          ),
        }}
        name="Conta"
        component={Account}
      />
    </Tap.Navigator>
  );
};

export default AppRoute;
