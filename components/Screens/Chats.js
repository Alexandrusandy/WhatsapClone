import React, {useEffect} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import ChatList from '../Widget/ChatList';
import {defaultChat} from '../defaultChat';
import {appStyle} from '../Style/Style';
import {ChatIcon} from '../Icons/Icons';

const Chats = props => {
  var newParams = props.route && props.route.params;
  const {navigation} = props;
  const chat = defaultChat;
  useEffect(() => {
    if (newParams) {
      let id = newParams.data.id;
      let _chat = chat;
      _chat[id] = newParams.data;
    }
  }, [chat, newParams]);

  return (
    <SafeAreaView style={appStyle.fullScreen}>
      <FlatList
        data={chat}
        renderItem={({item, index}) => (
          <ChatList data={item} index={index} navigation={navigation} />
        )}
      />
      <ChatIcon navigation={navigation} chat={chat} />
    </SafeAreaView>
  );
};

export default Chats;
