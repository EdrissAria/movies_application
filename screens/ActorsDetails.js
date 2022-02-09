import React, { useState, useEffect } from 'react'
import { StyleSheet, View, SafeAreaView, Text, Button, TouchableOpacity, ImageBackground, Image, ScrollView, Platform, TouchableWithoutFeedback } from 'react-native'
import { windowHeight } from '../globals/Dimension';
import { LinearGradient } from 'expo-linear-gradient';

export default function ActorsDetails({ navigation, route }) {
    const { data } = route.params;
    const [selectedActor, setSelectedActor] = useState(null);
    useEffect(() => {
        setSelectedActor(data);
    }, [])
    const renderHeaderBar = () => {
        return (
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
            </View>
        )
    }
    const renderHeader = () => {
        return (
            <ImageBackground
                source={selectedActor?.image}
                resizeMode="cover"
                style={{
                    width: '100%',
                    height: windowHeight / 2 * 1.2,
                }}
            >
                <View style={{ flex: 1 }}>
                    {renderHeaderBar()}
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
    const renderActorsAbout = () => {
        return (
            <View style={{ flex: 1, marginTop: 10, paddingHorizontal: 20 }}>
                <Text style={{ color: '#ddd', fontSize: 16, letterSpacing: 2, lineHeight: 24, textAlign: 'center' }}>
                    {selectedActor?.about}
                </Text>
            </View>
        )
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#000' }}>
            {/* Header */}
            {renderHeader()}
            {/* about actors */}
            {renderActorsAbout()}
        </ScrollView>
    )
}

