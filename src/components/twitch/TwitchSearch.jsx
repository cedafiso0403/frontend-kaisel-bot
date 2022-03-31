import React from "react";
// import api from '../api/api';
// import { useEffect, useState } from 'react';

const TwitchSearch = props => {
    return (
        <div className="form-box">
            <form className="searchBar" action="/TestStats" method="GET">
                <div className="form-container">
                    <input type="text" placeholder="Search for a channel" id="user" name="user"/>
                    <button className="searchBarButton"><img src="images/search-icon.png" alt="search button" width="30" height="30"></img></button>
                </div>
                <div className="form-container2">
                    <select name="game" id="game">
                        <option value="league">League of Legends</option>
                        <option value="tft">Teamfight Tactics</option>
                        <option value="valorant">Valorant</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default TwitchSearch;