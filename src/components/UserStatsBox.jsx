import React from "react";
import "../styles/components/userStatsBox.css"
import axios from 'axios';

const API_KEY = "RGAPI-0d4db553-0647-4089-9e16-4a75d0d19ff8"

export class UserStatsBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: null,
            rankedStats: [],
            retrievedData: false
        };
    }

    searchForPlayer() {
        let ApiCallString = `https://${this.props.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${this.props.user}?api_key=${API_KEY}`;
        axios.get(ApiCallString).then((response) => {
            this.setState((state, props) => {
                return {
                    player: response.data,
                };
            });
            let ApiCallString2 = `https://${this.props.region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${this.state.player.id}?api_key=${API_KEY}`;
            axios.get(ApiCallString2).then((response2) => {
                this.setState((prevState) => {
                    return {
                        rankedStats: [...prevState.rankedStats, ...response2.data],
                        retrievedData: true
                    };
                });
            }).catch((error) => {
                console.log(error)
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    componentDidMount() {
        this.searchForPlayer();
    }

    render() {
        const { retrievedData, player, rankedStats } = this.state;
        return (
            <div className="user-stats-box">
                <div className="profile-picture-container">
                    <div className="stat-container">
                        {
                            retrievedData ?
                                <h4>{player.name}</h4> :
                                <h4>Loading</h4>
                        }
                    </div>
                    {
                        retrievedData ?
                            <img alt="For in game" src={`http://ddragon.leagueoflegends.com/cdn/12.4.1/img/profileicon/${player.profileIconId}.png`}></img> :
                            <img alt="For in game" src=""></img>
                    }
                </div>
                <div className="stats-container">
                    <div className="stat-container">
                        <h4>Wins: </h4>
                        {
                            retrievedData ?
                                <p>{rankedStats[0].wins}</p> :
                                <p>Loading</p>
                        }
                    </div>
                    <div className="stat-container">
                        <h4>Losses: </h4>
                        {
                            retrievedData ?
                                <p>{rankedStats[0].losses}</p> :
                                <p>Loading</p>
                        }
                    </div>
                    <div className="stat-container">
                        <h4>Win Rate: </h4>
                        {
                            retrievedData ?
                                <p>{parseInt(rankedStats[0].wins * 100 / (rankedStats[0].losses + rankedStats[0].wins))}%</p> :
                                <p>Loading</p>
                        }
                    </div>
                    <div className="stat-container">
                        <h4>Rank: </h4>
                        {
                            retrievedData ?
                                <p>{rankedStats[0].tier}</p> :
                                <p>Loading</p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}