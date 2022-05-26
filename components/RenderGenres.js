import React, { memo } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { windowWidth } from '../globals/Dimension'

export default memo(({ data, navigation }) => {
    const navigateTo = () => navigation.navigate('movieGenre', { id: data?.id, genre: data?.name })
    return (
        <TouchableOpacity onPress={navigateTo}>
            <View style={styles.catagory}>
                <Image source={require('../assets/images/genre.webp')} resizeMethod="resize" style={styles.bgimage} />
                <View style={styles.genre}>
                    <Text style={styles.gen}>{data?.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    title: {
        color: '#eee',
        fontSize: 12,
        fontFamily: 'roboto',
        textTransform: 'capitalize'
    },
    genre: {
        position: 'absolute',
        justifyContent: 'center',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 60,
        backgroundColor: 'rgba(255, 60, 24, 0.8)'
    },
    gen: {
        fontFamily: 'roboto',
        textAlign: 'center',
        fontSize: 16,
        width: '100%',
        color: '#eee',
    },
    catagory: {
        width: (windowWidth - 64) / 2,
        height: 140,
        borderRadius: 26,
        marginHorizontal: 6,
        zIndex: 1000,
        overflow: 'hidden',
        marginTop: 20
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