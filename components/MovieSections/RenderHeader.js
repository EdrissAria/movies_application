import { memo } from 'react'
import { View, Text, TouchableOpacity,ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons'
import {styles} from './index'
 


export const RenderHeader = memo(({ navigation, data, type }) => {
    return (
        <ImageBackground
            source={{ uri: type == 'movie' ?"https://image.tmdb.org/t/p/w780" + data?.backdrop_path:
            "https://image.tmdb.org/t/p/original" + data?.profile_path}}
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
                        onPress={() => navigation.goBack()}
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
