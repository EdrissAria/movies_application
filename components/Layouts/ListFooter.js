import {  View , TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import {styles} from './index'

export const ListFooter = ({navigateTo}) =>{
    return(
        <TouchableOpacity onPress={navigateTo}>
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