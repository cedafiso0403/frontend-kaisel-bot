import React from "react";
import axios from 'axios';

import { useEffect, useState } from 'react';

const box_art_width = '300'; 
const box_art_height = '400'; 

const token = '7mt6hn5kple31chm21slkaugf9pcyx';

const TwitchGames = props => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        let flag = true;
        const fetchData = async () => {
            const streams = await axios.get(`https://api.twitch.tv/helix/games/top?first=5`, {
                headers: {
                    'Client-ID': '3acfejfs22gh634bp8agsttdmcfftb',
                    'Authorization': `Bearer ${token}`
                }});
            if(flag)
                setGames(streams.data.data);
        };
        fetchData();

        return ()=>{
            flag = false;
        }
    },[])

    const setDimensions = thumbnail => {
        thumbnail = thumbnail.replace('{width}', box_art_width);
        thumbnail = thumbnail.replace('{height}', box_art_height);
        return thumbnail;
    }

    return <>
        <h1 className="content-h2">Top Categories</h1>
        <br></br>
        <div className="games-container">
            {games.map((game, index) => <a className="twitch-a" href={`https://www.twitch.tv/directory/game/${game.name}`} target="_blank" rel="noreferrer">
                <div className="twitch-game" key={index}>
                <h3>{game.name}</h3>
                <img alt={"game card"+index} src={setDimensions(game.box_art_url)} height={game.box_art_height} width={game.box_art_width}/>
            </div>
        </a>)}
        </div>
    </>
}

export default TwitchGames;
