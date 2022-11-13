import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Button} from 'react-native-paper';
import {appStyle} from '../Style/Style';
import UserAvatar from './UserAvatar';

const ModalScreen = ({
  modalVisible,
  groupChat,
  contactName,
  setContactName,
  groupUser,
  chat,
  cancelAdd,
  addContact,
  addToGroupChat,
}) => {
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={appStyle.modal}>
        <TextInput
          autoFocus={false}
          placeholder={groupChat ? 'group name' : 'Contact name'}
          value={contactName}
          onChangeText={setContactName}
          style={appStyle.contactInput}
        />
        {groupChat && (
          <Text style={appStyle.title}>group users: {groupUser + '  '} </Text>
        )}
        {groupChat &&
          chat &&
          chat.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => addToGroupChat(item)}>
                {!item.user.persons && (
                  <UserAvatar user={item.user} lastMessage={''} />
                )}
              </TouchableOpacity>
            );
          })}

        {}
        <View style={appStyle.buttonContainer}>
          <Button
            marginHorizontal={20}
            mode="contained"
            color="green"
            onPress={() => addContact()}>
            Save Contact
          </Button>
          <Button mode="contained" color="red" onPress={() => cancelAdd()}>
            Cancel
          </Button>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ModalScreen;
