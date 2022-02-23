import React from 'react'
import {StyleSheet, View , Image, Text, TouchableOpacity, ImageBackground} from 'react-native'
import { windowWidth } from '../globals/Dimension'
 
export const RenderCatagories = ({data, navigation}) =>{
    return(
        <TouchableOpacity onPress={()=> navigation.navigate('movieGenre', {id: data?.id})}>
            <View style={{ width: (windowWidth - 64)/2, height: 140, borderRadius: 26, marginHorizontal: 6, zIndex: 1000, overflow: 'hidden'}}>
                <ImageBackground source={require('../assets/images/action.jpg')} resizeMode="cover" style={{ width: '100%', height: '100%', justifyContent: 'center'}}>
                    <Text style={{ textAlign: 'center', paddingVertical: 8, backgroundColor: 'rgba(250, 250, 250, 0.5)'}}>{data?.id}</Text>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    title: {
        color: '#eee', 
        fontSize: 12,
        fontFamily: 'roboto-regular',
        textTransform: 'capitalize'
    },
    genre:{
        color: '#fff',
        fontSize: 12, 
        opacity: 0.6, 
    }
})