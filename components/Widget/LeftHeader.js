import {Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {BackIcon} from '../Icons/Icons';
import {appStyle} from '../Style/Style';

const LeftHeader = ({user, navigation, data, index}) => {
  const {image, name} = user;
  return (
    <View style={appStyle.hederLeft}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('chats', {data: data, index: index})
        }>
        <BackIcon />
      </TouchableOpacity>
      <Image source={{uri: image}} style={appStyle.headerImage} />
      <View style={appStyle.marginLeft}>
        <Text style={appStyle.avatarName}>{name} </Text>
      </View>
    </View>
  );
};

export default LeftHeader;
