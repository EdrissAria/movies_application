import { memo } from 'react'
import { View, Text, Linking, TouchableWithoutFeedback } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import * as api from '../../api/Api'
import { useQuery } from 'react-query'
import {styles} from './index'


export const RenderCatagoryAndRating = memo(({ movie }) => {

    const getTrailer = useQuery(['gettrailer', movie?.id], () => api.getTrailer(movie?.id), {
        enabled: !!movie?.id
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
