import React from 'react'
import {StyleSheet, Image,TouchableOpacity} from 'react-native'
 
const MovieActors = ({data, navigation}) =>{
    const photo = data?.profile_path == null ? require('../assets/images/user.png'):{uri: "https://image.tmdb.org/t/p/original"+data?.profile_path};
    return(
        <TouchableOpacity onPress={()=> navigation.navigate('actorsDetails', {data})}>
            <Image source={photo} resizeMode="cover" style={styles.cast}/>
        </TouchableOpacity>
    )
}
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
    cast: {
        width: 60, 
        height: 80, 
        borderRadius: 10, 
        marginHorizontal: 6 
    }
})

export default React.memo(MovieActors)