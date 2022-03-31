import React from "react";
// import { useEffect } from 'react';

const thumbnail_width = '800'; 
const thumbnail_height = '500'; 

const TwitchStreamers = props => {
    const parseThumbnail = thumbnail => {
        thumbnail = thumbnail.replace('{width}', thumbnail_width);
        thumbnail = thumbnail.replace('{height}', thumbnail_height);
        return thumbnail;
    }

    const shortenTitle = title => {
        if (title.length > 40)
            title = title.substring(0, 40) + '...';
        return title;
    }

    return <>
            <div className="twitch-featured">
                <h1 className="content-h2">Featured Streamer</h1>
                <h2 className="twitch-featured-h2">{props.featuredStreamer.user_name} is playing {props.featuredStreamer.game_name}</h2>
                <div className="twitch-thumbnail">
                    <img src={parseThumbnail(props.featuredStreamer.thumbnail_url)} alt="stream thumbnail" height={thumbnail_height} width={thumbnail_width} />
                </div>
                <p>{shortenTitle(props.featuredStreamer.title)}</p>
                <div className="viewer-container">
                    <div>
                        <img className="viewer-count-img" alt="viewer count icon" src="images/twitch/view-count.png" height="25" width="25" />
                    </div>
                    <div>
                        <p className="viewer-count">{props.featuredStreamer.viewer_count.toLocaleString()}</p>
                    </div>
                </div>
            </div>
    </>
};

export default TwitchStreamers;