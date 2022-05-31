import {useState, useCallback} from 'react'
import { useFonts } from 'expo-font'

export default function CustomFonts({ children }) {
    let [fontsLoaded, error] = useFonts({
        'roboto': require('../assets/fonts/Roboto-Regular.ttf'), 
        'gothic': require('../assets/fonts/BankGothicRegular.ttf')
    }); 
    if (!fontsLoaded) {
        return null
    }else{
        return children
    }
}


