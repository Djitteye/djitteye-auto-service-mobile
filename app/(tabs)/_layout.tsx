import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import Header from '../header';
import { useRoute, RouteProp } from '@react-navigation/native';

type TabLayoutRouteParams = {
  firstName: string;
  lastName: string;
  email:string;
  phoneNumber:string;
};
type TabLayoutRouteProp = RouteProp<{ params: TabLayoutRouteParams }, 'params'>;
export default function TabLayout() {
  const route = useRoute<TabLayoutRouteProp>();
  const { firstName, lastName, email, phoneNumber } = route.params || {};
  return (
    
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FD6A00',
        header: () => <Header firstName={firstName} lastName={lastName} />, // Ajout du Header en haut de chaque écran
      }}
    >
      <Tabs.Screen
        name="accueil"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="reservation"
        options={{
          title: 'Réservations',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="shopping-cart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="parking"
        options={{
          title: 'Parking',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="car" color={color} />,
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Messages',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="envelope" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
