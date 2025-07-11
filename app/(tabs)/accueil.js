import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import de FontAwesome
import { useNavigation, useRoute } from '@react-navigation/native';

const Accueil = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { firstName, lastName } = route.params || {};  

  const images = [
    { source: require('../../assets/images/mercede.png'), name: 'Mercedes' },
    { source: require('../../assets/images/kia.jpg'), name: 'Kia' },
    { source: require('../../assets/images/renault.png'), name: 'Renault' },
    { source: require('../../assets/images/toyota.jpg'), name: 'Toyota' },
    { source: require('../../assets/images/audi.png'), name: 'Audi' },
    { source: require('../../assets/images/mercede.png'), name: 'Mercedes' },
    { source: require('../../assets/images/kia.jpg'), name: 'Kia' },
    { source: require('../../assets/images/renault.png'), name: 'Renault' },
    { source: require('../../assets/images/toyota.jpg'), name: 'Toyota' },
    { source: require('../../assets/images/audi.png'), name: 'Audi' },
    { source: require('../../assets/images/mercede.png'), name: 'Mercedes' },
    { source: require('../../assets/images/kia.jpg'), name: 'Kia' },
    { source: require('../../assets/images/renault.png'), name: 'Renault' },
    { source: require('../../assets/images/toyota.jpg'), name: 'Toyota' },
    { source: require('../../assets/images/audi.png'), name: 'Audi' },
  ];

  const moreImages = [
    { source: require('../../assets/images/toyota1.png'), name: 'Prado 4X4', price: '55Millions FCFA' },
    { source: require('../../assets/images/kia.png'), name: 'KIA EV6-2022', price: '35Millions FCFA' },
    { source: require('../../assets/images/mercedesbenz.jpg'), name: 'Mercedes Benz', price: '30Millions FCFA' },
    { source: require('../../assets/images/mercedesgla.jpg'), name: 'Mercedes GLA', price: '30Millions FCFA' },
    { source: require('../../assets/images/toyota1.png'), name: 'Prado 4X4', price: '55Millions FCFA' },
    { source: require('../../assets/images/kia.png'), name: 'KIA EV6-2022', price: '35Millions FCFA' },
    { source: require('../../assets/images/mercedesbenz.jpg'), name: 'Mercedes Benz', price: '30Millions FCFA' },
    { source: require('../../assets/images/mercedesgla.jpg'), name: 'Mercedes GLA', price: '30Millions FCFA' },
  ];

  const carouselImages = [
    { source: require('../../assets/images/carrousel1.png') },
    { source: require('../../assets/images/carrousel2.png') },
    { source: require('../../assets/images/carrousel3.jpg') },
    { source: require('../../assets/images/carrousel4.jpg') },
    { source: require('../../assets/images/carrousel1.png') },
    { source: require('../../assets/images/carrousel2.png') },
    { source: require('../../assets/images/carrousel3.jpg') },
    { source: require('../../assets/images/carrousel4.jpg') },
    { source: require('../../assets/images/carrousel1.png') },
    { source: require('../../assets/images/carrousel2.png') },
    { source: require('../../assets/images/carrousel3.jpg') },
    { source: require('../../assets/images/carrousel4.jpg') },
    { source: require('../../assets/images/carrousel1.png') },
    { source: require('../../assets/images/carrousel2.png') },
    { source: require('../../assets/images/carrousel3.jpg') },
    { source: require('../../assets/images/carrousel4.jpg') },
    { source: require('../../assets/images/carrousel1.png') },
    { source: require('../../assets/images/carrousel2.png') },
    { source: require('../../assets/images/carrousel3.jpg') },
    { source: require('../../assets/images/carrousel4.jpg') },
    { source: require('../../assets/images/carrousel1.png') },
    { source: require('../../assets/images/carrousel2.png') },
    { source: require('../../assets/images/carrousel3.jpg') },
    { source: require('../../assets/images/carrousel4.jpg') },
    { source: require('../../assets/images/carrousel1.png') },
    { source: require('../../assets/images/carrousel2.png') },
    { source: require('../../assets/images/carrousel3.jpg') },
    { source: require('../../assets/images/carrousel4.jpg') },
  ];

  const scrollViewRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const pourVousScrollRef = useRef(null);
  const [currentPourVousIndex, setCurrentPourVousIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % carouselImages.length;
      setCurrentIndex(nextIndex);
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ x: nextIndex * 300, animated: true });
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex, carouselImages.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentPourVousIndex + 1) % moreImages.length;
      setCurrentPourVousIndex(nextIndex);
      if (pourVousScrollRef.current) {
        pourVousScrollRef.current.scrollTo({ x: nextIndex * 180, animated: true });
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentPourVousIndex, moreImages.length]);

  const handleButtonPress = () => {
    // Action à exécuter lors de l'appui sur le bouton
    console.log("Bouton 'Voir tout' pressé");
    // Ici, vous pouvez naviguer vers une autre page ou effectuer une autre action
  };

  return (
    <View style={styles.container}>
      {/* En-tête avec le nom de l'utilisateur */}
     
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

      {/* Carrousel d'images automatique */}
      <View style={styles.carouselContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}
          style={styles.carouselScrollView}
          onScroll={(event) => setScrollPosition(event.nativeEvent.contentOffset.x)}
          scrollEventThrottle={16}
          pagingEnabled
        >
          {carouselImages.map((item, index) => (
            <View key={index} style={styles.carouselItem}>
              <Image source={item.source} style={styles.carouselImage} />
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Sections de défilement */}
      <View style={styles.scrollContainer}>
        <View style={styles.scrollSection}>
          <Text style={styles.scrollTitle}>Nos marques</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.imageScrollView}
            contentContainerStyle={styles.scrollViewContent}
          >
            {images.map((item, index) => (
              <TouchableOpacity key={index} style={styles.imageContainer} onPress={() => handleImagePress(index, 'first')}>
                <View style={styles.imageWrapper}>
                  <Image source={item.source} style={styles.scrollImage} />
                </View>
                <View style={styles.imageOverlay}>
                  <Text style={styles.imageLabel}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Titre et carrousel automatique pour la section "Pour vous" */}
          <View style={styles.scrollTitleContainer}>
            <Text style={styles.scrollTitle}>Pour vous</Text>
            <TouchableOpacity onPress={() => navigation.navigate('pourVous')}>
              <Text style={styles.seeAllButton}>Voir tout</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            ref={pourVousScrollRef}
            style={styles.imageScrollView}
            contentContainerStyle={styles.scrollViewContent}
          >
            {moreImages.map((item, index) => (
              <TouchableOpacity key={index} style={styles.imageContainerLarge} onPress={() => handleImagePress(index, 'second')}>
                <View style={styles.imageWrapperLarge}>
                  <Image source={item.source} style={styles.scrollImageLarge} />
                </View>
                <View style={styles.imageOverlay}>
                  <Text style={styles.imageLabel}>{item.name}</Text>
                  <Text style={styles.imagePrice}>{item.price}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

// Styles pour les composants
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f3f3',
    padding: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginBottom: 20,
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
  carouselContainer: {
    height: 150,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#fff',
    borderRadius: 10,
  },
  carouselScrollView: {
    flex: 1,
  },
  carouselItem: {
    width: 100,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  carouselImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  seeAllButton: {
    fontSize: 14,
    color: '#FD6A00',
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingBottom: 0,
    paddingTop: 20,
  },
  scrollSection: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginTop: -22,
  },
  scrollTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  scrollTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  arrowIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#FD6A00',
  },
  imageScrollView: {
    marginTop: 0,
    marginBottom: 20,
  },
  imageContainer: {
    width: 100,
    padding: 5,
    marginTop: 10,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#F4F3F3',
  },
  imageContainerLarge: {
    width: 160,
    padding: 5,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#F4F3F3',
  },
  imageWrapper: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageWrapperLarge: {
    width: '100%',
    height: 90,
    borderRadius: 10,
    overflow: 'hidden',
  },
  scrollImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  scrollImageLarge: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageOverlay: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  imageLabel: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  imagePrice: {
    color: '#000',
    fontSize: 12,
    marginTop: 2,
  },
});

export default Accueil;