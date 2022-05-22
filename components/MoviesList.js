import React, {memo} from 'react'
import { StyleSheet, FlatList, SafeAreaView, View, Text, TouchableOpacity} from 'react-native'
import RenderMovies from '../components/RenderMovies';
import { ListFooter } from '../components/Layout';
import { Entypo } from '@expo/vector-icons';

export default memo(({ movies, cat, title, navigation}) => {
    const renderMovies = ({ item }) => {
        return <RenderMovies data={item} navigation={navigation} />
    }
    const navigateTo = () => navigation.navigate('catagoryMovies', { catagory: cat, data: movies })
    return (
        <SafeAreaView>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity
                    style={styles.arrow}
                    onPress={navigateTo}
                >
                    <Entypo
                        name="chevron-small-right"
                        size={28}
                        color='rgb(234, 88, 12)'
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                data={movies}
                extraData={movies}
                decelerationRate="fast"
                scrollEnabled
                renderItem={renderMovies}
                horizontal={true}
                keyExtractor={(item) => item.id}
                ListFooterComponent={<ListFooter navigateTo={navigateTo} />}
            />
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    title: {
        color: '#eee',
        fontSize: 18,
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