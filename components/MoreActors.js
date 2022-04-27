import React from 'react'
import {StyleSheet, View , TouchableOpacity} from 'react-native'
import { Entypo } from '@expo/vector-icons'

export const MoreActors = ({setMoreActor, setShowListFooter}) =>{

    const action = ()=> {
        setMoreActor(true);
        setShowListFooter(false);
    }

    return(
        <TouchableOpacity onPress={action}>
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
        width: 60,
        height: 80,
        backgroundColor: '#222', 
        borderRadius: 14, 
        marginHorizontal: 6
    }
})

