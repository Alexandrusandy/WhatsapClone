import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Camera from './Camera';
import Chats from './Chats';
import Status from './Status';
import Calls from './Calls';
import {appStyle} from '../Style/Style';
import {CameraIcon} from '../Icons/Icons';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="chats"
      screenOptions={{
        tabBarActiveTintColor: appStyle.activeColor,
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
        tabBarInactiveTintColor: appStyle.inactiveColor,
        tabBarIndicatorStyle: {
          backgroundColor: appStyle.activeColor,
        },
      }}>
      <Tab.Screen
        name="camera"
        component={Camera}
        options={{
          title: '',
          tabBarIcon: () => <CameraIcon />,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen name="chats" component={Chats} />
      <Tab.Screen name="status" component={Status} />
      <Tab.Screen name="call" component={Calls} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
