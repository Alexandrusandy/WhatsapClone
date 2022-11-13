import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Moment from 'moment';
import 'moment/locale/ro';
import {launchImageLibrary} from 'react-native-image-picker';
import ChatUser from './ChatUser';
import {appStyle} from '../Style/Style';
import {IconImage, SendIcon} from '../Icons/Icons';
import LeftHeader from './LeftHeader';

const ChatItem = props => {
  const {data, index} = props.route.params;
  const groupChat = data.user.persons;

  const {navigation} = props;
  const listData = data.messages;
  const {user} = data;
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <LeftHeader
          user={user}
          navigation={navigation}
          data={data}
          index={index}
        />
      ),
      title: '',
    });
    navigation.setOptions({title: ''});
  });

  const sendMessage = () => {
    const date = Moment().format();
    //check msg length
    if (message.length > 0) {
      //check if is groupchat
      if (groupChat) {
        let newMsg = {me: message, time: date};
        let _msg = data;
        _msg.messages.push(newMsg);
        _msg.lastMessage.createdAt = date;
        _msg.lastMessage.text = message;

        let groupUsers = data.user.persons;
        var _responseGroup = listData;
        for (let i = 0; i < groupUsers.length; i++) {
          const _user = groupUsers[i];
          let _resMsg = {};
          _resMsg[_user] = message + '❤️';
          _resMsg.time = date;
          _responseGroup.push(_resMsg);
        }
        setMessage('');
      } else {
        let newMsg = {me: message, time: date};
        let _msg = data;
        _msg.messages.push(newMsg);
        _msg.lastMessage.createdAt = date;
        _msg.lastMessage.text = message;
        let _resMsg = {him: message + '❤️', time: date};
        let response = listData;
        response.push(_resMsg);
        setMessage('');
      }
    }
  };

  const accesImage = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
        maxWidth: 400,
        maxHeight: 400,
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.errorMessage) {
        console.log('error msg', response.errorMessage);
      } else {
        const source = response.assets[0].uri;
        const date = Moment().format();
        let newImg = {img: source, time: date};
        let _msg = data;
        _msg.messages.push(newImg);
        setCount(c => c + 1);
      }
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={90}
      style={appStyle.flex1}>
      <SafeAreaView style={appStyle.flex1} key={count}>
        <FlatList
          key={count}
          data={listData}
          style={appStyle.margin}
          renderItem={({item}) => <ChatUser item={item} data={data} />}
        />
        <View style={[appStyle.row]}>
          <TouchableOpacity onPress={accesImage}>
            <IconImage />
          </TouchableOpacity>
          <TextInput
            autoFocus={false}
            placeholder=" mesaj"
            value={message}
            onChangeText={setMessage}
            style={appStyle.textInput}
          />
          <TouchableOpacity onPress={sendMessage}>
            <SendIcon />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ChatItem;
