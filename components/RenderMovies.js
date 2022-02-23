import React from 'react'
import {StyleSheet, View , Image, Text, TouchableOpacity} from 'react-native'
import { windowWidth } from '../globals/Dimension'
 
export const RenderMovies = ({data, navigation}) =>{
    return(
        <TouchableOpacity onPress={()=> navigation.navigate('movieDetails', {data})}>
            <View style={{ width: (windowWidth - 76)/3, height: 180, borderRadius: 14,marginHorizontal: 6}}>
                <Image source={{ uri: "https://image.tmdb.org/t/p/w300"+data.poster_path }} style={{ width: '100%', height: 140, borderRadius: 14,marginHorizontal: 6 }}/>
                <View style={{ flexDirection: 'column', paddingHorizontal: 8, marginTop: 6}}>
                    <Text style={styles.title}>{data?.title?.length > 11? data?.title?.slice(0, 11)+'..':data?.title}</Text>
                    <Text style={styles.genre}>vote: {data?.vote_count}</Text>
                </View>
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