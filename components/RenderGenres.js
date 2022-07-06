import { memo } from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { windowHeight, windowWidth } from '../globals/Dimension'
import { useNavigate } from '../hooks/useNavigate'
import Images from '../globals/Images'

export default memo(({ data }) => {
    const [navigateTo] = useNavigate('movieGenre', { id: data?.id, genre: data?.name }); 
    return (
        <TouchableOpacity onPress={navigateTo}>
            <View style={styles.catagory}>
                <Image source={Images[`${data?.name == 'Science Fiction'?'Science_Fiction':(data?.name == 'TV Movie'?'TV_Movie':data?.name)}`]} resizeMode="contain" style={styles.bgimage}/>
            </View>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    catagory: {
        width: (windowWidth - 74) / 2,
        height: windowHeight * 0.21,
        marginHorizontal: 9,
        marginTop: 20
    },
    bgimage: {
        width: '100%',
        height: '100%',
    }
})