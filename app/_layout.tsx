import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="profile" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="Infos" options={{ headerShown: false }} />
      <Stack.Screen name="Details" options={{ headerShown: false }} />
      <Stack.Screen name="discussion" options={{ headerShown: false }} />
      <Stack.Screen name="ProfileDetails" options={{ headerShown: false }} />
      <Stack.Screen name="ModifierProfil" options={{ headerShown: false }} />
      
      <Stack.Screen name="inscription" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="NosVoitures" options={{ headerShown: false }} />
      <Stack.Screen name="splash" options={{ headerShown: false }} />
      <Stack.Screen name="pourVous" options={{ headerShown: false }} />
    </Stack>
  );
}
