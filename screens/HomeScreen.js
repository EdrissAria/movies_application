import React from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native'
import { globalStyle } from '../globals/GlobalStyle';
import { sliderData } from '../globals/Data';
import { populerMovies } from '../globals/Data';
import Carousel from 'react-native-snap-carousel'
import { windowWidth } from '../globals/Dimension'
import { BannerSlider } from '../components/BannerSlider';
import { PopulerMovies } from '../components/PopulerMovies';
 
export const HomeScreen = ({ navigation }) => {

    const renderBanner = ({ item, index }) => {
        return <BannerSlider data={item} />
    }

    const renderPopulerMovies = ({ item, index }) => {
        return <PopulerMovies data={item} navigation={navigation} />
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
            <ScrollView style={{ paddingHorizontal: 20, paddingTop: 10, paddingBottom: 80 }}>
                <Carousel
                    data={sliderData}
                    renderItem={renderBanner}
                    sliderWidth={windowWidth - 40}
                    itemWidth={300}
                    loop={true}
                    autoplay={true}
                    enableMomentum={false}
                    lockScrollWhileSnapping={true}
                />
                <View>
                    <View style={{ marginVertical: 20, justifyContent: 'center' }}>
                        <Text style={{ color: '#eee', fontSize: 18 }}>Populer</Text>
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 30,
                                height: 30,
                                borderRadius: 20,
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                position: 'absolute',
                                right: 10,
                            }}

                            onPress={()=> navigation.navigate('movieCatagory')}
                        >
                            <Image
                                source={require('../assets/images/right-arrow.png')}
                                style={{
                                    width: 12,
                                    height: 12,
                                    tintColor: '#fff',
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={populerMovies}
                        renderItem={renderPopulerMovies}
                        horizontal={true}
                        initialNumToRender={3}
                    />
                </View>
                <View>
                    <View style={{ marginVertical: 20 }}>
                        <Text style={{ color: '#eee', fontSize: 18 }}>Feature Movie</Text>
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 30,
                                height: 30,
                                borderRadius: 20,
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                position: 'absolute',
                                right: 10,
                            }}
                        >
                            <Image
                                source={require('../assets/images/right-arrow.png')}
                                style={{
                                    width: 12,
                                    height: 12,
                                    tintColor: '#fff',
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={populerMovies}
                        renderItem={renderPopulerMovies}
                        horizontal={true}
                    />
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Text style={{ color: '#eee', fontSize: 18 }}>Top Movies</Text>
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 30,
                            height: 30,
                            borderRadius: 20,
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            position: 'absolute',
                            right: 10,
                        }}
                    >
                        <Image
                            source={require('../assets/images/right-arrow.png')}
                            style={{
                                width: 12,
                                height: 12,
                                tintColor: '#fff',
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ paddingBottom: 80 }}>
                    <FlatList
                        data={populerMovies}
                        renderItem={renderPopulerMovies}
                        horizontal={true}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
