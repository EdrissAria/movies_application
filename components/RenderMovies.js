import React, {memo} from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native'
import { windowWidth } from '../globals/Dimension'
import ExpoFastImage from 'expo-fast-image'
import { useNavigate } from '../hooks/useNavigate' 

export default memo(({data }) =>{
    const navigateTo = useNavigate('movieDetails', {id: data?.id}); 
    return(
        <TouchableOpacity onPress={navigateTo}>
            <View style={styles.movie}>
                {data.poster_path == null ?
                <Image source={require('../assets/images/genre.webp')} resizeMethod="resize" style={styles.image}/>:
                // <Image source={{ uri:`https://image.tmdb.org/t/p/w185${data.poster_path}` }} resizeMethod="resize" style={styles.image}/>
                <ExpoFastImage uri={`https://image.tmdb.org/t/p/w185${data.poster_path}`} resizeMethod="scale" cacheKey={data.id} style={styles.image}/>
                }
                <View style={styles.info}>
                    <Text style={styles.title}>{data?.title?.length > 11? data?.title?.slice(0, 10)+'..':data?.title}</Text>
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
        textTransform: 'capitalize'
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
        marginHorizontal: 6,
        marginVertical: 3
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