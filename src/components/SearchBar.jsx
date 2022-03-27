import "../styles/components/searchbar.css"
import React, {useState} from "react";
import ReactDOM from 'react-dom';

var selectedGameRegions = ['NA', 'EUN', 'EUW', 'JP', 'KR', 'LAN', 'LAS', 'OC', 'RU', 'TR'];
export default function SearchBar() {
    
    // let [selectedGame, setRegion] = useState({ gameName: '', region: '' });
    // var t = "Unknown Game Chosen";
    function swapGameRegions() {
        let chooseGames = document.querySelectorAll("select[name='game']");
        let getSearchName = document.querySelector("input[name='user']");
        console.log(getSearchName.placeholder);

        chooseGames.forEach((gameOption) => {
            // t = gameOption.value;
            // this.forceUpdate();
            console.log(selectedGameRegions);
            selectedGameRegions = [];
            let gameOptionValue = gameOption.value;
            console.log("Gameoptionvalue: " + gameOptionValue);
            // console.log("Selected game: " + selectedGame);
            switch(gameOptionValue) {
                case 'valorant':
                    getSearchName.placeholder = "Input the number of users you want to see";
                    // setRegion((g) => ({...g, region: 'AP'}));
                    // setRegion([...selectedGame, 'BR']);
                    // setRegion([...selectedGame, 'EU']);
                    // setRegion([...selectedGame, 'KR']);
                    // setRegion([...selectedGame, 'LATAM']);
                    // setRegion([...selectedGame, 'NA']);
                    selectedGameRegions.push('AP');
                    selectedGameRegions.push('BR');
                    selectedGameRegions.push('EU');
                    selectedGameRegions.push('KR');
                    selectedGameRegions.push('LATAM');
                    selectedGameRegions.push('NA');
                    console.log(selectedGameRegions);
                    break;
                default:
                    getSearchName.placeholder = "Input a username here";
                    // setRegion([...selectedGame, 'NA']);
                    // setRegion([...selectedGame, 'EUN']);
                    // setRegion([...selectedGame, 'EUW']);
                    // setRegion([...selectedGame, 'JP']);
                    // setRegion([...selectedGame, 'KR']);
                    // setRegion([...selectedGame, 'LAN']);
                    // setRegion([...selectedGame, 'LAS']);
                    // setRegion([...selectedGame, 'OC']);
                    // setRegion([...selectedGame, 'RU']);
                    // setRegion([...selectedGame, 'TR']);
                    break;
            }
            this.forceUpdate();
            // setRegion([selectedGame, gameOption.value]);
            // selectedGame.map((item) => {
            //     console.log(item);
            // })
            // selectedGame = gameOption.value;
            // this.forceUpdate();
        })
    }
    
    // function regions() {
    //     switch(t) {
    //         case 'valorant':
    //             return (
    //                 <select name="region" id="region">
    //                     <option value="ap">AP</option>
    //                     <option value="br">BR</option>
    //                     <option value="eu">EU</option>
    //                     <option value="kr">KR</option>
    //                     <option value="latam">LATAM</option>
    //                     <option value="na">NA</option>
    //                 </select>
    //             )
    //         default:
    //             return (
    //                 <select name="region" id="region">
    //                     <option value="na1">NA</option>
    //                     <option value="eun1">EUN</option>
    //                     <option value="euw1">EUW</option>
    //                     <option value="jp1">JP</option>
    //                     <option value="kr">KR</option>
    //                     <option value="la1">LAN</option>
    //                     <option value="la2">LAS</option>
    //                     <option value="oc1">OC</option>
    //                     <option value="ru">RU</option>
    //                     <option value="tr1">TR</option>
    //                 </select>
    //             )
    //     }
    // }
    return (
        <div className="form-box">
            <form className="searchBar" action="/TestStats" method="GET" name="search">
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
                        {selectedGameRegions.map(item => 
                            <option key={item} value={item}>{item}</option>
                        )}    
                    </select>
                    
                </div>
            </form>
        </div>
    )
}