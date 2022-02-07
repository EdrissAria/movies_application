import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, Platform, ImageBackground } from 'react-native'
import { windowHeight } from '../globals/Dimension';
import { LinearGradient } from 'expo-linear-gradient';

export const RenderHeader = ({ navigation, data }) => {
    return (
        <ImageBackground
            source={data?.image}
            resizeMode="cover"
            style={{
                width: '100%',
                height: windowHeight / 2 * 1.2,
            }}
        >
            <View style={{ flex: 1 }}>
                {/* render header bar */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: Platform.OS ? 40 : 20,
                        paddingHorizontal: 20
                    }}
                >
                    {/* back button */}
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 50,
                            height: 50,
                            borderRadius: 20,
                            backgroundColor: 'rgba(0,0,0,0.3)'
                        }}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={require('../assets/images/left-arrow.png')}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: '#fff'
                            }}
                        />
                    </TouchableOpacity>
                    {/* download button */}
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 50,
                            height: 50,
                            borderRadius: 20,
                            backgroundColor: 'rgba(0,0,0,0.3)'
                        }}
                        onPress={() => console.log('download')}
                    >
                        <Image
                            source={require('../assets/images/download.png')}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: '#fff'
                            }}
                        />
                    </TouchableOpacity>
                </View>
                {/* render header bar */}
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>

                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={['transparent', '#000']}
                        style={{ width: '100%', height: 150, alignItems: 'center', justifyContent: 'flex-end' }}
                    >
                        {/* Name */}
                        <Text
                            style={{
                                marginTop: 10,
                                color: '#eee',
                                fontSize: 26,
                                textTransform: 'uppercase',
                                letterSpacing: 4
                            }}
                        >
                            {data?.name}
                        </Text>
                    </LinearGradient>
                </View>
            </View>
        </ImageBackground>
    )
}