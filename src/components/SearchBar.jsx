import "../styles/components/searchbar.css"
import React from "react";

export default function SearchBar(props) {
    
    //Swaps the placeholder for the chosen game
    //Will swap the regions for its chosen game in the future
    function swapGameRegions() {
        let chooseGames = document.querySelectorAll("select[name='game']");
        let getSearchName = document.querySelector("input[name='user']");
        
        chooseGames.forEach((gameOption) => {
            switch(gameOption.value) {
                case 'valorant':
                    getSearchName.placeholder = "Input the number of users you want to see";
                    break;
                default:
                    getSearchName.placeholder = "Input a username here";
                    break;
            }
        })
    }

    let submitForm = (e) => {
        e.preventDefault()
        props.history.push('/TestStats'); // <--- The page you want to redirect your user to.
    }
    
    return (
        <div className="form-box">
            <form className="searchBar" onSubmit={e => submitForm(e)} method="GET" name="search">
                <div className="form-container">
                    <input type="text" placeholder="Input a username here" id="user" name="user"/>
                    
                    <button className="searchBarButton"><img src="images/search-icon.png" alt="search button" width="30" height="30"></img></button>
                </div>
                <div className="form-container2">
                    <select name="game" id="game" onChange={swapGameRegions}>
                        <option value="league">League of Legends</option>
                        <option value="tft">Teamfight Tactics</option>
                        <option value="valorant">Valorant</option>
                    </select>
                    <select name="region" id="region">
                        <option value="ap">AP</option>
                        <option value="br">BR</option>
                        <option value="eu">EU</option>
                        <option value="kr">KR</option>
                        <option value="latam">LATAM</option>
                        <option value="na">Valorant NA</option>
                        <option value="na1">LoL NA</option>
                        <option value="eun1">EUN</option>
                        <option value="euw1">EUW</option>
                        <option value="jp1">JP</option>
                        <option value="kr">KR</option>
                        <option value="la1">LAN</option>
                        <option value="la2">LAS</option>
                        <option value="oc1">OC</option>
                        <option value="ru">RU</option>
                        <option value="tr1">TR</option>
                    </select>
                    
                </div>
            </form>
        </div>
    )    
    
    
}