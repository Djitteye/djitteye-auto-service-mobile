// screens/PourVous.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import de FontAwesome
import { useNavigation } from '@react-navigation/native';

const cars = [
    {
        id: '1',
        profileImage: require('../assets/images/carrousel1.png'),
        profileName: 'Keita business auto',
        itemImage: require('../assets/images/toyota1.png'),
        itemName: 'Prado 4X4',
        itemPrice: 'Prix: 55Millions FCFA',
       
        brand: 'Toyota',
        year: 2020,
        mileage: 30000,
        fuel: 'Diesel',
        transmission: 'Automatique',
        color: 'Blanc',
        power: 250,
        tankCapacity: 87,
        doors: 5,
        seats: 7,
        consumption: 8.5,
        equipment: 'Climatisation, GPS, Sièges chauffants',
    },
    {
        id: '2',
        profileImage: require('../assets/images/carrousel1.png'),
        profileName: 'Keita business auto',
        itemImage: require('../assets/images/toyota1.png'),
        itemName: 'Prado 4X4',
        itemPrice: 'Prix: 55Millions FCFA',
       
        brand: 'Toyota',
        year: 2021,
        mileage: 25000,
        fuel: 'Essence',
        transmission: 'Manuelle',
        color: 'Noir',
        power: 280,
        tankCapacity: 90,
        doors: 5,
        seats: 7,
        consumption: 9.0,
        equipment: 'Climatisation, GPS, Toit ouvrant',
    },
    {
        id: '3',
        profileImage: require('../assets/images/carrousel1.png'),
        profileName: 'Keita business auto',
        itemImage: require('../assets/images/toyota1.png'),
        itemName: 'Prado 4X4',
        itemPrice: 'Prix: 55Millions FCFA',
       
        brand: 'Toyota',
        year: 2021,
        mileage: 25000,
        fuel: 'Essence',
        transmission: 'Manuelle',
        color: 'Noir',
        power: 280,
        tankCapacity: 90,
        doors: 5,
        seats: 7,
        consumption: 9.0,
        equipment: 'Climatisation, GPS, Toit ouvrant',
    },
    {
        id: '4',
        profileImage: require('../assets/images/carrousel1.png'),
        profileName: 'Keita business auto',
        itemImage: require('../assets/images/toyota1.png'),
        itemName: 'Prado 4X4',
        itemPrice: 'Prix: 55Millions FCFA',
     
        brand: 'Toyota',
        year: 2021,
        mileage: 25000,
        fuel: 'Essence',
        transmission: 'Manuelle',
        color: 'Noir',
        power: 280,
        tankCapacity: 90,
        doors: 5,
        seats: 7,
        consumption: 9.0,
        equipment: 'Climatisation, GPS, Toit ouvrant',
    },
    {
        id: '5',
        profileImage: require('../assets/images/carrousel1.png'),
        profileName: 'Keita business auto',
        itemImage: require('../assets/images/toyota1.png'),
        itemName: 'Prado 4X4',
        itemPrice: 'Prix: 55Millions FCFA',
       
        brand: 'Toyota',
        year: 2021,
        mileage: 25000,
        fuel: 'Essence',
        transmission: 'Manuelle',
        color: 'Noir',
        power: 280,
        tankCapacity: 90,
        doors: 5,
        seats: 7,
        consumption: 9.0,
        equipment: 'Climatisation, GPS, Toit ouvrant',
    },
    {
        id: '6',
        profileImage: require('../assets/images/carrousel1.png'),
        profileName: 'Keita business auto',
        itemImage: require('../assets/images/toyota1.png'),
        itemName: 'Prado 4X4',
        itemPrice: 'Prix: 55Millions FCFA',
        
        brand: 'Toyota',
        year: 2021,
        mileage: 25000,
        fuel: 'Essence',
        transmission: 'Manuelle',
        color: 'Noir',
        power: 280,
        tankCapacity: 90,
        doors: 5,
        seats: 7,
        consumption: 9.0,
        equipment: 'Climatisation, GPS, Toit ouvrant',
    },
    {
        id: '7',
        profileImage: require('../assets/images/carrousel1.png'),
        profileName: 'Keita business auto',
        itemImage: require('../assets/images/toyota1.png'),
        itemName: 'Prado 4X4',
        itemPrice: 'Prix: 55Millions FCFA',
       
        brand: 'Toyota',
        year: 2021,
        mileage: 25000,
        fuel: 'Essence',
        transmission: 'Manuelle',
        color: 'Noir',
        power: 280,
        tankCapacity: 90,
        doors: 4,
        seats: 7,
        consumption: 9.0,
        equipment: 'Climatisation, GPS, Toit ouvrant',
    },
    // Ajoutez plus de voitures ici avec des identifiants uniques et toutes les propriétés nécessaires
];

const PourVous = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigation = useNavigation();
    

    return (
        <View style={styles.container}>
            {/* Fixed Header */}
            <View style={styles.headerContainer}>
                {/* Back Arrow */}
                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={() => navigation.navigate('(tabs)')}
                >
                    <FontAwesome name="arrow-left" size={24} color="#000" />
                </TouchableOpacity>

                {/* Title */}
                <Text style={styles.title}>Pour vous</Text>

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

            {/* Scrollable Content */}
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {cars.map((car) => (
                    <View key={car.id} style={styles.itemContainer}>
                        <View style={styles.profileContainer}>
                            <Image source={car.profileImage} style={styles.profileImage} />
                            <Text style={styles.profileName}>{car.profileName}</Text>
                        </View>
                        <View style={styles.itemDetailsContainer}>
                            <Image source={car.itemImage} style={styles.itemImage} />
                            <View style={styles.itemTextContainer}>
                                <Text style={styles.itemName}>{car.itemName}</Text>
                                <Text style={styles.itemPrice}>{car.itemPrice}</Text>
                               
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => navigation.navigate('Details', { item: car })}
                                >
                                    <Text style={styles.buttonText}>Infos</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginTop: 0,
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f4f3f3',
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 10,
        marginVertical: 20,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchBar: {
        flex: 1,
    },
    sortButton: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#FD6A00',
        marginLeft: 10,
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    itemContainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        borderColor: '#f5f5f5',
        borderWidth: 2,
        marginBottom: 20,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    profileName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    itemDetailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemImage: {
        width: 180,
        height: 130,
        borderRadius: 10,
        marginRight: 10,
    },
    itemTextContainer: {
        flex: 1,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5,
    },
    itemPrice: {
        fontSize: 16,
        color: '#777',
        marginBottom: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    starIcon: {
        marginRight: 5,
    },
    itemRating: {
        fontSize: 16,
        color: '#777',
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        backgroundColor: '#FD6A00',
        borderRadius: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default PourVous;
