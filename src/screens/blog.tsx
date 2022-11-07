import React from "react";
import {Dimensions,View,Text,Image, ScrollView} from 'react-native'
import s from '../../styles/main';
const {width,height}=Dimensions.get('window')

const Blog= (props:any):any => {
    const data:any=props.route.params.item;
    const key:number=props.route.params.index;
    return(
        <ScrollView>
            <View style={[s.fl1,s.mdtp20,s.pdbt20]}>
                <Image source={{uri:data.image.url}} style={{width:width,height:height/2}} resizeMode={'cover'} />
                <View style={[s.fl1,s.pdlt10]}>
                    <Text style={[s.f28,s.mdtp20,s.pdrt30,{fontWeight:'600'}]}>{data.head}</Text>

                    <Text style={[s.f22,s.mdtp10]}>{data.body}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Blog;