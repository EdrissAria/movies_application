import React from 'react'
import {StyleSheet, Image,TouchableOpacity} from 'react-native'
 
export const MovieActors = ({data, navigation}) =>{
    return(
        <TouchableOpacity onPress={()=> navigation.navigate('actorsDetails', {data})}>
            <Image source={data.image} style={{ width: 60, height: 80, borderRadius: 10, marginHorizontal: 6 }}/>
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