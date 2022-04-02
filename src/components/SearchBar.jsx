import "../styles/components/searchbar.css"
import "../styles/components/mediaquery.css";
import React from "react";
import { useState } from  "react";

export default function SearchBar() {
    const [selectedGame, setSelectedGame] = useState('league');
    //Swaps the placeholder for the chosen game
    //Will swap the regions for its chosen game in the future
    function swapGameRegions() {
        let chooseGames = document.querySelectorAll("select[name='game']");
        let getSearchName = document.querySelector("input[name='user']");
        
        chooseGames.forEach((gameOption) => {
            switch(gameOption.value) {
                case 'valorant':
                    getSearchName.placeholder = "Input the number of users you want to see";
                    setSelectedGame('valorant');
                    break;
                default:
                    getSearchName.placeholder = "Input a username here";
                    setSelectedGame('league');
                    break;
            }
        })
    }
    
    return (
        <div className="form-box">
            <form className="searchBar" action="/frontend-kaisel-bot/TestStats" method="GET" name="search">
                <div className="form-container">
                    <input type="text" placeholder="Input a username here" id="user" name="user"/>
                    <button className="searchBarButton"><img src="images/search-icon.png" alt="search button" width="30" height="30"></img></button>
                </div>
                <div className="form-container2">
                    <select name="game" id="game" onChange={swapGameRegions}>
                        <option value="league">League of Legends</option>
                        <option value="valorant">Valorant</option>
                    </select>
                    {selectedGame === 'league' && <select name="region" id="region">
                        <option value="na1">NA</option>
                        <option value="eun1">EUN</option>
                        <option value="euw1">EUW</option>
                        <option value="jp1">JP</option>
                        <option value="kr">KR</option>
                        <option value="la1">LAN</option>
                        <option value="la2">LAS</option>
                        <option value="oc1">OC</option>
                        <option value="ru">RU</option>
                        <option value="tr1">TR</option>
                    </select>}
                    {selectedGame === 'valorant' && <select name="region" id="region">
                        <option value="na">NA</option>
                        <option value="ap">AP</option>
                        <option value="br">BR</option>
                        <option value="eu">EU</option>
                        <option value="kr">KR</option>
                        <option value="latam">LATAM</option>
                    </select>}

                </div>
            </form>
        </div>
    )    
    
    
}
