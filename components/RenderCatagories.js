import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { windowWidth } from '../globals/Dimension'
import Images from './Images'
import ExpoFastImage from 'expo-fast-image'

const RenderCatagories = ({ data, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('movieGenre', { id: data?.id, genre: data?.name })}>
            <View style={styles.catagory}>
                <ExpoFastImage source={Images[`${data?.name == 'Science Fiction'?'Science_Fiction':(data?.name == 'TV Movie'?'TV_Movie':data?.name)}`]} resizeMode="cover" style={{ width: '100%', height: '100%', justifyContent: 'center', borderColor: 'rgb(234, 88, 24)', borderWidth: 1 }}>
                    <Text style={styles.gen}>{data?.name}</Text>
                </ExpoFastImage>
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
    genre: {
        color: '#fff',
        fontSize: 12,
        opacity: 0.6,
    }, 
    gen: {
        textAlign: 'center', 
        paddingVertical: 8, 
        backgroundColor: 'rgba(250, 250, 250, 0.5)' 
    }, 
    catagory: {
        width: (windowWidth - 64) / 2, 
        height: 140, 
        borderRadius: 26, 
        marginHorizontal: 6, 
        zIndex: 1000, 
        overflow: 'hidden' 
    }
})

export default React.memo(RenderCatagories)