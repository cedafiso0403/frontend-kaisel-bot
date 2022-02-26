import React from "react";
import "../styles/components/userStatsBox.css"
import axios from 'axios';

const API_KEY = "RGAPI-055306a1-94a5-4a30-952a-d35829095d43"

export class UserStatsBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: null,
            retrievedData: false
        };
    }

    searchForPlayer(user) {
        let ApiCallString = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${user}?api_key=${API_KEY}`;
        axios.get(ApiCallString).then((response) => {
            this.setState((state, props) => {
                return {
                    player: response.data,
                    retrievedData: true
                };
            });
            console.log(this.state.player.puuid);
            let ApiCallString2 = `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${this.state.player.id}?api_key=${API_KEY}`;
            axios.get(ApiCallString2).then((response2) =>{
                console.log(response2.data);
            }).catch((error)=>{
                console.log(error)
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    componentDidMount() {
        this.searchForPlayer(this.props.user);
    }

    render() {
        const { retrievedData, player } = this.state;
        return (
            <div className="user-stats-box">
                <div className="profile-picture-container">
                    {
                        retrievedData ?
                            <img alt="For in game" src={`http://ddragon.leagueoflegends.com/cdn/12.4.1/img/profileicon/${player.profileIconId}.png`}></img> :
                            <img alt="For in game" src=""></img>
                    }
                </div>
                <div className="stats-container">
                    <div className="stat-container">
                        <h4>Username: </h4>
                        {
                            retrievedData ?
                            <p>{player.name}</p> :
                            <p>Loading</p>
                        }
                    </div>
                    <div className="stat-container">
                        <h4>Games Played: </h4>
                        <p>{this.props.gamesPlayed}</p>
                    </div>
                    <div className="stat-container">
                        <h4>Win Rate: </h4>
                        <p>{this.props.winRate}%</p>
                    </div>
                    <div className="stat-container">
                        <h4>Rank: </h4>
                        <p>{this.props.rank}</p>
                    </div>
                    <div className="stat-container">
                        <h4>KDR: </h4>
                        <p>{this.props.kdr}</p>
                    </div>
                </div>
            </div>
        )
    }
}