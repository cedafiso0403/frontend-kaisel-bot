/*
This is just a testing page so I can learn how to use the API 
*/

import React from "react";
import ReactDOM from "react-dom";
// import axios from 'axios';
import api from './api/api';
import { useEffect, useState } from 'react';

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

const TwitchAPI = props => {
    const [streamers, setStreamers] = useState([]);
    const [gameID, setgameID] = useState(league.id);
    const [gameName, setGameName] = useState(league.name);
    const [streamerNum, setStreamerNum] = useState(5);

    useEffect(() => {
        const fetchData = async gameID => {
            const streams = await api.get(`https://api.twitch.tv/helix/streams?first=${streamerNum}&game_id=${gameID}`);
            setStreamers(streams.data.data);
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
        {streamers.map((stream, index) => <p key={index}>{stream.user_name}</p>)}
    </>
};

export default TwitchAPI;