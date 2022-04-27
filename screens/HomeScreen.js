import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, RefreshControl } from 'react-native'
import MoviesList from '../components/MoviesList';
import { useQuery } from 'react-query'
import * as api from '../api/Api';
import BannerSlider from '../components/BannerSlider';
import Carousel from 'react-native-snap-carousel';
import { windowHeight, windowWidth } from '../globals/Dimension';

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout)
    })
}

const HomeScreen = ({ navigation }) => {
    console.log('HomeScreen.js renderssssssssssssss')
    const [refrishing, setRefrishing] = useState(false);
    const [upcoming, setUpcoming] = useState([]);
    const [popular, setPopular] = useState([]);
    const [toprated, setToprated] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);

    const getUpcoming = useQuery('upcoming', api.getUpcoming);
    const getNow_playing = useQuery('now_playing', api.getNow_playing);
    const getPopular = useQuery('populer', api.getPopular);
    const getTop_rated = useQuery('toprated', api.getTop_rated);

    useEffect(() => {
        setPopular(getPopular?.data ? [...getPopular.data.results] : []);
        setToprated(getTop_rated?.data ? [...getTop_rated.data.results] : []);
        setUpcoming(getUpcoming?.data ? [...getUpcoming.data.results] : []);
        setNowPlaying(getNow_playing?.data ? [...getNow_playing.data.results] : []);
    }, [getPopular.data, getTop_rated.data, getUpcoming.data, getNow_playing.data])

    const onRefrish = useCallback(() => {
        setRefrishing(true)
        wait(2000).then(() => setRefrishing(false))
        getNow_playing.refetch();
        getPopular.refetch();
        getTop_rated.refetch();
        getUpcoming.refetch();
    }, [])

    const renderBanner = ({ item }) => {
        return <BannerSlider data={item} />
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
            <ScrollView
                contentContainerStyle={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={refrishing}
                        onRefresh={onRefrish}
                        colors={['rgb(234, 88, 12)']}
                        progressBackgroundColor="#333"
                    />
                }
            >
                {getNow_playing.isSuccess?
                <Carousel
                    data={nowPlaying}
                    renderItem={renderBanner}
                    sliderWidth={windowWidth - 40}
                    itemWidth={windowWidth - 140 }
                    loop={true}
                    autoplay={true}
                />:
                <View style={{ width: windowWidth - 40, height: windowHeight / 2.5, backgroundColor: '#777', borderRadius: 40 }}/>
                }
                <View>
                    <MoviesList movies={popular} cat="popular" title="Popular" navigation={navigation} />
                </View>
                <View>
                    <MoviesList movies={toprated} cat="top_rated" title="Top Rated" navigation={navigation} />
                </View>
                <View>
                    <MoviesList movies={upcoming} cat="upcoming" title="Upcoming" navigation={navigation} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 60
    },
    loading: {
        width: windowHeight - 40,
        height: windowHeight / 2.5,
        backgroundColor: '#ccc',
        borderRadius: 40
    }
})

export default HomeScreen; 