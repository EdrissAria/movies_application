import { StyleSheet, View , TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { windowWidth } from '../../globals/Dimension'
import { colors } from '../../globals/ConstantStyles'

export const ListFooter = ({navigateTo}) =>{
    return(
        <TouchableOpacity onPress={navigateTo}>
             <View style={styles.plus}>
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
        width: (windowWidth - 76)/3, 
        height: 140, 
        backgroundColor: colors.darkGray, 
        borderRadius: 14, 
        marginLeft: 12
    }
})