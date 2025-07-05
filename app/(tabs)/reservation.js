import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
const Reservation = () => {
  return (
    <View style={styles.container}>
      {/* Item 1 */}
     
      <View style={styles.itemContainer}>
        <Image source={require('../../assets/images/toyota1.png')} style={styles.itemImage} />
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemName}>Prado 4X4</Text>
          <View style={styles.buttonRowContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Annuler</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Item 2 */}
      <View style={styles.itemContainer}>
        <Image source={require('../../assets/images/toyota1.png')} style={styles.itemImage} />
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemName}>Prado 4X4</Text>
          
          <View style={styles.buttonRowContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Annuler</Text>
              </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </View>
       {/* Item 1 */}
       <View style={styles.itemContainer}>
        <Image source={require('../../assets/images/toyota1.png')} style={styles.itemImage} />
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemName}>Prado 4X4</Text>

          <View style={styles.buttonRowContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Annuler</Text>
              </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </View>

      {/* Item 2 */}
      <View style={styles.itemContainer}>
        <Image source={require('../../assets/images/toyota1.png')} style={styles.itemImage} />
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemName}>Prado 4X4</Text>
          <View style={styles.buttonRowContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Annuler</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderColor: '#f5f5f5', // Light gray color for the border
    borderWidth: 2, // Add border width
    marginBottom: 20,
    alignItems: 'center',
  },
  itemImage: {
    width: 160,
    height: 110,
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
  buttonRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 0,
    backgroundColor: '#FD6A00',
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Reservation;
