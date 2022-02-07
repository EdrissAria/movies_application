import * as react from 'react'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

const getFonts = () => Font.loadAsync({
    'roboto': require('../assets/fonts/Roboto-Light.ttf')
});

export default function LoadFonts({ children }) {
    const [fontloaded, setfontloaded] = react.useState(false);
    if (fontloaded) {
        return(
            {children}
        )
    }else{
        return(
            <AppLoading 
                startAsynct={getFonts}
                onFinish={()=> setfontloaded(true)}
            />
        )
    }
}


