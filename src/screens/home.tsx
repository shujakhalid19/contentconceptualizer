import React, { useEffect, useState } from "react";
import {StyleSheet,Dimensions,View, Text,Image, ImageBackground, FlatList} from 'react-native'
import s from '../../styles/main';
import {explorer} from '../methods/universal';
const {width,height}=Dimensions.get('window')
interface newobjtype{
    method:string,
    headers:{ [key: string]: string; }
}

interface itemobj{
    id:string,
    title:string
}



const DATA:itemobj[] = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  const Item = ({title}:any) => (

    <ImageBackground source={{uri:title.item.image.url}}
    imageStyle={{ borderRadius: 15}}
        style={{
            width:(width-10),height:(width-10),alignSelf:'center',paddingLeft:20,paddingBottom:20,justifyContent:'flex-end',marginTop:40
        }}
    >
           <Text style={[s.f28,s.b,s.cllight,styles.textWithShadow]}>{title.item.head}</Text>
           <Text style={[s.f18,s.b,s.cllight,styles.textWithShadow]}>{ new Date(title.item.publishDateTime).toDateString()}</Text>
        </ImageBackground>
  );

const Home=(props:any)=>{
    const [value, setValue] = useState<any>([]);
    useEffect(() => {
        explorer().then((data:any)=>{
            console.log(data);
            setValue(data.items);
        });
        // const genRandomKey = async () => {
        //       const options:newobjtype = {
        //         method: 'GET',
        //         headers: {
        //             'X-RapidAPI-Key': 'a36658c26bmshd702a66ffacac19p103156jsn3c69b0bd736b',
        //             'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        //         }
        //     };
        //     var req=await fetch('https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US', options);
        //     var res= await req.json();
        //     var titles:(string[])=[];
        //     await res.map((s:string,i:number)=>{
        //         var str=s.split('/')[2];
        //         titles.push(str);
        //     })
        //     setValue(titles);
        // };
        
        // genRandomKey();
        
    },[])

    
    const renderFun = (item:any ) => {
        console.log("HELLOOOOOO",item);
        return <Item title={item} />
    };
    return(
        <View style={[s.mdtp30]}>
            <Text style={[s.heading2,s.pdlt10,s.pdbt10,s.b,s.cllightlighter]}>Home</Text>
            <View style={[s.fl1,{borderRadius:25,paddingBottom:100}]}>
                
                    <FlatList
                         data={value}
                         renderItem={renderFun}
                         keyExtractor={item => item.id}

                     />
                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    textWithShadow:{
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -2, height: 2},
        textShadowRadius: 20
    }
  });

  
export default Home;