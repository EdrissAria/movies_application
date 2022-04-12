import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { windowHeight } from '../globals/Dimension';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';

export const RenderCastHeader = ({ actor, navigation }) => {
    return (
        <ImageBackground
            source={{ uri: "https://image.tmdb.org/t/p/original" + actor?.profile_path }}
            resizeMode="cover"
            style={styles.background}
        >
            <View style={{ flex: 1 }}>
                <View
                    style={styles.header}
                >
                    {/* back button */}
                    <TouchableOpacity
                        style={styles.back}
                        onPress={() => navigation.goBack()}
                    >
                        <Entypo
                            name="chevron-thin-left"
                            size={24}
                            color="#fff"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.details}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={['transparent', '#000']}
                        style={styles.gradient}
                    >
                        {/* Name */}
                        <Text
                            style={styles.actor}
                        >
                            {actor?.name}
                        </Text>
                    </LinearGradient>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Platform.OS ? 40 : 20,
        paddingHorizontal: 20
    },
    background: {
        width: '100%',
        height: windowHeight / 2 * 1.2,
    }, 
    back: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.3)'
    }, 
    details: {
        flex: 1, 
        justifyContent: 'flex-end'
    }, 
    gradient: {
        width: '100%', 
        height: 150, 
        alignItems: 'center', 
        justifyContent: 'flex-end'
    },
    actor: {
        marginTop: 10,
        color: '#eee',
        fontSize: 28,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        letterSpacing: 4
    }
})