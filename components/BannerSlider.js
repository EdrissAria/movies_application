import React from 'react'
import { View , Image} from 'react-native'
export const BannerSlider = ({data}) =>{
    return(
        <View>
            <Image source={data.image} style={{ width: 300, height: 150, borderRadius: 10 }}/>
        </View>
    )
}
