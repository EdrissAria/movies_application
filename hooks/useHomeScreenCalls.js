import { useState, useCallback, useEffect } from 'react';
import { useQuery } from 'react-query'
import * as api from '../api/Api';

export const useHomeScreenCalls = () =>{
    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout)
        })
    }
    const [refrishing, setRefrishing] = useState(false);
    // const [upcoming, setUpcoming] = useState([]);
    // const [popular, setPopular] = useState([]);
    // const [toprated, setToprated] = useState([]);
    // const [nowPlaying, setNowPlaying] = useState([]);

    const getUpcoming = useQuery('upcoming', api.getUpcoming);
    const getNow_playing = useQuery('now_playing', api.getNow_playing);
    const getPopular = useQuery('populer', api.getPopular);
    const getTop_rated = useQuery('toprated', api.getTop_rated);

    // useEffect(() => {
    //     let isUnmounted = false;
    //     if (!isUnmounted) {
    //         setPopular(getPopular?.data ? [...getPopular.data.results] : []);
    //         setToprated(getTop_rated?.data ? [...getTop_rated.data.results] : []);
    //         setUpcoming(getUpcoming?.data ? [...getUpcoming.data.results] : []);
    //         setNowPlaying(getNow_playing?.data ? [...getNow_playing.data.results] : []);
    //     }
    //     return () => { isUnmounted = true }

    // }, [getPopular.data, getTop_rated.data, getUpcoming.data, getNow_playing.data])

    const onRefrish = useCallback(() => {
        setRefrishing(true)
        wait(2000).then(() => setRefrishing(false))
        getNow_playing.refetch();
        getPopular.refetch();
        getTop_rated.refetch();
        getUpcoming.refetch();
    }, [])

    return [refrishing, getUpcoming, getPopular, getTop_rated, onRefrish, getNow_playing]
}