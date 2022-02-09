import * as react from 'react'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

export default function CustomFonts({ children }) {
    let [fontsLoaded, error] = useFonts({
        'roboto': require('../assets/fonts/Roboto-Light.ttf'), 
        'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf'),
        'roboto-black': require('../assets/fonts/Roboto-Black.ttf')
    }); 
    if (!fontsLoaded) {
        return <AppLoading />
    }else{
        return children
    }
}


