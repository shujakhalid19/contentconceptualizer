import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'

import { API_URL } from "@env";


import { Platform,Appearance,BackHandler,ScrollView, StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/home';
import Blog from './src/screens/blog';

const colorScheme = Appearance.getColorScheme();

{/* <StatusBar style="dark" />
<ScrollView style={styles.container}>
  <Home />
</ScrollView> */} 
const SharedStack=createStackNavigator();

const Arena = (props:any):any  =>{
  return(
  <SharedStack.Navigator
  screenOptions={{
    cardStyleInterpolator: Platform.OS==='ios' ? CardStyleInterpolators.forVerticalIOS : CardStyleInterpolators.forBottomSheetAndroid,
    gestureEnabled: false
  }}
     >
        <SharedStack.Screen name="SwiperMain" component={Home} options={{headerShown:false}} />
        <SharedStack.Screen name="ProfileUser" component={Blog} options={{headerShown:false}} />
    </SharedStack.Navigator>
  )
}


const Drawer = createDrawerNavigator();
export default function App() {
  useEffect(()=>{
    console.log(API_URL);
  },[])
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Main'>
        <Drawer.Screen name="Main" component={Arena} options={{headerShown:false}} />
      </Drawer.Navigator>
    </NavigationContainer> 
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:'10%'
  },
});
