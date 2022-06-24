import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { colors, fonts } from '../../globals/ConstantStyles'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const Header = ({title}) => {
    const navigation = useNavigation(); 
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                <Entypo name="chevron-thin-left" size={fonts.exLarge} color={colors.orange} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60, 
        paddingVertical: 10, 
        backgroundColor: colors.transparent, 
    }, 
    title: {
        fontSize: fonts.large,
        marginLeft: 16, 
        fontFamily: 'roboto', 
        color: colors.orange, 
        textAlign: 'center', 
        textTransform: 'capitalize'
    }, 
    back: { 
        padding: 6, 
        borderRadius: 20 
    }
})