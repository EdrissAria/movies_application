import { StyleSheet, View, ScrollView, SafeAreaView, RefreshControl } from 'react-native'
import MoviesList from '../components/MoviesList';
import BannerSlider from '../components/BannerSlider';
import Carousel from 'react-native-snap-carousel';
import { windowHeight, windowWidth } from '../globals/Dimension';
import { useHomeScreenCalls } from '../hooks/useHomeScreenCalls';

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout)
    })
}

const HomeScreen = ({ navigation }) => {

    console.log('HomeScreen.js renderssssssssssssss')

    const [refrishing, upcoming, popular, toprated, nowPlaying, onRefrish, getNow_playing] = useHomeScreenCalls(); 

    const renderBanner = ({ item }) => {
        return <BannerSlider data={item} />
    }

    return (
        <SafeAreaView style={styles.parent}>
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
                     <Carousel
                     data={nowPlaying}
                     renderItem={renderBanner}
                     sliderWidth={windowWidth - 40}
                     itemWidth={windowWidth - 140}
                     loop={true}
                     autoplay={true}
                    />  :
                    <View style={{ width: windowWidth - 40, height: windowHeight / 2.5, backgroundColor: '#111', borderRadius: 40 }} />
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
    parent: { 
        flex: 1, 
        backgroundColor: '#000' 
    },
    container: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 80
    },
    loading: {
        width: windowHeight - 40,
        height: windowHeight / 2.5,
        backgroundColor: '#ccc',
        borderRadius: 40
    }
})

export default HomeScreen;