import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  //defining functions
  function display(id:number,name:string){
    console.log(id,name);
  }


  useEffect(()=>{
    //variable declaration
    var message:boolean =false; 
    console.log(message)

    //type assertion
    //display(1,"NAME");

    //Interface definations
    interface newobjtype{
      id:number,
      name:string,
      data:(string|number)[],
      message:()=>void
    }

    var newobj:newobjtype={
      id:1,
      name:"Shuja",
      data:["one",1,2,"Hello",23],
      message:():void=>console.log("heello")
    }

    console.log(newobj);

  },[])
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
