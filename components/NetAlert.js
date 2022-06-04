import { useState } from 'react';
import NetInfo from '@react-native-community/netinfo'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import { colors, fonts } from '../globals/ConstantStyles';

export const NetAlert = () => {
    const [connect, setConnect] = useState();
    const [dismiss, setDismiss] = useState(false); 
    NetInfo.fetch().then(state => {
        setConnect(state.isConnected)
    })
    if (!connect && !dismiss) {
        return (
            <View style={styles.alert}>
                <Text style={styles.textAlert}>No Internet connection</Text>
                <TouchableWithoutFeedback onPress={() => setDismiss(true)}><Text style={[styles.textAlert, {alignSelf: 'flex-end'}]}>Dismiss</Text></TouchableWithoutFeedback>
            </View>
        )
    }else{
        return null;
    }
}

const styles = StyleSheet.create({
    alert: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '100%', 
        height: 80,
        backgroundColor: colors.darkGray, 
        position: 'absolute', 
        top: 10, 
        borderRadius: 10, 
    },
    textAlert: { 
        color: colors.lightGray, 
        fontSize: fonts.medium, 
        padding: 10,
        fontFamily: 'roboto' 
    }
})