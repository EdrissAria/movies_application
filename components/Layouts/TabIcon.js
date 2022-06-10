import { StyleSheet, View , Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../../globals/ConstantStyles'

export const TabIcon = ({ focused, icon }) => {
    return (
        <View style={styles.container}>
            <Image source={icon} style={{ width: 24, height: 24 }} tintColor={focused ? colors.orange : colors.white} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        alignItems: 'center'
    }
})