import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const chats = [
  {
    id: '1',
    name: 'Keita business auto',
    lastMessage: 'Salut, comment ça va ?',
    time: '12:45',
    avatar: require('../../assets/images/carrousel1.png'), // Image locale
    messages: [
      { id: 'm1', sender: 'keita ', text: 'Salut, comment ça va ?', time: '12:45' },
      { id: 'm2', sender: 'Moi', text: 'Bien et toi ?', time: '12:46' }
    ]
  },
  {
    id: '2',
    name: 'Keita business auto',
    lastMessage: 'Ok, merci beaucoup !',
    time: '11:30',
    avatar: require('../../assets/images/carrousel1.png'), // Image locale
    messages: [
      { id: 'm1', sender: 'keita', text: 'Ok, merci beaucoup !', time: '11:30' }
    ]
  }
];


export default function ChatsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Ajout du titre Messages */}
      <Text style={styles.title}>Messages</Text>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() => navigation.navigate('discussion', { chatData: item })}
          >
            {/* Correction ici */}
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.chatInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.lastMessage}>{item.lastMessage}</Text>
            </View>
            <Text style={styles.time}>{item.time}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
  chatItem: { flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  chatInfo: { flex: 1, marginLeft: 10 },
  name: { fontSize: 16, fontWeight: 'bold' },
  lastMessage: { fontSize: 14, color: 'gray' },
  time: { fontSize: 12, color: 'gray' }
});
