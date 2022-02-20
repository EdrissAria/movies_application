import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, SafeAreaView, FlatList, Image, TouchableOpacity, RefreshControl } from 'react-native'
import { globalStyle } from '../globals/GlobalStyle';
import { sliderData } from '../globals/Data';
import { populerMovies } from '../globals/Data';
import Carousel from 'react-native-snap-carousel'
import { windowWidth } from '../globals/Dimension'
import { BannerSlider } from '../components/BannerSlider';
import { PopulerMovies } from '../components/PopulerMovies';
import { ListFooter } from '../components/ListFooter';
import { Entypo } from '@expo/vector-icons'
import { useQuery } from 'react-query'
import * as api from '../components/api/Api';


const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout)
    })
}

export const HomeScreen = ({ navigation }) => {

    const [refrishing, setRefrishing] = useState(false);

    // const getdata = useQuery('data', api.getdata);

    // if(getdata.isSuccess){
    //     console.log(getdata.data) 
    // }
    // if(getdata.isError){
    //     console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
    // }

    const renderBanner = ({ item, index }) => {
        return <BannerSlider data={item} />
    }

    const renderPopulerMovies = ({ item, index }) => {
        return <PopulerMovies data={item} navigation={navigation} />
    }

    const onRefrish = useCallback(() => {
        setRefrishing(true)
        wait(2000).then(() => setRefrishing(false))
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
            <ScrollView
                contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10, paddingBottom: 60 }}
                refreshControl={
                    <RefreshControl
                        refreshing={refrishing}
                        onRefresh={onRefrish}
                        colors={['rgb(234, 88, 12)']}
                        progressBackgroundColor="#333"
                    />
                }
            >
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
                    <View style={{ marginVertical: 26, justifyContent: 'center' }}>
                        <Text style={{ color: '#eee', fontSize: 18, fontFamily: 'roboto-regular', letterSpacing: 1, position: 'absolute', left: 0, marginTop: 20 }}>Popular</Text>
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 30,
                                height: 30,
                                borderRadius: 20,
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                position: 'absolute',
                                right: 0,
                            }}

                            onPress={() => navigation.navigate('movieCatagory')}
                        >
                            <Entypo
                                name="chevron-small-right"
                                size={28}
                                color='rgb(234, 88, 12)'
                            />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={populerMovies}
                        renderItem={renderPopulerMovies}
                        horizontal={true}
                        initialNumToRender={3}
                        ListFooterComponent={<ListFooter navigation={navigation}/>}
                    />
                </View>
                <View>
                    <View style={{ marginVertical: 26, justifyContent: 'center' }}>
                        <Text style={{ color: '#eee', fontSize: 18, fontFamily: 'roboto-regular', letterSpacing: 1, position: 'absolute', left: 0, marginTop: 20 }}>Top Rated</Text>
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 30,
                                height: 30,
                                borderRadius: 20,
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                position: 'absolute',
                                right: 0,
                            }}
                            onPress={() => navigation.navigate('movieCatagory')}
                        >
                            <Entypo
                                name="chevron-small-right"
                                size={28}
                                color='rgb(234, 88, 12)'
                            />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={populerMovies}
                        renderItem={renderPopulerMovies}
                        horizontal={true}
                        ListFooterComponent={<ListFooter navigation={navigation}/>}
                    />
                </View>
                <View style={{ marginVertical: 26, justifyContent: 'center' }}>
                    <Text style={{ color: '#eee', fontSize: 18, fontFamily: 'roboto-regular', letterSpacing: 1, position: 'absolute', left: 0, marginTop: 20 }}>Top Movies</Text>
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 30,
                            height: 30,
                            borderRadius: 20,
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            position: 'absolute',
                            right: 0,
                        }}
                        onPress={() => navigation.navigate('movieCatagory')}
                    >
                        <Entypo
                            name="chevron-small-right"
                            size={28}
                            color='rgb(234, 88, 12)'
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        data={populerMovies}
                        renderItem={renderPopulerMovies}
                        horizontal={true}
                        ListFooterComponent={<ListFooter navigation={navigation}/>}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
