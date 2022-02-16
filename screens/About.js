import React from 'react'; 
import {StyleSheet, View, Text,ScrollView, Image, SafeAreaView} from 'react-native'

export const About = ({navigation})=> {
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#000', alignItems: 'center' }}>
            <View style={{ marginTop: 20}}>
                <Image source={require('../assets/images/movies.png')} style={{ width: 100, height: 100, marginBottom: 20 }}/>
                <Text style={styles.title}>Movies</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#ddd',
        fontFamily: 'roboto-regular', 
        fontSize: 24,
        letterSpacing: 2.2, 
        textAlign: 'center' 
    }
})
