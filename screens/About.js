import { StyleSheet, View, Text, Linking, SafeAreaView, Image,TouchableWithoutFeedback } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { colors, fonts } from '../globals/ConstantStyles'
 
const About = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image source={require('../assets/images/movies.png')} resizeMode="contain" style={styles.logo} />
                <Text style={styles.about}>
                    Movies is an application for showing movies details, casts details
                    ,searching movies, see movies by genre and watch trailers
                </Text>
                <View style={styles.developer}>
                    {/* about developer */}
                    <Text style={styles.text}>About Developer</Text>
                    <Image source={require('../assets/images/bishak.png')} resizeMethod="resize"
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
        backgroundColor: colors.black,
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
        color: colors.lightGray,
        fontSize: fonts.medium, 
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
        color: colors.lightGray, 
        fontSize: fonts.large, 
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
        backgroundColor: colors.darkGray 
    }, 
    name: {
        color: colors.lightGray, 
        fontSize: fonts.medium, 
        letterSpacing: 1, 
        marginTop: 10
    }, 
    buttonContainer: {
        borderColor: '#666', 
        borderWidth: 1, 
        marginTop: 20, 
        backgroundColor: colors.lightGray, 
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
        fontSize: fonts.large, 
        fontFamily: 'roboto', 
        fontWeight: 'bold', 
        letterSpacing: 2, 
        color: colors.darkGray 
    }
})

export default About; 