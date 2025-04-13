import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

// Importando para el uso de navegacion
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Importando para la implementacion de las fuentes de texto
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Importando pantallas usables
import Welcome from './screens/Welcome';
import Login from './screens/Login';

// Declarando constantes de navegacion
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function NavStack () {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false,}}>
      {/* <Stack.Screen name='Welcome' component={Welcome}/> */}
      <Stack.Screen name='Login' component={Login}/>
    </Stack.Navigator>
  )
}

export default function App() {

   // Declarando fuentes usables en la APP
   const [loaded] = useFonts({
    
    //Fuentes DM Sans
    DMSansLight: require('./assets/fonts/DMSans-Light.ttf'),
    DMSansRegular: require('./assets/fonts/DMSans-Regular.ttf'),
    DMSansMedium: require('./assets/fonts/DMSans-Medium.ttf'),
    DMSansBold: require('./assets/fonts/DMSans-Bold.ttf'),
    DMSansExtraBold: require('./assets/fonts/DMSans-ExtraBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }





  return (
    <GestureHandlerRootView>
    <NavigationContainer style={styles.container} >
      
      <NavStack />  
      
    </NavigationContainer>
  </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
