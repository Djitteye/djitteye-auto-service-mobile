import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const ParkingDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { profile } = route.params; // Assurez-vous que le paramètre `profile` est passé correctement

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image source={require('../assets/images/carrousel1.png')} style={styles.profileImage} />
        <Text style={styles.profileName}>{profile}</Text>
      </View>

      {/* Parking Information */}
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Icon name="mail-outline" size={24} color="black" />
          <Text style={styles.infoText}>email@example.com</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="call-outline" size={24} color="black" />
          <Text style={styles.infoText}>+123 456 7890</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="location-outline" size={24} color="black" />
          <Text style={styles.infoText}>123 Rue Example, Ville</Text>
        </View>
      </View>

      {/* Nos Voitures Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.nosVoituresButton}
          onPress={() => navigation.navigate('NosVoitures')}
        >
          <Text style={styles.buttonText}>Nos Voitures</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  nosVoituresButton: {
    backgroundColor: '#FD6A00',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ParkingDetail;
