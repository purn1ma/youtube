import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import {Videos,ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null);
    const {id} = useParams();
      console.log(channelDetail)
    useEffect(() => {
       fetchFromAPI(`channel?part="snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]))
    }, [id])

  
}

export default ChannelDetail