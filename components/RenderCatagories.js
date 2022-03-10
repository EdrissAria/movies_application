import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { windowWidth } from '../globals/Dimension'
import { BlurView } from "@react-native-community/blur";
import Images from './Images'

export const RenderCatagories = ({ data, navigation }) => {
    // const genre_image = data == null ? require('../assets/images/Action.jpg'):require('../assets/images/'+data?.name+'.jpg');
    return (
        <TouchableOpacity onPress={() => navigation.navigate('movieGenre', { id: data?.id, genre: data?.name })}>
            <View style={{ width: (windowWidth - 64) / 2, height: 140, borderRadius: 26, marginHorizontal: 6, zIndex: 1000, overflow: 'hidden' }}>
                <ImageBackground source={Images[`${data?.name == 'Science Fiction'?'Science_Fiction':(data?.name == 'TV Movie'?'TV_Movie':data?.name)}`]} resizeMode="cover" style={{ width: '100%', height: '100%', justifyContent: 'center', borderColor: 'rgb(234, 88, 24)', borderWidth: 1 }}>
                    <Text style={{ textAlign: 'center', paddingVertical: 8, backgroundColor: 'rgba(250, 250, 250, 0.5)' }}>{data?.name}</Text>
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
    genre: {
        color: '#fff',
        fontSize: 12,
        opacity: 0.6,
    }
})