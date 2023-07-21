import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import {Videos,ChannelCard, VideoCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);
    const {id} = useParams();
      
    useEffect(() => {
       fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));
       fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items));
     } , [id])
  return(
    <Box minHeight='95vh'>
      <Box>
      <div style={{
        background: 'radial-gradient(circle, rgba(2,0,36,1) 1%, rgba(65,141,203,1) 28%, rgba(84,3,147,1) 60%, rgba(107,153,162,1) 98%)',
        zIndex:10,
        height:'300px'}}/>
      <ChannelCard channelDetail={channelDetail} 
        marginTop='-113px'/>
</Box>
<Box display='flex' p='2'>
<Box sx={{mr:{sm:'100px'}}}/>
<Videos videos={videos}/>
</Box>
  </Box>
   
  )   
  
}

export default ChannelDetail