import { memo, useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Platform, FlatList, ImageBackground, Linking, Alert, TouchableWithoutFeedback } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons'
import { windowHeight } from '../globals/Dimension'
import * as api from '../api/Api'
import { useQuery } from 'react-query'
import  MovieActors  from '../components/MovieActors';
import { MoreActors } from '../components/Layout'


const openUrl = async (url) => {
    const isSupported = await Linking.openURL(url);
    if (isSupported) {
        await Linking.openUrl(url)
    } else {
        Alert.alert(`can't open this ${url}`);
    }
}

// render backdrop path in movie detail component or profile path in actor component and the name of movie
export const RenderHeader = memo(({ navigation, data, type }) => {
    const navigateTo = () => navigation.goBack()
    return (
        <ImageBackground
            source={{ uri: type == 'movie' ?"https://image.tmdb.org/t/p/w780" + data?.backdrop_path:
            "https://image.tmdb.org/t/p/w185" + data?.profile_path}}
            resizeMethod="resize"
            style={styles.backgroundImage}
        >
            <View style={{ flex: 1 }}>
                {/* render header bar */}
                <View
                    style={styles.header}
                >
                    {/* back button */}
                    <TouchableOpacity
                        style={styles.backbtn}
                        onPress={navigateTo}
                    >
                        <Entypo
                            name="chevron-thin-left"
                            size={24}
                            color="#fff"
                        />
                    </TouchableOpacity>
                </View>
                {/* render header bar */}
                <View style={styles.headerBar}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={['transparent', '#000']}
                        style={styles.gradient}
                    >
                        {/* Name */}
                        <Text
                            style={styles.title}
                        >
                            {type == 'movie' ? data?.original_title: data?.name}
                        </Text>
                    </LinearGradient>
                </View>
            </View>
        </ImageBackground>
    )
})

// render genre, rating , trailer ...
export const RenderCatagoryAndRating = memo(({ movie }) => {

    const getTrailer = useQuery(['gettrailer', movie?.id], () => api.getTrailer(movie?.id), {
        enabled: !!movie.id
    });

    const open = () => {
        Linking.openURL(`https://www.youtube.com/watch?v=${getTrailer?.data ? getTrailer?.data?.results[0]?.key : null}`)
    }

    return (
        <View style={{ flexDirection: 'column' }}>
            <View
                style={styles.content}
            >
                {/* Users Scores */}
                <View
                    style={styles.rating}
                >
                    <Text style={styles.score}>
                        User Score &nbsp;
                        <Entypo name="star" size={16} color="yellow" style={{ marginLeft: 10 }} />
                        <Text style={styles.vote}>
                            {movie?.vote_count}
                        </Text>
                    </Text>
                </View>
                {/* Trailer */}
                <TouchableWithoutFeedback onPress={open}>
                    <Text style={styles.trailer}>
                        <Entypo name="controller-play" size={20} color="#f00" />
                        &nbsp;
                        <Text style={styles.play}>
                            Play Trailer
                        </Text>
                    </Text>
                </TouchableWithoutFeedback>
            </View>
            {/* realize date and genre */}
            <View style={styles.details}>
                <Text style={styles.info}>{movie?.release_date}</Text>
                <Text style={styles.info}>{movie?.genres?.map(g => g.name + ' ,')}</Text>
            </View>
        </View>
    )
})

// render overview and show list of cast 
export const RenderStoryLine = memo(({ navigation, movie }) => {

    const [casts, setCasts] = useState([])
    const [more, setMore] = useState(false);
    const [moreActor, setMoreActor] = useState(false)
    const [showListFooter, setShowListFooter] = useState(true)

    const getCasts = useQuery(['casts', movie?.id],()=> api.getCasts(movie?.id), {enabled: !!movie.id}); 

    useEffect(() => {
        let isUnmounted = false; 
        !isUnmounted && setCasts(getCasts?.data?[...getCasts?.data?.cast]:[])
        return ()=>{isUnmounted = true}
    }, [getCasts?.data])
    
    const renderActors = ({ item }) => {
        return <MovieActors data={item} navigation={navigation} />
    }

    const readMore = () => setMore(true)
     
    return (
        <View style={styles.container}>
            {/* story line */}
            <Text style={styles.title}>Overview</Text>
            <Text style={styles.overview}>
                {
                    more ? movie?.overview : (
                        movie?.overview?.length > 200 ? <Text>
                        {movie?.overview?.slice(0, 200)} <TouchableWithoutFeedback onPress={readMore}>
                        <Text style={styles.more}>Read More...</Text>
                        </TouchableWithoutFeedback></Text> :
                        movie?.overview
                    )
                }
            </Text>
            <View style={styles.casts}>
                <Text style={styles.castTitle}>Top Billed Cast</Text>
                <FlatList
                    data={
                        moreActor ? casts : (
                            casts?.length > 6 ? casts?.slice(0, 6):
                            casts
                        )
                    }
                    extraData={casts}
                    renderItem={renderActors}
                    initialNumToRender={6}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    ListFooterComponent={showListFooter ? <MoreActors setMoreActor={setMoreActor} setShowListFooter={setShowListFooter}/>: null}
                />
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginTop: 10, 
        paddingHorizontal: 20, 
        flexDirection: 'column'
    }, 
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: windowHeight / 2,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Platform.OS ? 40 : 20,
        paddingHorizontal: 20
    },
    backbtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    headerBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    gradient: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    title: {
        marginTop: 10,
        color: '#eee',
        fontSize: 22,
        textTransform: 'capitalize',
        letterSpacing: 4,
        textAlign: 'center',
        paddingHorizontal: 10,
    },
    catagoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 10,
        backgroundColor: '#777'
    },
    content: {
        flexDirection: 'row',
        marginTop: 16,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    rating: {
        borderRightColor: '#999',
        borderRightWidth: 1,
        paddingRight: 10
    },
    score: {
        color: '#fff',
        fontSize: 16,
        letterSpacing: 2
    },
    trailer: {
        textAlign: 'left',
        marginLeft: 10
    },
    play: {
        color: '#fff',
        fontSize: 16,
        letterSpacing: 2
    },
    vote: {
        color: '#fff',
        fontSize: 14
    },
    details: {
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 4,
        borderTopColor: '#222',
        borderTopWidth: 1
    },
    info: {
        fontSize: 16,
        color: '#ccc'
    }, 
    overview: {
        color: '#ccc', 
        fontSize: 14, 
        marginTop: 10, 
        fontFamily: 'roboto'
    }, 
    more: {
        color: 'red', 
        fontSize: 14
    }, 
    casts: {
        marginTop: 10, 
        paddingBottom: 20 
    }, 
    castTitle: {
        color: '#ddd', 
        fontSize: 16, 
        marginBottom: 10, 
        letterSpacing: 1 
    }
})
