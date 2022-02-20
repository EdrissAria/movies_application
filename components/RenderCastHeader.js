import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, Platform, } from 'react-native'
import { windowHeight } from '../globals/Dimension';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';


export const RenderCastHeader = ({ actor, data, navigation }) => {
    return (
        <ImageBackground
            source={actor?.image}
            resizeMode="cover"
            style={{
                width: '100%',
                height: windowHeight / 2 * 1.2,
            }}
        >
            <View style={{ flex: 1 }}>
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
                        <Entypo
                            name="chevron-thin-left"
                            size={24}
                            color="#fff"
                        />
                    </TouchableOpacity>
                </View>
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
                                fontSize: 28,
                                textTransform: 'capitalize',
                                fontWeight: 'bold',
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