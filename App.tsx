import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Appearance,BackHandler,ScrollView, StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/home';
const colorScheme = Appearance.getColorScheme();


export default function App() {

  return (
    <>
    <StatusBar style="dark" />
    <ScrollView style={styles.container}>
      <Home />
    </ScrollView>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:'10%'
  },
});
