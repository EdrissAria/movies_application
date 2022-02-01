import { StyleSheet } from "react-native";
import Constants from 'expo-constants'

export const globalStyle = StyleSheet.create({
    container: {
        flex: 1, 
        marginTop: Constants.statusBarHeight
    }
})
