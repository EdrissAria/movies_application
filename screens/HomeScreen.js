import { StyleSheet, View, ScrollView, SafeAreaView, RefreshControl } from 'react-native'
import MoviesList from '../components/MoviesList';
import BannerSlider from '../components/BannerSlider';
import Carousel from 'react-native-snap-carousel';
import { windowHeight, windowWidth } from '../globals/Dimension';
import { useHomeScreenCalls } from '../hooks/useHomeScreenCalls';
import { NetAlert } from '../components/NetAlert';
import { colors, fonts } from '../globals/ConstantStyles'


const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout)
    })
}

const HomeScreen = ({ navigation }) => {

    console.log('HomeScreen.js renderssssssssssssss')
    const [refrishing, getUpcoming, getPopular, getTop_rated, onRefrish, getNow_playing] = useHomeScreenCalls(); 

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
                        colors={[colors.orange]}
                        progressBackgroundColor={colors.darkGray}
                    />
                }
            >
                {getNow_playing.isSuccess ?
                     <Carousel
                     data={getNow_playing?.data?.results}
                     renderItem={renderBanner}
                     sliderWidth={windowWidth - 40}
                     itemWidth={windowWidth - 140}
                     loop={true}
                     autoplay={true}
                    />  :
                    <View style={styles.bannerLoader} />
                }
                
                <MoviesList movies={getPopular} cat="popular" title="Popular" navigation={navigation} />
                
                
                <MoviesList movies={getTop_rated} cat="top_rated" title="Top Rated" navigation={navigation} />
                
                
                <MoviesList movies={getUpcoming} cat="upcoming" title="Upcoming" navigation={navigation} />
                
            </ScrollView>
           <NetAlert />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    parent: { 
        flex: 1, 
        backgroundColor: colors.black 
    },
    container: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 80
    },
    bannerLoader: {
        width: windowWidth - 40,
        height: windowHeight / 2.5,
        backgroundColor: colors.darkGray,
        borderRadius: 40
    }
})

export default HomeScreen;