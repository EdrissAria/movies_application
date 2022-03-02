import React, {useState, useEffect, useMemo} from 'react'
import { StyleSheet, View, Text, Linking, Alert, TouchableWithoutFeedback } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import * as api from './api/Api'
import { useQuery } from 'react-query'
 

const openUrl = async (url) => {
    const isSupported = await Linking.openURL(url);
    if (isSupported) {
        await Linking.openUrl(url)
    } else {
        Alert.alert(`can't open this ${url}`);
    }
}

export const RenderCatagoryAndRating = ({ movieId }) => {
    const [trailer, setTrailer] = useState('');
    const [movie, setMovie] = useState([]); 
    const getTrailer = useQuery(['gettrailer', movieId], ()=> api.getTrailer(movieId));
    const getMovie = useQuery(['movie',  movieId],() => api.getMovie(movieId));

    useMemo(() => {
        if(getTrailer.isSuccess){
            console.log(getTrailer?.data?.rusults?getTrailer?.data?.results[0]?.key:'no video')
            setTrailer(getTrailer?.data?.rusults?getTrailer?.data?.results[0]?.key:'')
            setMovie(getMovie?.data?getMovie?.data:[])
        }
    }, [getTrailer?.data, getMovie?.data]) 

    return (
        <View style={{ flexDirection: 'column' }}>
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: 16,
                    alignItems: 'center',
                    paddingHorizontal: 20
                }}
            >
                {/* Users Scores */}
                <View
                    style={{ borderRightColor: '#999', borderRightWidth: 1, paddingRight: 10 }}
                >
                    <Text style={{ color: '#fff', fontSize: 16, letterSpacing: 2 }}>
                        User Score &nbsp;
                        <Entypo name="star" size={16} color="yellow" style={{ marginLeft: 10 }} />
                        <Text style={{ color: '#fff', fontSize: 14 }}>
                            {movie?.vote_count}
                        </Text>
                    </Text>
                </View>
                {/* Rating */}
                <TouchableWithoutFeedback onPress={()=> Linking.openURL(`https://www.youtube.com/watch?v=${trailer}`) }>
                    <Text style={{ textAlign: 'left', marginLeft: 10 }}>
                        <Entypo name="controller-play" size={20} color="#f00" />
                        &nbsp;
                        <Text style={{ color: '#fff', fontSize: 16, letterSpacing: 2 }}>
                            Play Trailer
                        </Text>
                    </Text>
                </TouchableWithoutFeedback>
            </View>
            {/* realize date and genre */}
            <View style={{ alignItems: 'center', flexDirection: 'column', marginTop: 10, paddingHorizontal: 20, paddingVertical: 4, borderTopColor: '#222', borderTopWidth: 1 }}>
                <Text style={{ fontSize: 16, color: '#ccc' }}>{movie?.release_date}</Text>
                <Text style={{ fontSize: 16, color: 'rgba(255,255,255, 0.6)' }}>{movie?.genres?.map(g=> g?.name+' ,')}</Text>
            </View>
        </View>
    )
}

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
    }
})