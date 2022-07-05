import { memo } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useQuery } from 'react-query'
import * as api from '../api/Api'
import ExpoFastImage from 'expo-fast-image'
import { useNavigate } from '../hooks/useNavigate'
import { colors, fonts } from '../globals/ConstantStyles'

export default memo(({ data }) => {
    
    const getGenres = useQuery('genres', api.getGenres);
    
    const [navigateTo] = useNavigate('movieDetails', { id: data?.id }); 

    const Gen = [];
    getGenres?.data?.genres.map(g => {
        data?.genre_ids.filter(n => { g.id == n ? Gen.push(g.name) : null })
    })

    return (
        <View>
            <TouchableOpacity onPress={navigateTo}>
                <View
                    style={styles.results}
                >
                    <ExpoFastImage uri={`https://image.tmdb.org/t/p/w154${data.poster_path}`} cacheKey={data.id} resizeMethod="scale" style={styles.image} />
                    <View
                        style={styles.search}
                    >
                        <Text style={styles.title}>{data?.title?.length > 18 ? data?.title?.slice(0, 18) + '..' : data?.title}</Text>
                        <View style={styles.movie}>
                            <AntDesign name="star" size={16} color="yellow" />
                            <Text style={styles.vote}>
                                {data?.vote_count}
                            </Text>
                        </View>
                        <Text style={styles.genre}>{Gen.join(', ')}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
})

const styles = StyleSheet.create({
    results: {
        flexDirection: 'row',
        width: '100%',
        height: 120,
        borderColor: colors.orange,
        borderWidth: 1,
        borderRadius: 16,
        padding: 10,
        marginVertical: 10
    },
    search: {
        marginLeft: 10,
        flexDirection: 'column'
    },
    title: {
        color: colors.lightGray,
        fontSize: fonts.large,
        textTransform: 'capitalize'
    },
    movie: {
        flexDirection: 'row',
        marginLeft: 3,
        marginTop: 10
    },
    vote: {
        color: colors.white,
        fontSize: fonts.medium,
        marginLeft: 4,
        color: 'yellow'
    },
    genre: {
        fontSize: fonts.exSmall,
        marginTop: 10,
        color: colors.lightGray,
        marginLeft: 4,
        width: 190
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 16
    }
})