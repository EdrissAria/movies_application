import { View , Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import {styles } from './index'

export const TabIcon = ({ focused, icon }) => {
    return (
        <View style={styles.container}>
            {
                icon == 'grid-outline' ? (<Ionicons
                    name={icon}
                    size={24}
                    color={focused ? 'rgb(234, 88, 12)' : '#fff'}
                />) :  <Image source={icon} style={{ width: 24, height: 24 }} tintColor={focused ? 'rgb(234, 88, 12)' : '#fff'} />
            }
        </View>
    )
}
