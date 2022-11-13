import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Moment from 'moment';
import 'moment/locale/ro';
import UserAvatar from './UserAvatar';
import {appStyle} from '../Style/Style';

const ChatList = props => {
  const {navigation} = props;
  const {data} = props;
  const {user, lastMessage} = data;

  if (data.messages.length > 0) {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('chatItem', {data: data})}>
        <View style={appStyle.userRow}>
          <UserAvatar user={user} lastMessage={lastMessage} />
          <Text>
            {Moment(lastMessage.createdAt).format('DD-MM-YY')}•
            {Moment(lastMessage.createdAt).format('HH:mm')}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
};

export default ChatList;
