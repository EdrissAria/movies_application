import React from 'react'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

export default function CustomFonts({ children }) {
    let [fontsLoaded, error] = useFonts({
        'roboto': require('../assets/fonts/Roboto-Regular.ttf'), 
        'gothic': require('../assets/fonts/BankGothicRegular.ttf')
    }); 
    if (!fontsLoaded) {
        return <AppLoading />
    }else{
        return children
    }
}


