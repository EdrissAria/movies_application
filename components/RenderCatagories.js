import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { windowWidth } from '../globals/Dimension'
import { BlurView } from "@react-native-community/blur";

export const RenderCatagories = ({ data, navigation }) => {
    // let genre_image = data?.name ? require(`../assets/images/${data?.name}.jpg`) : require(`../assets/images/Action.jpg`); 
    return (
        <TouchableOpacity onPress={() => navigation.navigate('movieGenre', { id: data?.id, genre: data?.name })}>
            <View style={{ width: (windowWidth - 64) / 2, height: 140, borderRadius: 26, marginHorizontal: 6, zIndex: 1000, overflow: 'hidden' }}>
                <ImageBackground source={require(`../assets/images/Action.jpg`)} resizeMode="cover" style={{ width: '100%', height: '100%', justifyContent: 'center', borderColor: 'rgb(234, 88, 24)', borderWidth: 1 }}>
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