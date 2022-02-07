import React from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Image } from 'react-native'
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
        return <PopulerMovies data={item} navigation={navigation}/>
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
            <ScrollView style={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 80 }}>
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
                    <View style={{ marginVertical: 20 }}>
                        <Text style={{ color: '#eee', fontSize: 18 }}>Populer</Text>
                    </View>
                    <Carousel
                        data={populerMovies}
                        renderItem={renderPopulerMovies}
                        sliderWidth={windowWidth - 40}
                        itemWidth={112}
                        loop={true}
                    />
                </View>
                <View>
                    <View style={{ marginVertical: 20 }}>
                        <Text style={{ color: '#eee', fontSize: 18 }}>Feature Movie</Text>
                    </View>
                    <Carousel
                        data={populerMovies}
                        renderItem={renderPopulerMovies}
                        sliderWidth={windowWidth - 40}
                        itemWidth={100}
                        itemWidth={112}
                        loop={true}
                    />
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Text style={{ color: '#eee', fontSize: 18 }}>Top Movies</Text>
                </View>
                <View style={{ paddingBottom: 80 }}>
                    <Carousel
                        data={populerMovies}
                        renderItem={renderPopulerMovies}
                        sliderWidth={windowWidth - 40}
                        itemWidth={100}
                        itemWidth={112}
                        loop={true}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
