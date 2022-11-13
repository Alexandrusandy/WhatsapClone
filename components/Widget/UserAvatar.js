import React from 'react';
import {Text, View, Image} from 'react-native';
import {appStyle} from '../Style/Style';

const UserAvatar = ({user, lastMessage}) => {
  return (
    <View style={appStyle.row}>
      <Image source={{uri: user.image}} style={appStyle.avatarImg} />
      <View style={appStyle.marginLeft}>
        <Text style={appStyle.avatarName}>{user.name} </Text>
        <Text style={appStyle.textGrey}>{lastMessage.text} </Text>
      </View>
    </View>
  );
};

export default UserAvatar;
