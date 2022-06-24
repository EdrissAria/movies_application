import { StyleSheet, View , TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { colors } from '../../globals/ConstantStyles'

export const MoreActors = ({setMoreActor, setShowListFooter}) =>{
    const action = ()=> {
        setMoreActor(true);
        setShowListFooter(false);
    }

    return(
        <TouchableOpacity onPress={action}>
             <View style={ styles.plus }>
                <Entypo 
                    name="plus"
                    size={60}
                    color={colors.orange}
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
        backgroundColor: colors.darkGray, 
        borderRadius: 14, 
        marginHorizontal: 6
    },
})