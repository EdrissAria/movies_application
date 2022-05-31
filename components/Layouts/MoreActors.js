import { View , TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import {styles } from './index'

export const MoreActors = ({setMoreActor, setShowListFooter}) =>{
    const action = ()=> {
        setMoreActor(true);
        setShowListFooter(false);
    }

    return(
        <TouchableOpacity onPress={action}>
             <View style={[styles.plus, { width: 60, height: 80}]}>
                <Entypo 
                    name="plus"
                    size={60}
                    color="rgb(234, 88, 12)"
                />
             </View>
        </TouchableOpacity>
    )
}