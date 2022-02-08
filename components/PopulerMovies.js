import React from 'react'
import {StyleSheet, View , Image, Text, TouchableOpacity} from 'react-native'
import { windowWidth } from '../globals/Dimension'
 
export const PopulerMovies = ({data, navigation}) =>{
    return(
        <TouchableOpacity onPress={()=> navigation.navigate('movieDetails', {data})}>
            <Image source={data.image} style={{ width: (windowWidth - 76)/3, height: 140, borderRadius: 14,marginHorizontal: 6 }}/>
            <View style={{ flexDirection: 'column', paddingHorizontal: 8, marginTop: 6}}>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.genre}>{data.genre}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#eee', 
        fontSize: 12, 
    },
    genre:{
        color: '#fff',
        fontSize: 12, 
        opacity: 0.6
    }
})