import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';

const Profil = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  const { firstName, lastName, phoneNumber, email } = route.params || {};
  const profileImage = require('../../assets/images/profile.jpg');

  const handleLogout = () => {
    console.log('Déconnexion');
  };

  const handleProfileClick = () => {
    navigation.navigate('ProfileDetails', {
      firstName,
      lastName,
      email,
      phoneNumber,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.profileContent} onPress={handleProfileClick}>
          <Image source={profileImage} style={styles.profileImage} />
          <Text style={styles.username}>{firstName} {lastName}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Confidentialite')}>
          <Icon name="lock-closed-outline" size={24} color="#000" />
          <Text style={styles.optionText}>Confidentialité</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Langue')}>
          <Icon name="language-outline" size={24} color="#000" />
          <Text style={styles.optionText}>Langue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Parametre')}>
          <Icon name="settings-outline" size={24} color="#000" />
          <Text style={styles.optionText}>Paramètres</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '80%',
  },
  profileContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
  },
  username: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  optionsContainer: {
    marginTop: 40,
    width: '100%',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#555',
  },
  logoutButton: {
    position: 'absolute',
    bottom: 20,
    width: '80%',
    backgroundColor: '#FD6A00',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center', // Centrer horizontalement
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profil;
