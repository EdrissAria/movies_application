import React from 'react'; 
import {StyleSheet, View, Text, ScrollView, SafeAreaView} from 'react-native'
import { globalStyle } from '../globals/GlobalStyle';
import { sliderData } from '../globals/Data';
import Carousel from 'react-native-snap-carousel'
import { windowWidth } from '../globals/Dimension'
 
export const Home = ({navigation})=> {
    const renderBanner = ({item, index})=>{
        return <BannerSlider data={item} />
    }
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView style={{ padding: 20 }}>
                <Carousel 
                    data={sliderData}
                    renderItem={renderBanner}
                    sliderWidth={windowWidth}
                    itemWidth={300}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})