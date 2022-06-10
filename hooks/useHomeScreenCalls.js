import { useState, useCallback } from 'react';
import { useQuery } from 'react-query'
import * as api from '../api/Api';

export const useHomeScreenCalls = () =>{
    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout)
        })
    }
    const [refrishing, setRefrishing] = useState(false);
   

    const getUpcoming = useQuery('upcoming', api.getUpcoming);
    const getNow_playing = useQuery('now_playing', api.getNow_playing);
    const getPopular = useQuery('populer', api.getPopular);
    const getTop_rated = useQuery('toprated', api.getTop_rated);

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