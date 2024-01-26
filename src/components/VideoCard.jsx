import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { errorThumbnailUrl, errorVideoTitle, errorVideoUrl, errorChannelUrl, errorChannelTitle } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px', }, boxShadow: 'none', borderRadius: 0 }}>
            <Link to={videoId ? `/video/${videoId}` : errorVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url || errorThumbnailUrl}
                    alt={snippet?.title || errorVideoTitle}
                    sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, height: 180 }} />
            </Link>
            <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }} >
                <Link to={videoId ? `/video/${videoId}` : errorVideoUrl} >
                    <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                        {snippet?.title.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : errorChannelUrl} >
                    <Typography variant="subtitle2" fontWeight="bold" color="gray">
                        {snippet?.channelTitle || errorChannelTitle}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>

        </Card>
    )
}

export default VideoCard