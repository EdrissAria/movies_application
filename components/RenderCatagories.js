import React, {memo} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native'
import { windowWidth } from '../globals/Dimension'
import Images from './Images'

export default memo(({ data, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('movieGenre', { id: data?.id, genre: data?.name })}>
            <View style={styles.catagory}>
                <Image source={Images[`${data?.name == 'Science Fiction'?'Science_Fiction':(data?.name == 'TV Movie'?'TV_Movie':data?.name)}`]} resizeMethod="resize" style={styles.bgimage}/>
                <Text style={styles.gen}>{data?.name}</Text>
            </View>
        </TouchableOpacity>
    )
})

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
    }, 
    gen: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        textAlign: 'center', 
        paddingVertical: 8,
        width: '100%',
        color: '#000', 
        backgroundColor: 'rgba(250, 250, 250, 0.5)' 
    }, 
    catagory: {
        width: (windowWidth - 64) / 2, 
        height: 140, 
        borderRadius: 26, 
        marginHorizontal: 6, 
        zIndex: 1000, 
        overflow: 'hidden' 
    }, 
    bgimage: { 
        position: 'relative',
        width: '100%', 
        height: '100%', 
        justifyContent: 'center', 
        borderColor: 'rgb(234, 88, 24)', 
        borderWidth: 1 
    }
})