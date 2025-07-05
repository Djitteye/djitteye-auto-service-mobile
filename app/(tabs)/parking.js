import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import de FontAwesome
import { useNavigation, useRoute } from '@react-navigation/native';

const Parking = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { userName } = route.params || {};  

  // Liste des parkings
  const parkingList = [
    { id: 1, name: "Keita business auto", image: require('../../assets/images/carrousel1.png') },
    { id: 2, name: "Bamako Auto Center", image: require('../../assets/images/carrousel1.png') },
    { id: 3, name: "Mali Car Services", image: require('../../assets/images/carrousel1.png') },
    { id: 4, name: "Global Auto", image: require('../../assets/images/carrousel1.png') },
    { id: 5, name: "Elite Car Rental", image: require('../../assets/images/carrousel1.png') },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Nos parkings</Text>
        {/* Barre de recherche */}
      <View style={styles.searchBarContainer}>
        
        <FontAwesome name="search" size={24} color="#999" style={styles.searchIcon}/>
        <TextInput
          style={styles.searchBar}
          placeholder="Recherche..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.sortButton} onPress={() => console.log('Tri activé')}>
                <FontAwesome name="sort" size={24} color="#fff" />
            </TouchableOpacity>
      </View>
      </View>

      {/* Liste des parkings */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {parkingList.map((parking) => (
          <View key={parking.id} style={styles.profileContainer}>
            <Image source={parking.image} style={styles.profileImage} />
            <View style={styles.profileTextContainer}>
              <Text style={styles.profileName}>{parking.name}</Text>
              
              <TouchableOpacity 
                style={styles.consultButton} 
                onPress={() => navigation.navigate('ParkingDetail', { profile: parking.name })}
              >
                <Text style={styles.consultButtonText}>Consulter</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  headerContainer: { marginBottom: 20 },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  searchBarContainer: {  flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderColor: '#f9f9f9',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginBottom: 20, },
  searchIcon: { marginRight: 10, },
  searchBar: { flex: 1, fontSize: 16 },
  sortButton: {  width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#FD6A00',
    marginLeft: 10, },
  scrollContainer: { paddingBottom: 20 },
  profileContainer: { flexDirection: 'row', backgroundColor: '#f9f9f9', padding: 15, borderRadius: 10, marginBottom: 10, alignItems: 'center' },
  profileImage: { width: 60, height: 60, borderRadius: 30, marginRight: 15 },
  profileTextContainer: { flex: 1 },
  profileName: { fontSize: 16, fontWeight: 'bold' },
  ratingContainer: { flexDirection: 'row', marginVertical: 5 },
  consultButton: { backgroundColor: '#FD6A00', paddingVertical: 8, paddingHorizontal: 15, borderRadius: 10, alignSelf: 'flex-start' },
  consultButtonText: { color: '#fff', fontWeight: 'bold' , backgroundColor: '#FD6A00',},
});

export default Parking;
