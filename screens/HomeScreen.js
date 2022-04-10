import React, { useState, useCallback, useMemo} from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, FlatList, TouchableOpacity, RefreshControl, ActivityIndicator, Animated } from 'react-native'
import { RenderMovies } from '../components/RenderMovies';
import { ListFooter } from '../components/ListFooter';
import { Entypo } from '@expo/vector-icons'
import { useQuery } from 'react-query'
import * as api from '../components/api/Api';
import Carousel from '../components/Carousel';
import { windowHeight } from '../globals/Dimension';
 
const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout)
    })
}

export const HomeScreen = ({ navigation }) => {

    const [refrishing, setRefrishing] = useState(false);
    const [upcomming, setUpcomming] = useState([]);
    const [popular, setPopular] = useState([]);
    const [toprated, setToprated] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);

    const getUpcomming = useQuery('upcomming', api.getUpcomming);
    const getNow_playing = useQuery('now_playing', api.getNow_playing);
    const getPopular = useQuery('populer', api.getPopular);
    const getTop_rated = useQuery('toprated', api.getTop_rated);

    useMemo(() => {
        setPopular(getPopular.data ? getPopular.data.results : null);
        setToprated(getTop_rated.data ? getTop_rated.data.results : null);
        setUpcomming(getUpcomming.data ? getUpcomming.data.results : null);
        setNowPlaying(getNow_playing.data ? getNow_playing.data.results : null);
    }, [getPopular.data, getTop_rated.data, getUpcomming.data, getNow_playing.data])

    const renderMovies = ({ item }) => {
        return <RenderMovies data={item} navigation={navigation} />
    }

    const onRefrish = useCallback(() => {
        setRefrishing(true)
        wait(2000).then(() => setRefrishing(false))
        getNow_playing.refetch();
        getPopular.refetch();
        getTop_rated.refetch();
        getUpcomming.refetch();
    }, [])

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
                {getNow_playing.isSuccess ?
                    <Carousel banners={nowPlaying}/>
                : (getNow_playing.isLoading ? <View style={{ width: windowHeight - 40, height: windowHeight / 2.5, backgroundColor: '#ccc' }} /> : null)}
                <View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Popular</Text>
                        <TouchableOpacity
                            style={styles.arrow}
                            onPress={() => navigation.navigate('catagoryMovies', { catagory: 'popular' })}
                        >
                            <Entypo
                                name="chevron-small-right"
                                size={28}
                                color='rgb(234, 88, 12)'
                            />
                        </TouchableOpacity>
                    </View>
                    {getPopular.isSuccess ?
                        <FlatList
                            data={popular}
                            renderItem={renderMovies}
                            horizontal={true}
                            initialNumToRender={3}
                            keyExtractor={(item) => item.id}
                            ListFooterComponent={<ListFooter navigation={navigation} catagory="popular" />}
                        /> : (getPopular.isLoading ? <ActivityIndicator size="large" color="rgb(234, 88, 12)" /> : null)}
                </View>
                <View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Top Rated</Text>
                        <TouchableOpacity
                            style={styles.arrow}
                            onPress={() => navigation.navigate('catagoryMovies', { catagory: 'top_rated' })}
                        >
                            <Entypo
                                name="chevron-small-right"
                                size={28}
                                color='rgb(234, 88, 12)'
                            />
                        </TouchableOpacity>
                    </View>
                    {getTop_rated.isSuccess ?
                        <FlatList
                            data={toprated}
                            renderItem={renderMovies}
                            horizontal={true}
                            initialNumToRender={3}
                            keyExtractor={(item) => item.id}
                            ListFooterComponent={<ListFooter navigation={navigation} catagory="top_rated" />}
                        /> : (getTop_rated.isLoading ? <ActivityIndicator size="large" color="rgb(234, 88, 12)" /> : null)}
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Upcomming</Text>
                    <TouchableOpacity
                        style={styles.arrow}
                        onPress={() => navigation.navigate('catagoryMovies', { catagory: 'upcoming' })}
                    >
                        <Entypo
                            name="chevron-small-right"
                            size={28}
                            color='rgb(234, 88, 12)'
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    {getUpcomming.isSuccess ?
                        <FlatList
                            data={upcomming}
                            renderItem={renderMovies}
                            horizontal={true}
                            initialNumToRender={3}
                            keyExtractor={(item) => item.id}
                            ListFooterComponent={<ListFooter navigation={navigation} catagory="upcoming" />}
                        /> : (getUpcomming.isLoading ? <ActivityIndicator size="large" color="rgb(234, 88, 12)" /> : null)}
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
    title: {
        color: '#eee',
        fontSize: 18,
        fontFamily: 'roboto-regular',
        letterSpacing: 1,
        position: 'absolute',
        left: 0,
        marginTop: 20
    },
    arrow: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        position: 'absolute',
        right: 0,
    },
    titleContainer: {
        marginVertical: 26,
        justifyContent: 'center'
    }
})