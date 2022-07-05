import {memo} from 'react'
import { StyleSheet, FlatList, SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import RenderMovies from '../components/RenderMovies';
import { ListFooter } from '../components/Layout';
import { Entypo } from '@expo/vector-icons';
import { useNavigate } from '../hooks/useNavigate'
import {colors, fonts} from '../globals/ConstantStyles'

export default memo(({ movies, cat, title, navigation}) => {

    const renderMovies = ({ item }) => {
        return <RenderMovies data={item} qdata={movies} navigation={navigation} />
    }
    
    const [navigateTo] = useNavigate('catagoryMovies', { catagory: cat, data: movies?.data?.results}); 

    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity
                    style={styles.arrow}
                    onPress={navigateTo}
                >
                    <Entypo
                        name="chevron-small-right"
                        size={36}
                        color={colors.orange}
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                data={movies?.data?.results}
                extraData={movies?.data?.results}
                decelerationRate="fast"
                scrollEnabled
                renderItem={renderMovies}
                horizontal={true}
                keyExtractor={(item) => item.id}
                ListFooterComponent={<ListFooter navigateTo={navigateTo} />}
            />
        </View>
    )
})

const styles = StyleSheet.create({
    title: {
        color: colors.lightGray,
        fontSize: fonts.large,
        fontFamily: 'roboto',
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
        position: 'absolute',
        right: 0,
    },
    titleContainer: {
        marginVertical: 26,
        justifyContent: 'center'
    }
})