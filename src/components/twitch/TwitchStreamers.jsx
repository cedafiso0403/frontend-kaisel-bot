import React from "react";
// import axios from 'axios';
import api from '../api/api';
import { useEffect, useState } from 'react';

const thumbnail_width = '400'; 
const thumbnail_height = '250'; 

const league = {
    id: "21779",
    name: "League of Legends"
}
const valorant = {
    id: "516575",
    name: "VALORANT"
}
const tft = {
    id: "513143",
    name: "Teamfight Tactics"
}

const TwitchStreamers = props => {
    const [streamers, setStreamers] = useState([]);
    const [gameID, setgameID] = useState(league.id);
    const [gameName, setGameName] = useState(league.name);
    const [streamerNum, setStreamerNum] = useState(5);

    useEffect(() => {
        const fetchData = async gameID => {
            const streams = await api.get(`https://api.twitch.tv/helix/streams?first=${streamerNum}&game_id=${gameID}`);
            setStreamers(streams.data.data);
            // const thumbnail = await api.get(`https://static-cdn.jtvnw.net/previews-ttv/live_user_{streamers}-${thumbnail_width}x${thumbnail_height}.jpg`);
        };
        fetchData(gameID);
    },[gameID, streamerNum]);

    const selectChange = event => {
        //https://stackoverflow.com/questions/63264788/how-to-get-id-of-selected-option-in-react-js#:~:text=You%20can%20add%20an%20onChange,id%20from%20the%20selected%20option.&text=This%20is%20a%20bit%20of%20an%20anti%2Dpattern%20for%20React.
        const index = event.target.selectedIndex;
        const element = event.target.childNodes[index];
        const option = element.getAttribute('id');
        setgameID(option);
        setGameName(event.target.value);
    }

    const streamerNumberChange = e => {
        setStreamerNum(e.target.value);
    };

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
        <div className="twitch-form">
            <form>
                <label>Search for streamers by game</label>
                <select onChange={selectChange} >
                    <option id={league.id} value="League of Legends">League of Legends</option>
                    <option id={valorant.id} value="VALORANT">VALORANT</option>
                    <option id={tft.id} value="Teamfight Tactics">TFT</option>
                </select>
                <label>Number of top streamers</label>
                <input type="number" placeholder="5" value={streamerNum} min="1" max="100" onChange={streamerNumberChange}/>

            </form>
        </div>
        <p className="features-subtitle">Current Top {gameName} Streamers:</p>
        {streamers.map((stream, index) => <div key={index} className="twitch-streamer">
            <h2 className="twitch-h2">{stream.user_name}</h2>
            <div className="twitch-thumbnail">
                <img src={parseThumbnail(stream.thumbnail_url)} alt="stream thumbnail" height={thumbnail_height} width={thumbnail_width} />
            </div>
            <p>{shortenTitle(stream.title)}</p>
            <div className="viewer-container">
                <div>
                    <img className="viewer-count-img" alt="viewer count icon" src="images/twitch/view-count.png" height="25" width="25" />
                </div>
                <div>
                    <p className="viewer-count">{stream.viewer_count.toLocaleString()}</p>
                </div>
            </div>
        </div>)}
    </>
};

export default TwitchStreamers;