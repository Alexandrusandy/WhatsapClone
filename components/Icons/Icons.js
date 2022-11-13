import React from 'react';
import {appStyle} from '../Style/Style';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';

const DotsIcon = () => {
  return (
    <Icon
      name="dots-vertical"
      size={appStyle.iconSize}
      style={appStyle.paddingRight}
    />
  );
};

const CameraIcon = () => {
  return <Icon name="camera" size={appStyle.iconSize} />;
};

const ChatIcon = ({navigation, chat}) => {
  return (
    <View style={appStyle.chatIcon}>
      <TouchableOpacity
        onPress={() => navigation.navigate('contact', {chat: chat})}>
        <Icon name="chat" size={40} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

const AddUserIcon = () => {
  return (
    <AntIcon name="adduser" color={appStyle.activeColor} size={30}>
      <Text style={appStyle.textBlack}>Contact Nou</Text>
    </AntIcon>
  );
};

const AddGroupIcon = () => {
  return (
    <AntIcon name="addusergroup" color={appStyle.activeColor} size={30}>
      <Text style={appStyle.textBlack}>Grup Nou</Text>
    </AntIcon>
  );
};

const IconImage = () => {
  return <Icon name="image" size={35} />;
};

const SendIcon = () => {
  return (
    <Icon name="arrow-right-circle" size={35} style={appStyle.marginLeft} />
  );
};

const BackIcon = () => {
  return <Icon name="arrow-left" size={30} style={appStyle.marginLeft} />;
};

export {
  DotsIcon,
  CameraIcon,
  ChatIcon,
  AddUserIcon,
  AddGroupIcon,
  IconImage,
  SendIcon,
  BackIcon
};
