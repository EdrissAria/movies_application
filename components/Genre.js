import React from 'react'
import {StyleSheet, View , Image, Text, TouchableOpacity} from 'react-native'
import { windowWidth } from '../globals/Dimension'
 
const Genre = ({data, navigation}) =>{
    return(
        <TouchableOpacity onPress={()=> navigation.navigate('movieDetails', {id: data?.id})}>
            <Image source={{ uri: "https://image.tmdb.org/t/p/w300"+data?.poster_path }} style={{ width: (windowWidth - 76)/3, height: 140, borderRadius: 14,marginHorizontal: 6 }}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{data?.title?.length > 14 ? data?.title?.slice(0, 14)+"...":data?.title}</Text>
                <Text style={styles.genre}>vote: {data?.vote_count}</Text>
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
    }, 
    textContainer: {
        flexDirection: 'column',
        paddingHorizontal: 8, 
        marginTop: 6, 
        alignItems: 'center'
    }
})

export default React.memo(Genre)