import { StyleSheet, SafeAreaView, FlatList, Animated } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { BannerSlider } from './BannerSlider';
import { windowHeight, windowWidth } from '../globals/Dimension'
 
export default function Carousel({ banners }) {
    const [data, setData] = useState(banners)
    const scrollX = new Animated.Value(0);
    const flatlist = useRef(null);
    
    let position = Animated.divide(scrollX, windowWidth - 40)

    const infiniteScroll = (datalist) => {
        const numberOfdata = datalist.length;
        let scrollValue = 0, scrolled = 0;

        setInterval(function () {
            scrolled++;
            if (scrolled < numberOfdata) {
                scrollValue += windowWidth - 40;
            } else {
                scrollValue = 0;
                scrolled = 0;
            }
            flatlist.current.scrollToOffset({ animated: true, offset: scrollValue })
        }, 3000)
    }
    useEffect(() => {
        setData([...banners])
        infiniteScroll(data)
        
    }, [])

    const renderBanner = ({ item }) => {
        return <BannerSlider data={item} />
    }

    return (
        <SafeAreaView>
            <FlatList
                ref={flatlist}
                data={data}
                extraData={data}
                renderItem={renderBanner}
                keyExtractor={(item) => item.id}
                horizontal={true}
                pagingEnabled
                scrollEnabled
                snapToAlignment="center"
                scrollEventThrottle={16}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                initialScrollIndex={3}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } }
                ])}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        width: windowWidth,
        height: windowHeight / 2.4,
        overflow: 'hidden',
    },
    item: {
        width: '100%',
        height: '100%',
    }
});
