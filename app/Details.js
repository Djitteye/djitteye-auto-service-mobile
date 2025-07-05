import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [selection, setSelection] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleConfirm = () => {
    console.log(`Choix confirmé: ${selection}`);
    console.log(`Switch activé: ${isChecked ? 'Oui' : 'Non'}`);
    setModalVisible(false);
  };

  const renderDetail = (iconName, label, value) => (
    <View style={styles.detailTextContainer}>
      <Icon name={iconName} size={20} color="#000" />
      <Text style={styles.detailText}>{label}: {value}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.navigate('pourVous')}
      >
        <Icon name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Item Image */}
      <Image 
        source={typeof item.itemImage === 'string' ? { uri: item.itemImage } : item.itemImage} 
        style={styles.itemImage} 
      />

      {/* Item Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.title}>{item.itemName}</Text>
            <Text style={styles.price}>{item.itemPrice}</Text>
          </View>
          <TouchableOpacity style={styles.reserveButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.reserveButtonText}>Réserver</Text>
          </TouchableOpacity>
        </View>

        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Choisissez votre option :</Text>

              <TouchableOpacity
                style={[styles.optionButton, selection === 'Achat' && styles.selectedButton]}
                onPress={() => setSelection('Achat')}
              >
                <Text style={styles.optionText}>Achat</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.optionButton, selection === 'Location' && styles.selectedButton]}
                onPress={() => setSelection('Location')}
              >
                <Text style={styles.optionText}>Location</Text>
              </TouchableOpacity>

              <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Accepter les termes et conditions</Text>
                <Switch
                  value={isChecked}
                  onValueChange={setIsChecked}
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={isChecked ? '#f5dd4b' : '#f4f3f4'}
                />
              </View>

              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleConfirm}
              >
                <Text style={styles.confirmButtonText}>Confirmer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Détails techniques */}
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
        </View>
        <Text style={[styles.detailText, { marginLeft: 30 }]}>{item.equipment}</Text>
      </View>
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
  itemImage: {
    width: '100%',
    height: 250,
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  optionButton: {
    padding: 10,
    backgroundColor: '#f2f2f2',
    marginBottom: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#FD6A00',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  switchLabel: {
    marginRight: 10,
    fontSize: 14,
    color: '#000',
  },
  confirmButton: {
    backgroundColor: '#FD6A00',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Details;
