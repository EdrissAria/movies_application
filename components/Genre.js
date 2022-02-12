import React from 'react'
import {StyleSheet, View , Image, Text, TouchableOpacity} from 'react-native'
import { windowWidth } from '../globals/Dimension'
 
export const Genre = ({data, navigation}) =>{
    return(
        <TouchableOpacity onPress={()=> navigation.navigate('movieDetails', {data})}>
            <Image source={data?.image} style={{ width: (windowWidth - 76)/3, height: 140, borderRadius: 14,marginHorizontal: 6 }}/>
            <View style={{ flexDirection: 'column',paddingHorizontal: 8, marginTop: 6, alignItems: 'center',}}>
                <Text style={styles.title}>{data.name.length > 14 ? data.name.slice(0, 14)+"...":data.name}</Text>
                <Text style={styles.genre}>{data.genre}</Text>
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