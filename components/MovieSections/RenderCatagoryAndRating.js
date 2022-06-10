import { memo } from 'react'
import { StyleSheet, View, Text, Linking, TouchableWithoutFeedback } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import * as api from '../../api/Api'
import { useQuery } from 'react-query'
import { colors, fonts} from '../../globals/ConstantStyles'


export const RenderCatagoryAndRating = memo(({ movie }) => {

    const { data } = useQuery(['gettrailer', movie?.id], () => api.getTrailer(movie?.id), {
        enabled: !!movie?.id
    });

    const open = () => {
        Linking.openURL(`https://www.youtube.com/watch?v=${data ? data?.results[0]?.key : null}`)
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
                        <Text style={styles.score}>
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
        color: colors.white,
        fontSize: fonts.medium,
        letterSpacing: 2 
    }, 
    trailer: {
        textAlign: 'left',
        marginLeft: 10
    },
    vote: { 
        color: colors.white, 
        fontSize: 14 
    },
    details: { 
        alignItems: 'center',
        flexDirection: 'column', 
        marginTop: 10, 
        paddingHorizontal: 20, 
        paddingVertical: 4, 
        borderTopColor: colors.darkGray, 
        borderTopWidth: 1 
    }, 
    info: { 
        fontSize: fonts.medium, 
        color: colors.lightGray
    }
})