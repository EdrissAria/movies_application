import React from 'react'
import {View} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export const TabIcon = ({focused, icon}) =>{
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <MaterialIcons 
                name={icon}
                size={24}
                color={focused?'coral':'#fff'}
            />
        </View>
    )
}