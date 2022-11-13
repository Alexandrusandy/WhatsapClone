import React, {useState} from 'react';
import {Text, TouchableOpacity, SafeAreaView} from 'react-native';
import UserAvatar from '../Widget/UserAvatar';
import {AddGroupIcon, AddUserIcon} from '../Icons/Icons';
import {appStyle} from '../Style/Style';
import ModalScreen from '../Widget/ModalScreen';
import {newUser, newGroup} from '../defaultChat';

const ContactScreen = props => {
  const {chat} = props.route.params;
  const [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [contactName, setContactName] = useState('');
  const [groupChat, setGroupChat] = useState();
  const [groupUser, setGroupUser] = useState([]);

  const {navigation} = props;

  const addContact = () => {
    //check if it's group type
    if (!groupChat) {
      //check if have name
      if (contactName.length > 0) {
        newUser.id = chat.length;
        newUser.user.name = contactName;
        let _updatedChat = chat;
        _updatedChat.push(newUser);
        setModalVisible(false);
        setContactName('');
      } else {
        // eslint-disable-next-line no-alert
        alert('enter contact name');
      }
    } else {
      //check if i have name
      if (contactName.length > 0) {
        //check if i have at least 2 users
        if (groupUser.length > 1) {
          newGroup.id = chat.length;
          newGroup.user.name = 'Group' + contactName;
          newGroup.user.persons = groupUser;
          let _updatedChat = chat;
          _updatedChat.push(newGroup);
          setModalVisible(false);
          setContactName('');
          setGroupUser([]);
        } else {
          // eslint-disable-next-line no-alert
          alert('minimum 2 users for group chat');
        }
      } else {
        // eslint-disable-next-line no-alert
        alert('enter group name');
      }
    }
  };

  const contacOpen = () => {
    setGroupChat(false);
    setModalVisible(true);
  };

  const groupOpen = () => {
    setGroupChat(true);
    setModalVisible(true);
  };

  const addToGroupChat = item => {
    let newMember = item.user.name;
    const checkUser = groupUser.findIndex(element => element === newMember);
    if (checkUser >= 0) {
      groupUser.splice(checkUser, 1);
      setCount(count + 1);
    } else {
      groupUser.push(newMember);
      setCount(count + 1);
    }
  };
  const cancelAdd = () => {
    setContactName('');
    setModalVisible(false);
    setGroupUser([]);
  };

  return (
    <SafeAreaView>
      <ModalScreen
        modalVisible={modalVisible}
        groupChat={groupChat}
        contactName={contactName}
        setContactName={setContactName}
        groupUser={groupUser}
        chat={chat}
        cancelAdd={cancelAdd}
        addContact={addContact}
        addToGroupChat={addToGroupChat}
      />
      <TouchableOpacity onPress={() => contacOpen()} style={appStyle.margin}>
        <AddUserIcon />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => groupOpen()} style={appStyle.margin}>
        <AddGroupIcon />
      </TouchableOpacity>
      <Text style={appStyle.title}>Contacte:</Text>
      {chat &&
        chat.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('chatItem', {data: item})}>
              <UserAvatar user={item.user} lastMessage={''} />
            </TouchableOpacity>
          );
        })}
    </SafeAreaView>
  );
};

export default ContactScreen;
