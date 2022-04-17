import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Platform, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons'
import {windowHeight} from '../globals/Dimension'

const RenderHeader = ({ navigation, movie }) => {
    return (
        <ImageBackground
            source={{ uri: "https://image.tmdb.org/t/p/w300" + movie?.backdrop_path }}
            resizeMode="stretch"
            style={styles.backgroundImage}
        >
            <View style={{ flex: 1 }}>
                {/* render header bar */}
                <View
                    style={styles.header}
                >
                    {/* back button */}
                    <TouchableOpacity
                        style={styles.backbtn}
                        onPress={() => navigation.goBack()}
                    >
                        <Entypo
                            name="chevron-thin-left"
                            size={24}
                            color="#fff"
                        />
                    </TouchableOpacity>
                </View>
                {/* render header bar */}
                <View style={styles.headerBar}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={['transparent', '#000']}
                        style={styles.gradient}
                    >
                        {/* Name */}
                        <Text
                            style={styles.title}
                        >
                            {movie?.original_title}
                        </Text>
                    </LinearGradient>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: windowHeight / 2,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Platform.OS ? 40 : 20,
        paddingHorizontal: 20
    },
    backbtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    headerBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    gradient: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    title: {
        marginTop: 10,
        color: '#eee',
        fontSize: 22,
        textTransform: 'capitalize',
        letterSpacing: 4,
        textAlign: 'center',
        paddingHorizontal: 10,
    }
})

export default React.memo(RenderHeader)