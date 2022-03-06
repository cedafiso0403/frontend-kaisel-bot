import React from "react";
import "../styles/components/userStatsBox.css"
import axios from 'axios';
import { RankedStatsBox } from "./RankedStatsBox";

const API_KEY = "RGAPI-5748e0a2-13f9-462c-bbe7-6619df5ca4d8";
const SEASON_12_BEGINS_TIMESTAMP = 1641297600;

export class UserStatsBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: null,
            rankedStats: [{}, {}],
            retrievedData: false,
            historyMatch: [],
            filterData: {
                440: [0, 0, 0, { lane: [] }, { champions: [] }],
                420: [0, 0, 0, { lane: [] }, { champions: [] }]
            },
            statsRetrieved: false
        };
    }

    searchPlayerStatistics() {
        return new Promise((resolve, reject) => {
            let ApiCallString2 = `https://${this.props.region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${this.state.player.id}?api_key=${API_KEY}`;
            axios.get(ApiCallString2).then((response2) => {
                this.setState((prevState) => {
                    let indexTFT = response2.data.findIndex(object => {
                        return object.queueType === "RANKED_TFT_PAIRS";
                    })
                    response2.data.splice(indexTFT, indexTFT + 1);
                    if (response2.data.length >= 2) {
                        return {
                            rankedStats: [...response2.data],
                            retrievedData: true
                        };
                    } else if (response2.data.length >= 1) {
                        if (response2.data[0].queueType === "RANKED_FLEX_SR") {
                            return {
                                rankedStats: [...response2.data, {
                                    queueType: "Ranked Solo Duo 5x5",
                                    tier: "Unranked",
                                    rank: " ",
                                    leaguePoints: 0,
                                    wins: 0,
                                    losses: 0
                                }],
                                retrievedData: true
                            };
                        } else {
                            return {
                                rankedStats: [...response2.data, {
                                    queueType: "Ranked Flex",
                                    tier: "Unranked",
                                    rank: " ",
                                    leaguePoints: 0,
                                    wins: 0,
                                    losses: 0
                                }],
                                retrievedData: true
                            };
                        }
                    } else {
                        return {
                            rankedStats: [{
                                queueType: "Ranked Solo 5x5",
                                tier: "Unranked",
                                rank: " ",
                                leaguePoints: 0,
                                wins: 0,
                                losses: 0
                            }, {
                                queueType: "Ranked Flex",
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
                resolve();
            }).catch((error) => {
                console.log(error)
                reject();
            })
        })
    }

    searchForPlayer() {
        let ApiCallString = `https://${this.props.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${this.props.user}?api_key=${API_KEY}`;
        axios.get(ApiCallString).then((response) => {
            this.setState((state, props) => {
                return {
                    player: response.data,
                };
            });
            this.searchPlayerStatistics().then(() => {
                this.getAllStat(420).then(() => {

                }).then(() => {
                    this.getAllStat(440).then(() => {
                        this.getAllInformationFromMatchs();
                    });
                })
            })
        }).catch((error) => {
            this.setState((prevState) => {
                return {
                    player: {
                        name: "Not found",
                        profileIconId: 29
                    },
                    rankedStats: [{
                        queueType: "Ranked Flex",
                        tier: "Unranked",
                        rank: " ",
                        leaguePoints: 0,
                        wins: 0,
                        losses: 0
                    }, {
                        queueType: "Ranked Solo Duo 5x5",
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

    getAllStat(queueId) {
        return new Promise((resolve, reject) => {
            let index = 0;
            let size = 100;
            let continueFlag = true;
            let ApiCallString3 = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${this.state.player.puuid}/ids?queue=${queueId}&startTime=${SEASON_12_BEGINS_TIMESTAMP}&start=${index}&count=${size}&api_key=${API_KEY}`;
            let requestFunction = (path) => {
                return new Promise((resolve, reject) => {
                    axios.get(path).then((response) => {
                        resolve(this.setState((prevState) => {
                            if (response.data.length < 100) {
                                continueFlag = false;
                            }
                            console.log('Request')
                            return {
                                historyMatch: [...prevState.historyMatch, ...response.data]
                            }
                        }))
                    }, (error) => {
                        reject(error)
                    });
                })
            }
            let callRequest = async (path) => {
                do {
                    console.log("Happening")
                    await requestFunction(path);
                    index += size;
                    path = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${this.state.player.puuid}/ids?queue=${queueId}&startTime=${SEASON_12_BEGINS_TIMESTAMP}&start=${index}&count=${size}&api_key=${API_KEY}`;
                } while (continueFlag);
                resolve();
                reject();
            }
            callRequest(ApiCallString3);
        })
    }

    getAllInformationFromMatchs() {
        return new Promise((resolve, reject) => {
            let requestFunction = (path) => {
                return new Promise((resolve, reject) => {
                    axios.get(path).then((response) => {
                        this.setState((prevState) => {
                            let object = { ...prevState.filterData }
                            let index = response.data.info.participants.findIndex((elements) => elements.summonerName === this.state.player.name);
                            if (!object.hasOwnProperty(response.data.info.queueId)) {
                                object[response.data.info.queueId] = [];
                                object[response.data.info.queueId].push(response.data.info.participants[index].kills);
                                object[response.data.info.queueId].push(response.data.info.participants[index].deaths);
                                object[response.data.info.queueId].push(response.data.info.participants[index].assists);
                                object[response.data.info.queueId].push({ lane: [response.data.info.participants[index].lane] });
                                object[response.data.info.queueId].push({ champions: [response.data.info.participants[index].championName] });
                            } else {
                                object[response.data.info.queueId][0] += response.data.info.participants[index].kills
                                object[response.data.info.queueId][1] += response.data.info.participants[index].deaths
                                object[response.data.info.queueId][2] += response.data.info.participants[index].assists
                                object[response.data.info.queueId][3].lane.push(response.data.info.participants[index].lane);
                                object[response.data.info.queueId][4].champions.push(response.data.info.participants[index].championName);
                            }

                            return {
                                filterData: { ...object }
                            }

                        })
                        resolve()
                    }, (error) => {
                        reject(error)
                    });

                })
            }
            let i = 1;
            this.state.historyMatch.forEach(async (element) => {
                let path = `https://americas.api.riotgames.com/lol/match/v5/matches/${element}?api_key=${API_KEY}`;
                setTimeout(() => {
                    requestFunction(path);
                }, (2500) * i)
                i += 1;
            });
            resolve();
            reject();
        })

    }

    componentDidMount() {
        this.searchForPlayer();
    }

    render() {
        const { retrievedData, player, rankedStats, filterData } = this.state;
        let statsRetrieved = false;
        if (rankedStats !== null) {
            try {
                let indexFlex = rankedStats.findIndex((element) => {
                    return element.queueType === "RANKED_FLEX_SR"
                })

                let indexSolo = rankedStats.findIndex((element) => {
                    return element.queueType === "RANKED_SOLO_5x5"
                })
                let matchsFlex = rankedStats[indexFlex].wins + rankedStats[indexFlex].losses;
                let matchsSolo = rankedStats[indexSolo].wins + rankedStats[indexSolo].losses;
                console.log(filterData[440][3].lane.length + filterData[420][3].lane.length);
                console.log(matchsFlex + matchsSolo);
                if ((matchsFlex + matchsSolo) <= (filterData[440][3].lane.length + filterData[420][3].lane.length)) {
                    statsRetrieved = true;
                    console.log(statsRetrieved);
                }
            } catch (error) {

            }
        }
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
                                    let data;
                                    if (elements.queueType === "RANKED_FLEX_SR" && statsRetrieved) {
                                        data = filterData[440];
                                    } else if (statsRetrieved) {
                                        data = filterData[420];
                                    }

                                    if (statsRetrieved) {
                                        console.log("Stats passed")
                                        return (<RankedStatsBox key={elements.queueType} {...elements} statsRetrieved={statsRetrieved} {...data} />)
                                    } else {
                                        return (<RankedStatsBox key={elements.queueType} {...elements} />)
                                    }
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