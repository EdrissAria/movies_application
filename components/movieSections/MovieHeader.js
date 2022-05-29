// TODO Imports
import { memo } from "react"

// render backdrop path in movie detail component or profile path in actor component and the name of movie
function MovieHeader({ navigation, data, type }) {
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
}


const styles = StyleSheet.create({
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
})


export default memo(MovieHeader)
