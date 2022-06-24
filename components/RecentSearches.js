import {memo} from 'react'
import {StyleSheet, View,TouchableOpacity, Image} from 'react-native'
import { windowWidth } from '../globals/Dimension'
import { useNavigate } from '../hooks/useNavigate' 
import { colors, fonts } from '../globals/ConstantStyles'

export default memo(({data}) =>{
    const [navigateTo] = useNavigate('movieDetails', {id: data?.id}); 
    return(
        <>
        <TouchableOpacity onPress={navigateTo}>
            <View style={styles.movie}>              
                <Image source={data.image} resizeMode="contain" style={[styles.image, {backgroundColor: colors.darkGray}]}/>
            </View>
        </TouchableOpacity>        
        </>
    )
})

const styles = StyleSheet.create({   
    title: {
        color: colors.lightGray, 
        fontSize: fonts.exSmall,
        textTransform: 'capitalize'
    },
    genre:{
        color: colors.white,
        fontSize: fonts.exSmall, 
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