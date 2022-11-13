import {Text, View, Image} from 'react-native';
import React from 'react';
import Moment from 'moment';
import 'moment/locale/ro';
import {appStyle} from '../Style/Style';

const ChatUser = ({item, data}) => {
  return (
    <View
      style={[
        appStyle.msgContainer,
        item.me || item.img ? appStyle.myMsg : appStyle.otherMsg,
      ]}>
      {data.user.persons && !item.img && (
        <Text style={appStyle.textGrey}>{Object.keys(item)[0]}</Text>
      )}
      {!item.img && (
        <Text style={appStyle.chatText}>{item[Object.keys(item)[0]]}</Text>
      )}
      {item.img && <Image source={{uri: item.img}} style={appStyle.chatImg} />}
      <Text style={appStyle.msgTime}> {Moment(item.time).format('HH:mm')}</Text>
    </View>
  );
};

export default ChatUser;
