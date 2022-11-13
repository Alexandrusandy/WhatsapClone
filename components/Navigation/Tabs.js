import {Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import ChatItem from '../Widget/ChatItem';
import ContactScreen from '../Screens/ContactScreen';
import {DotsIcon} from '../Icons/Icons';
import {appStyle} from '../Style/Style';
const Stack = createStackNavigator();

const Tabs = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: '',
          headerRight: () => <DotsIcon />,
          headerLeft: () => <Text style={appStyle.title}>WhatsApp</Text>,
        }}
      />
      <Stack.Screen name="chatItem" component={ChatItem} />
      <Stack.Screen name="contact" component={ContactScreen} />
    </Stack.Navigator>
  );
};

export default Tabs;
