import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Bienvenue = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { firstName, lastName, email, phoneNumber } = route.params || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('(tabs)', {
        firstName,
        lastName,
        email,
        phoneNumber,
      });
    }, 3000); // Redirige après 3 secondes

    return () => clearTimeout(timer);
  }, [navigation, firstName, lastName, email, phoneNumber]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/blanc.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Djitteye auto service</Text>
      <Text style={styles.subtitle}>
        Parcourez notre sélection exceptionnelle pour trouver la voiture de vos rêves.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 100,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 70,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    marginTop: 70,
    paddingHorizontal: 20,
  },
});

export default Bienvenue;
