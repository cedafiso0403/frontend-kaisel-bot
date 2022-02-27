import React from "react";
import "../styles/components/userStatsBox.css"
import axios from 'axios';
import { RankedStatsBox } from "./RankedStatsBox";

const API_KEY = "RGAPI-0d4db553-0647-4089-9e16-4a75d0d19ff8"

export class UserStatsBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: null,
            rankedStats: [{}, {}],
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
                    if (response2.data.length > 0) {
                        return {
                            rankedStats: [...response2.data],
                            retrievedData: true
                        };
                    } else {
                        return {
                            rankedStats: [{
                                queueType : "Ranked Solo 5x5",
                                tier: "Unranked",
                                rank: " ",
                                leaguePoints: 0,
                                wins: 0,
                                losses: 0
                            }, {
                                queueType : "Ranked Flex",
                                tier: "Unranked",
                                rank: " ",
                                leaguePoints: 0,
                                wins: 0,
                                losses: 0
                            }],
                            retrievedData: true
                        };
                    }
                });
            }).catch((error) => {
                console.log(error)
            })
        }).catch((error) => {
            this.setState((prevState) => {
                return {
                    player: {
                        name: "Not found",
                        profileIconId: 0
                    },
                    rankedStats: [{
                        queueType : "Ranked Solo 5x5",
                        tier: "Unranked",
                        rank: " ",
                        leaguePoints: 0,
                        wins: 0,
                        losses: 0
                    }, {
                        queueType : "Ranked Flex",
                        tier: "Unranked",
                        rank: " ",
                        leaguePoints: 0,
                        wins: 0,
                        losses: 0
                    }],
                    retrievedData: true
                };
            }
            );
        })
    }

    componentDidMount() {
        this.searchForPlayer();
    }

    render() {
        const { retrievedData, player, rankedStats } = this.state;
        console.log(this.state.rankedStats);
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
                            <img alt="For in game" src="/images/Loading.gif"></img>
                    }
                </div>
                <div className="stats-container">
                    {
                        retrievedData ?
                            rankedStats.map((elements) => {
                                if (elements.queueType !== "RANKED_TFT_PAIRS") {
                                    return (<RankedStatsBox key={elements.queueType} {...elements} />)
                                };
                            }) :
                            <RankedStatsBox {...{
                                queueType: "Loading"
                            }} />
                    }
                </div>
            </div>
        )
    }
}