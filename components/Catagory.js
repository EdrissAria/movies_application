import React from 'react'
import {StyleSheet, View , Image, Text, TouchableOpacity} from 'react-native'
import { windowWidth } from '../globals/Dimension'
 
export const Catagory = ({data, navigation}) =>{
    return(
        <TouchableOpacity onPress={()=> navigation.navigate('movieDetails', {data})}>
            <Image source={data?.image} style={{ width: (windowWidth - 64)/2, height: 180, borderRadius: 14,marginHorizontal: 6 }}/>
            <View style={{ flexDirection: 'column', paddingHorizontal: 8, marginTop: 6, alignItems: 'center',}}>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.genre}>{data.genre}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#eee', 
        fontSize: 16,
        fontFamily: 'roboto-regular',
    },
    genre:{
        color: '#fff',
        fontSize: 14, 
        opacity: 0.6, 
    }
})