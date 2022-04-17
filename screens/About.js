import React from 'react';
import { StyleSheet, View, Text, Linking, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import ExpoFastImage from 'expo-fast-image'

const openUrl = async (url) => {
    const isSupported = await Linking.openURL(url);
    if (isSupported) {
        await Linking.openUrl(url)
    } else {
        Alert.alert(`can't open this ${url}`);
    }
}

export const About = () => {
    console.log('about.js renderssssssssssssss')
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <ExpoFastImage source={require('../assets/images/movies.png')} resizeMode="contain" style={styles.logo} />
                <Text style={styles.about}>
                    Movies is an application for showing movie details as well as cast details
                    here you can search movies, see movies by genre lot more ...
                </Text>
                <View style={styles.developer}>
                    {/* about developer */}
                    <Text style={styles.text}>About Developer</Text>
                    <ExpoFastImage source={require('../assets/images/bishak.png')} resizeMode="cover"
                        style={styles.photo}
                    />
                    <Text style={styles.name}>M.Edriss Aria</Text>
                    <TouchableWithoutFeedback onPress={() => Linking.openURL(`https://edrissaria.github.io`)}>
                        <View
                            style={styles.buttonContainer}
                        >
                            <FontAwesome
                                name="github"
                                size={24}
                                color="#000"
                                style={styles.icon}
                            />
                            <Text
                                style={styles.link}
                            >
                                GitHub
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => Linking.openURL(`mailto:edrissaria8@gmail.com?subject=SendMail&body=hello`)}>
                        <View
                            style={styles.buttonContainer}
                        >
                            <FontAwesome
                                name="envelope"
                                size={24}
                                color="#000"
                                style={styles.icon}
                            />
                            <Text
                                style={styles.link}
                            >
                                E-MAIL
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center'
    },
    content: {
        marginTop: 20,
        paddingHorizontal: 20
    },
    logo: {
        width: 60,
        height: 60,
        marginTop: 20,
        alignSelf: 'center'
    },
    about: {
        color: '#ddd',
        fontSize: 16, 
        letterSpacing: 2, 
        lineHeight: 24, 
        marginTop: 16, 
        textAlign: 'center'
    }, 
    developer: {
        marginTop: 20, 
        flexDirection: 'column', 
        alignItems: 'center'
    }, 
    text: {
        color: '#ccc', 
        fontSize: 20, 
        letterSpacing: 1, 
        fontWeight: 'bold', 
        textAlign: 'center'
    }, 
    photo: {
        width: 50, 
        height: 50, 
        borderRadius: 25, 
        alignSelf: 'center', 
        marginTop: 20, 
        backgroundColor: '#222' 
    }, 
    name: {
        color: '#ccc', 
        fontSize: 16, 
        letterSpacing: 1, 
        marginTop: 10
    }, 
    buttonContainer: {
        borderColor: '#666', 
        borderWidth: 1, 
        marginTop: 20, 
        backgroundColor: '#ccc', 
        width: '100%', 
        height: 50, 
        borderRadius: 6, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center' 
    }, 
    icon: {
        position: 'absolute', 
        right: 16
    }, 
    link: {
        fontSize: 18, 
        fontFamily: 'roboto', 
        fontWeight: 'bold', 
        letterSpacing: 2, 
        color: '#222' 
    }
})