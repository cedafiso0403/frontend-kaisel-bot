import React from "react";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import { useEffect, useState } from 'react';
import api from '../api/api';

const thumbnail_width = '1000'; 
const thumbnail_height = '500'; 

const TwitchStreamers = props => {
    const [featuredViewers, setFeaturedViewers] = useState(props.featuredStreamer.viewer_count);

    const shortenTitle = title => {
        if (title.length > 40)
            title = title.substring(0, 40) + '...';
        return title;
    }

    useEffect(function refreshViewerCount() {
        const fetchData = () => {
            api.get(`https://api.twitch.tv/helix/streams?user_id=${props.featuredStreamer.user_id}`)
            .then(result=> {
                setFeaturedViewers(result.data.data[0].viewer_count);
            })
            .catch(err => console.log(err));
        };
        var interval = setInterval(fetchData, 20000);
        return () => {
            clearInterval(interval);
        }
    },[props.featuredStreamer.user_id]);

    return <>
            <div className="twitch-featured">
                <h1 className="content-h2">⭐Featured Streamer⭐</h1>
                <h2 className="twitch-featured-h2">{props.featuredStreamer.user_name} is playing {props.featuredStreamer.game_name}</h2>
                <div className="twitch-thumbnail">
                    <ReactTwitchEmbedVideo 
                        channel={props.featuredStreamer.user_login} 
                        theme="dark" 
                        width={thumbnail_width} 
                        height={thumbnail_height}
                    />
                </div>
                <p>{shortenTitle(props.featuredStreamer.title)}</p>
                <div className="viewer-container">
                    <div>
                        <img className="viewer-count-img" alt="viewer count icon" src="images/twitch/view-count.png" height="25" width="25" />
                    </div>
                    <div>
                        <p className="viewer-count">{featuredViewers.toLocaleString()}</p>
                    </div>
                </div>
            </div>
    </>
};

export default TwitchStreamers;