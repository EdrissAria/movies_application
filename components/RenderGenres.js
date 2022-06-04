import { memo } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { windowWidth } from '../globals/Dimension'
import { useNavigate } from '../hooks/useNavigate'
import { colors, fonts } from '../globals/ConstantStyles'

export default memo(({ data }) => {
    const [navigateTo] = useNavigate('movieGenre', { id: data?.id, genre: data?.name }); 
    return (
        <TouchableOpacity onPress={navigateTo}>
            <View style={styles.catagory}>
                <ImageBackground source={require('../assets/images/genre.webp')} resizeMode="cover" style={styles.bgimage} >
                <View style={styles.genre}>
                    <Text style={styles.gen}>{data?.name}</Text>
                </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    title: {
        color: colors.lightGray,
        fontSize: fonts.exSmall,
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
        backgroundColor: colors.transparent
    },
    gen: {
        fontFamily: 'roboto',
        textAlign: 'center',
        fontSize: fonts.medium,
        width: '100%',
        color: colors.lightGray,
    },
    catagory: {
        width: (windowWidth - 74) / 2,
        height: 140,
        borderRadius: 26,
        marginHorizontal: 9,
        zIndex: 1000,
        overflow: 'hidden',
        marginTop: 20
    },
    bgimage: {
        width: '100%',
        height: '100%',
    }
})