import React from 'react'
import { StyleSheet, FlatList, SafeAreaView, View, Text, TouchableOpacity} from 'react-native'
import RenderMovies from '../components/RenderMovies';
import { ListFooter } from '../components/ListFooter';
import { Entypo } from '@expo/vector-icons';

export const MoviesList = ({ movies, cat, title, navigation}) => {
    const renderMovies = ({ item }) => {
        return <RenderMovies data={item} navigation={navigation} />
    }
    return (
        <SafeAreaView>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity
                    style={styles.arrow}
                    onPress={() => navigation.navigate('catagoryMovies', { catagory: cat })}
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
                renderItem={renderMovies}
                horizontal={true}
                initialNumToRender={3}
                keyExtractor={(item) => item.id}
                ListFooterComponent={<ListFooter navigation={navigation} catagory={cat} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#eee',
        fontSize: 18,
        fontFamily: 'roboto-regular',
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
