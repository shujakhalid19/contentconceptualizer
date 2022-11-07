import React from "react";
import {Dimensions,View,Text,Image} from 'react-native'
import { SharedElement } from "react-navigation-shared-element";
import s from '../../styles/main';
const {width,height}=Dimensions.get('window')

const Blog= (props:any) => {
    const data:any=props.route.params.item;
    const key:string=props.route.key;
    return(
        <View style={[s.fl1,s.mdtp20]}>
            <SharedElement id={key}>
                <Image source={{uri:data.image.url}} style={{width:width,height:height/2}} />
            </SharedElement>

            <Text>Hello{JSON.stringify(key)}</Text>
        </View>
    )
}

export default Blog;