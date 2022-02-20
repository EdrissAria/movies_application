import React from 'react'
import { View } from 'react-native'
import { Feather, Ionicons, AntDesign } from '@expo/vector-icons'

export const TabIcon = ({ focused, icon }) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {
                icon == 'grid-outline' ? (<Ionicons
                    name={icon}
                    size={24}
                    color={focused ? 'rgb(234, 88, 12)' : '#fff'}
                />) : (
                    icon == 'home' ? (<AntDesign
                        name={icon}
                        size={24}
                        color={focused ? 'rgb(234, 88, 12)' : '#fff'}
                    />)
                        : (<Feather
                            name={icon}
                            size={24}
                            color={focused ? 'rgb(234, 88, 12)' : '#fff'}
                        />))
            }

        </View>
    )
}