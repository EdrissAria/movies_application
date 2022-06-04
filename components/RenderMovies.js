import {memo} from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Image, ActivityIndicator} from 'react-native'
import { windowWidth } from '../globals/Dimension'
import ExpoFastImage from 'expo-fast-image'
import { useNavigate } from '../hooks/useNavigate' 
import { colors, fonts } from '../globals/ConstantStyles'

export default memo(({data, qdata}) =>{
    const [navigateTo] = useNavigate('movieDetails', {id: data?.id}); 
    return(
        <>
        {qdata?.isLoading && <ActivityIndicator color="red" size="large" />}
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