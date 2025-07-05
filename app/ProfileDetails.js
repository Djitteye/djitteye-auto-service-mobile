import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';

const ProfileDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { firstName, lastName, phoneNumber, email, profileImage } = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  // Définir une image par défaut ou null si l'image n'est pas fournie
  const defaultImage = require('../assets/images/profile.jpg'); // une image par défaut
  const displayImage = profileImage || defaultImage;

  const handleEditPress = () => {
    navigation.navigate('ModifierProfil', {
      firstName,
      lastName,
      phoneNumber,
      email,
      profileImage,
    });
  };

  const handleImagePress = () => {
    if (profileImage) {
      setModalVisible(true);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.imageContainer} onPress={handleImagePress}>
        <Image source={displayImage} style={styles.profileImage} />
      </TouchableOpacity>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>User name:{firstName} {lastName}</Text>
        <Text style={styles.detailText}>Téléphone: {phoneNumber}</Text>
        <Text style={styles.detailText}>Email: {email}</Text>
      </View>

      <View style={styles.editButtonContainer}>
        <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
          <Icon name="create-outline" size={24} color="#000" />
          <Text>Modifier</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalCloseButton} onPress={handleCloseModal}>
            <Icon name="close" size={30} color="#fff" />
          </TouchableOpacity>
          <Image source={displayImage} style={styles.fullScreenImage} />
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  imageContainer: {
    width: '100%',
    height: 300,
    backgroundColor: '#f0f0f0', // Fond gris si pas d'image
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    flex: 1,
    padding: 20,
    marginTop: -20,
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailText: {
    color: 'black',
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 10,
  },
  editButtonContainer: {
    alignItems: 'center',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCloseButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 10,
  },
  fullScreenImage: {
    width: '90%',
    height: '80%',
    resizeMode: 'contain',
  },
});

export default ProfileDetails;
