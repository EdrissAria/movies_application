import React from 'react'
import {StyleSheet, View , TouchableOpacity} from 'react-native'
import { windowWidth } from '../globals/Dimension'
import { Entypo } from '@expo/vector-icons'

export const ListFooter = ({navigation, catagory}) =>{
    return(
        <TouchableOpacity onPress={()=> navigation.navigate('catagoryMovies', {catagory})}>
             <View style={styles.plus}>
                <Entypo 
                    name="plus"
                    size={60}
                    color="rgb(234, 88, 12)"
                />
             </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    plus: {
        justifyContent: 'center',
        alignItems: 'center', 
        width: (windowWidth - 76)/3, 
        height: 140, 
        backgroundColor: '#222', 
        borderRadius: 14, 
        marginHorizontal: 6
    }
})

