import React, { useEffect, useState } from "react";
import {StyleSheet,Dimensions,View, Text,Image, ImageBackground, FlatList, TouchableOpacity} from 'react-native'
import s from '../../styles/main';
import { SharedElement } from "react-navigation-shared-element";
import {explorer} from '../methods/universal';
import  Icon  from '@expo/vector-icons/Ionicons'
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
const {width,height}=Dimensions.get('window')
interface newobjtype{
    method:string,
    headers:{ [key: string]: string; }
}

const Item = ({title}:any) => (
  <TouchableWithoutFeedback onPress={():void=>title.opener(title)}>
    <ImageBackground source={{uri:title.item.image.url}}
    imageStyle={{ borderRadius: 15}}
        style={{
            width:(width-10),height:(width-10),alignSelf:'center',paddingLeft:20,paddingBottom:20,justifyContent:'flex-end',marginTop:40
        }}
    >
           <Text style={[s.f28,s.b,s.cllight,styles.textWithShadow]}>{title.item.head}</Text>
           <Text style={[s.f18,s.b,s.cllight,styles.textWithShadow]}>{ new Date(title.item.publishDateTime).toDateString()}</Text>
        </ImageBackground>
      </TouchableWithoutFeedback>
);

const Home=(props:any)=>{
    const [value, setValue] = useState<any>([]);
    const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
    const onRefresh = () => {
      //set isRefreshing to true
      setIsRefreshing(true)
      explorer().then((data:any)=>{
        setValue(data.items);
        setIsRefreshing(false);
      });
      // and set isRefreshing to false at the end of your callApiMethod()
    }

    const CardFunction = (data:any):void =>{
      props.navigation.navigate('ProfileUser',data)
    }

    useEffect(() => {
        explorer().then((data:any)=>{
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
        item.opener=CardFunction;
        return <Item title={item} />
    };
    return(
        <View style={[s.fl1,s.mdtp30,{backgroundColor:"#FFF"}]}>
            <View style={[s.fl4,{borderRadius:25}]}>
                
                    <FlatList
                         data={value}
                         renderItem={renderFun}
                         onRefresh={onRefresh}
                         refreshing={isRefreshing}
                         keyExtractor={item => item.id}
                         stickyHeaderHiddenOnScroll={false}
                         ListHeaderComponent={():any =>(
                          <View style={[s.fl1,s.row,s.pdtp10,s.pdbt20,{backgroundColor:'#FFF'}]}>
                            <View style={[s.flsemi,s.pdlt10]}>
                              <TouchableOpacity onPress={()=>props.navigation.openDrawer()}  style={{width:50,height:50,justifyContent:'center'}}>
                                <Icon name="menu" size={35} />
                              </TouchableOpacity>
                              
                            </View>
                            <View style={[s.fl2]}>
                              <Text style={[s.f24,s.b,s.cllightlighter,{paddingLeft:(width/4)}]}>Latest</Text>
                              <Text style={[s.f15,{paddingLeft:(width/8)}]}>Get the latest in Hollywood</Text>
                            </View>
                          </View>
                          )}
                          stickyHeaderIndices={[0]}

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