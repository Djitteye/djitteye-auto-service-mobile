import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';

const Infos = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params; // Adjust if needed

  return (
    <ScrollView style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.navigate('NosVoitures')}
      >
        <Icon name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Item Image */}
      <Image source={ item.itemImage } style={styles.itemImage} />

      {/* Item Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.title}>{item.itemName}</Text>
            <Text style={styles.price}>{item.itemPrice}</Text>
          </View>
          <TouchableOpacity style={styles.reserveButton}>
            <Text style={styles.reserveButtonText}>Réserver</Text>
          </TouchableOpacity>
        </View>

        {renderDetail('car-sport-outline', 'Marque', item.brand)}
        {renderDetail('calendar-outline', 'Année', item.year)}
        {renderDetail('speedometer-outline', 'Kilométrage', `${item.mileage} km`)}
        {renderDetail('flame-outline', 'Carburant', item.fuel)}
        {renderDetail('swap-horizontal-outline', 'Transmission', item.transmission)}
        {renderDetail('color-palette-outline', 'Couleur', item.color)}
        {renderDetail('flash-outline', 'Puissance', `${item.power} ch`)}
        {renderDetail('water-outline', 'Capacité du réservoir', `${item.tankCapacity} L`)}
        {renderDetail('key-outline', 'Nombre de portes', item.doors)}
        {renderDetail('person-outline', 'Nombre de sièges', item.seats)}
        {renderDetail('leaf-outline', 'Consommation', `${item.consumption} l/100km`)}
        <View style={styles.detailTextContainer}>
          <Icon name="cog-outline" size={20} color="#000" />
          <Text style={styles.detailText}>Équipements:</Text>
          <Text style={styles.detailText}>{item.equipment}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const renderDetail = (iconName, label, value) => (
  <View style={styles.detailTextContainer}>
    <Icon name={iconName} size={20} color="#000" />
    <Text style={styles.detailText}>{label}: {value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FD6A00',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  itemImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    padding: 20,
    marginTop: -20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#FD6A00',
  },
  reserveButton: {
    backgroundColor: '#FD6A00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    width: 140,
  },
  reserveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  detailTextContainer: {
    backgroundColor: '#fff',
    borderColor: '#f4f3f3',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    color: 'black',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Infos;
