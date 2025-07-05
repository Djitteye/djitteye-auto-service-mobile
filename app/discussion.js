import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Discussion() {
  const navigation = useNavigation();
  const route = useRoute();
  const { chatData } = route.params || {};
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(chatData?.messages || []);

  const sendMessage = () => {
    if (message.trim() === '') return;
    
    const newMessage = {
      id: Date.now().toString(),
      sender: 'Moi',
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <Image source={{ uri: chatData?.profileImage || 'https://via.placeholder.com/50' }} style={styles.profileImage} />
        <Text style={styles.userName}>{chatData?.name || 'Utilisateur'}</Text>
      </View>

      {/* MESSAGES LIST */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.messageContainer, item.sender === 'Moi' ? styles.myMessage : styles.otherMessage]}>
            <Text style={styles.text}>{item.text}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
        contentContainerStyle={styles.messagesContainer}
      />

      {/* INPUT FIELD */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Écrire un message..."
          placeholderTextColor="#aaa"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },

  /* HEADER */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  userName: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  /* MESSAGES */
  messagesContainer: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  messageContainer: {
    padding: 12,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '75%',
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#FFDEC6',
    borderTopRightRadius: 0,
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5EA',
    borderTopLeftRadius: 0,
  },
  text: { fontSize: 16, color: 'black' },
  time: { fontSize: 12, color: 'black', marginTop: 5, alignSelf: 'flex-end' },

  /* INPUT FIELD */
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#FD6A00',
    borderRadius: 20,
    padding: 10,
  },
});
