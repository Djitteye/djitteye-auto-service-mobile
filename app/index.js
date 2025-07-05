import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const Connexion = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (email === '' || password === '') {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }

    setLoading(true);

    try {
      const auth = getAuth();
      const firestore = getFirestore();

      if (rememberMe) {
        await setPersistence(auth, browserLocalPersistence);
      }

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDocRef = doc(firestore, 'Utilisateurs', user.uid);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        const { firstName, lastName, email, phoneNumber } = userData;

        Alert.alert('Succès', `Bienvenue, ${firstName} ${lastName} !`);

        navigation.navigate('splash', {
          firstName,
          lastName,
          email,
          phoneNumber,
        });
      } else {
        Alert.alert('Erreur', "Impossible de récupérer les informations de l'utilisateur.");
      }

      setEmail('');
      setPassword('');
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          Alert.alert('Erreur', 'Mot de passe incorrect');
          break;
        case 'auth/user-not-found':
          Alert.alert('Erreur', "L'utilisateur n'existe pas");
          break;
        case 'auth/invalid-email':
          Alert.alert('Erreur', "L'adresse e-mail est invalide");
          break;
        default:
          Alert.alert('Erreur', error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/gris.jpg')} style={styles.image} />
      <Text style={styles.title}>Connectez-vous!</Text>

      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.optionsContainer}>
        {/* Fake checkbox */}
        <TouchableOpacity
          onPress={() => setRememberMe(!rememberMe)}
          style={styles.checkboxWrapper}
        >
          <Icon
            name={rememberMe ? 'check-square' : 'square-o'}
            size={20}
            color="#FD6A00"
          />
          <Text style={styles.checkboxText}>Se souvenir de moi</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={handleLogin}
        style={styles.loginButton}
        disabled={loading}
      >
        <Text style={styles.loginButtonText}>
          {loading ? 'Connexion...' : 'Se connecter'}
        </Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Vous n'avez pas de compte ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('inscription')}>
          <Text style={styles.signUpLink}>Inscrivez-vous</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f3f3',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 20,
    width: '100%',
    height: 54,
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 14,
    padding: 10,
    color: 'black',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    marginLeft: 8,
    color: 'black',
    fontSize: 16,
  },
  forgotPasswordText: {
    color: 'blue',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#FD6A00',
    width: 168,
    padding: 10,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 16,
    color: 'black',
  },
  signUpLink: {
    color: 'blue',
    fontSize: 16,
  },
});

export default Connexion;
