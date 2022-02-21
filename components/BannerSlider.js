import React from 'react'
import { View , Image} from 'react-native'

export const BannerSlider = ({data}) =>{
    return(
        <View>
            <Image source={{ uri: "https://image.tmdb.org/t/p/w300"+data.poster_path }} resizeMode="stretch" style={{ width: 300, height: 250, borderRadius: 20   }}/>
        </View>
    )
}
