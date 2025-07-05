import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { firestore } from '../FirebaseConfig'; // Assurez-vous que le chemin est correct


const Inscription = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Erreur', 'Les mots de passe ne correspondent pas');
      return;
    }

    setLoading(true);

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Utilisation de l'UID de l'utilisateur comme ID du document dans Firestore
      const userDocRef = doc(firestore, 'Utilisateurs', user.uid);

      // Ajout des informations de l'utilisateur dans Firestore
      await setDoc(userDocRef, {
        firstName,
        lastName,
        email,
        phoneNumber,
        userId: user.uid, // Enregistrer l'UID pour une future référence si nécessaire
      });

      Alert.alert('Succès', 'Inscription réussie !', [
        { text: 'OK', onPress: () => navigation.navigate('index') },
      ]);

      // Réinitialiser les champs du formulaire après l'inscription
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      if (error.code === 'permission-denied') {
        Alert.alert('Erreur', 'Permissions insuffisantes. Veuillez vérifier vos règles de sécurité Firestore.');
      } else {
        Alert.alert('Erreur', error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscrivez-vous!</Text>

      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Prénom"
          placeholderTextColor="#999"
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nom"
          placeholderTextColor="#999"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>

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
        <Icon name="phone" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Téléphone"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirmer le mot de passe"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <TouchableOpacity onPress={handleSignup} style={styles.signupButton} disabled={loading}>
        <Text style={styles.signupButtonText}>{loading ? 'Inscription...' : "S'inscrire"}</Text>
      </TouchableOpacity>

      <View style={styles.loginLinkContainer}>
        <Text style={styles.loginLinkText}>Vous avez déjà un compte ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('index')}>
          <Text style={styles.loginLink}>Connectez-vous</Text>
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
    backgroundColor: '#F6F6F6',
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
    width: 300,
    height: 54,
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 17,
    padding: 10,
    color: 'black',
  },
  signupButton: {
    backgroundColor: '#FD6A00',
    width: 168,
    padding: 10,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: 'center',
  },
  signupButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginLinkText: {
    color: 'black',
    fontSize: 16,
  },
  loginLink: {
    color: 'blue',
    fontSize: 16,
  },
});

export default Inscription;
