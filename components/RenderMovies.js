import React, {memo} from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { windowWidth } from '../globals/Dimension'
import ExpoFastImage from 'expo-fast-image'
 
export default memo(({data, navigation}) =>{
    return(
        <TouchableOpacity onPress={()=> navigation.navigate('movieDetails', {id: data?.id})}>
            <View style={styles.movie}>
                <ExpoFastImage uri={`https://image.tmdb.org/t/p/w300${data.poster_path}`} cacheKey={data.id} style={styles.image}/>
                <View style={styles.info}>
                    <Text style={styles.title}>{data?.title?.length > 11? data?.title?.slice(0, 11)+'..':data?.title}</Text>
                    <Text style={styles.genre}>vote: {data?.vote_count}</Text>
                </View>
            </View>
        </TouchableOpacity>        
    )
})

const styles = StyleSheet.create({
    title: {
        color: '#eee', 
        fontSize: 12,
    },
    genre:{
        color: '#fff',
        fontSize: 12, 
        opacity: 0.6
    }, 
    movie: {
        width: (windowWidth - 76)/3, 
        height: 180, 
        borderRadius: 14,
        marginHorizontal: 6
    }, 
    info: {
        flexDirection: 'column', 
        paddingHorizontal: 8, 
        marginTop: 6
    }, 
    image: { 
        width: '100%', 
        height: 140, 
        borderRadius: 14,
        marginHorizontal: 6 
    }
})