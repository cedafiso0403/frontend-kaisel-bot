import React from "react";
import api from '../api/api';

import { useEffect, useState } from 'react';

const box_art_width = '200'; 
const box_art_height = '250'; 

const TwitchGames = props => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const streams = await api.get(`https://api.twitch.tv/helix/games/top?first=5`);
            setGames(streams.data.data);
        };
        fetchData();
    },[])

    const setDimensions = thumbnail => {
        thumbnail = thumbnail.replace('{width}', box_art_width);
        thumbnail = thumbnail.replace('{height}', box_art_height);
        return thumbnail;
    }

    return <>
        <h1 className="content-h2">Top Games</h1>
        <div className="games-container">
            {games.map((game, index) => <div className="twitch-streamer" key={index}>
                <h3>{game.name}</h3>
                <img alt="game card" src={setDimensions(game.box_art_url)} height={game.box_art_height} width={game.box_art_width}/>
                
            </div>)}
        </div>
    </>
}

export default TwitchGames;