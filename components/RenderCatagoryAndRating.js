import React, {memo} from 'react'
import { StyleSheet, View, Text, Linking, Alert, TouchableWithoutFeedback } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import * as api from '../api/Api'
import { useQuery } from 'react-query'
 
const openUrl = async (url) => {
    const isSupported = await Linking.openURL(url);
    if (isSupported) {
        await Linking.openUrl(url)
    } else {
        Alert.alert(`can't open this ${url}`);
    }
}
 
export default memo(({ movie }) => {
    
    const getTrailer = useQuery(['gettrailer', movie?.id], ()=> api.getTrailer(movie?.id), {
       enabled: !!movie.id
    }); 

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
                <TouchableWithoutFeedback onPress={()=> Linking.openURL(`https://www.youtube.com/watch?v=${getTrailer?.data?getTrailer?.data?.results[0]?.key:null}`) }>
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
                <Text style={styles.info}>{movie?.genres?.map(g=> g.name+' ,')}</Text>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
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
    }
})