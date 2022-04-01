import React from "react";
import "../styles/components/userStatsBox.css"
import axios from 'axios';
import { RankedStatsBox } from "./RankedStatsBox";
import ChampionStats from "./ChampionStats";

// const API_KEY = "RGAPI-16d77bc7-8e0a-49b8-b3fa-a39a4fb51fee";
const API_KEYS = ["RGAPI-673d0626-7ac3-4581-b338-8863cc0f5e33", "RGAPI-ae79c113-037c-4b3f-8df9-0e0ff501ecc2", "RGAPI-2b4415b8-3d7a-4a3a-9f3e-98e225aeb966", "RGAPI-d61a8137-67e7-4b93-9c32-80733664a908"];
const SEASON_12_BEGINS_TIMESTAMP = 1641297600;

export class UserStatsBox extends React.Component {

    static counter = 0;
    static index = 0;

    constructor(props) {
        super(props);
        this.state = {
            player: null,
            rankedStats: [{}, {}],
            retrievedData: false,
            historyMatch: [],
            filterData: {
                440: [],
                420: []
            },
            statsRetrieved: false,
            orderedData420: [],
            orderedData440: [],
            optionChoose: "Ranked_Solo/Duo",
            displayChamps: false
        };
    }

    static returnApiKey() {
        if (this.counter % 10 === 0) {
            this.index++;
            this.counter = 0;
        }
        if (this.index >= API_KEYS.length) {
            this.index = 0;
        }
        this.counter++;
        return API_KEYS[this.index];
    }

    setOrdererDataSolo(datas) {
        this.setState((prevState) => {
            if (datas.length > 0) {
                return {
                    orderedData420: [...datas]
                }
            } else {
                return {
                    orderedData420: [...prevState.orderedData420]
                }
            }
        })
    }

    setOrdererDataFlex(datas) {
        this.setState((prevState) => {
            if (datas.length > 0) {
                return {
                    orderedData440: [...datas]
                }
            } else {
                return {
                    orderedData440: [...prevState.orderedData420]
                }
            }
        })
    }

    setDisplayChamps() {
        this.setState((prevState) => {
            return {
                displayChamps: !prevState.displayChamps
            }
        }
        )
    }



    searchPlayerStatistics() {
        return new Promise((resolve, reject) => {
            let ApiCallString2 = `https://${this.props.region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${this.state.player.id}?api_key=${UserStatsBox.returnApiKey()}`;
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
                                    queueType: "Ranked Solo/Duo",
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
        let ApiCallString = `https://${this.props.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${this.props.user}?api_key=${UserStatsBox.returnApiKey()}`;
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
                        queueType: "Ranked Solo/Duo",
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
            let ApiCallString3 = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${this.state.player.puuid}/ids?queue=${queueId}&startTime=${SEASON_12_BEGINS_TIMESTAMP}&start=${index}&count=${size}&api_key=${UserStatsBox.returnApiKey()}`;
            let requestFunction = (path) => {
                return new Promise((resolve, reject) => {
                    axios.get(path).then((response) => {
                        resolve(this.setState((prevState) => {
                            if (response.data.length < 100) {
                                continueFlag = false;
                            }
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
                    await requestFunction(path);
                    index += size;
                    path = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${this.state.player.puuid}/ids?queue=${queueId}&startTime=${SEASON_12_BEGINS_TIMESTAMP}&start=${index}&count=${size}&api_key=${UserStatsBox.returnApiKey()}`;
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
                                let objChamp = {};
                                objChamp = {
                                    championName: response.data.info.participants[index].championName,
                                    kills: response.data.info.participants[index].kills,
                                    deaths: response.data.info.participants[index].deaths,
                                    assists: response.data.info.participants[index].assists,
                                    teamPosition: response.data.info.participants[index].teamPosition,
                                    totalMinionsKilled: response.data.info.participants[index].totalMinionsKilled + response.data.info.participants[index].neutralMinionsKilled,
                                    matchLength: (response.data.info.gameEndTimestamp - response.data.info.gameStartTimestamp) / 60000.0
                                }
                                object[response.data.info.queueId].push(objChamp);
                            } else {
                                let objChamp = {};
                                objChamp = {
                                    championName: response.data.info.participants[index].championName,
                                    kills: response.data.info.participants[index].kills,
                                    deaths: response.data.info.participants[index].deaths,
                                    assists: response.data.info.participants[index].assists,
                                    teamPosition: response.data.info.participants[index].teamPosition,
                                    totalMinionsKilled: response.data.info.participants[index].totalMinionsKilled + response.data.info.participants[index].neutralMinionsKilled,
                                    matchLength: (response.data.info.gameEndTimestamp - response.data.info.gameStartTimestamp) / 60000.0
                                }
                                object[response.data.info.queueId].push(objChamp);
                            }
                            return {
                                filterData: { ...object }
                            }

                        })
                    }, (error) => {
                        reject(error)
                    });
                    resolve()
                })
            }
            let i = 1;
            this.state.historyMatch.forEach(async (element) => {
                let path = `https://americas.api.riotgames.com/lol/match/v5/matches/${element}?api_key=${UserStatsBox.returnApiKey()}`;
                setTimeout(() => {
                    requestFunction(path);
                }, (200) * i)
                i += 1;
            });
            resolve();
            reject();
        })

    }

    componentDidMount() {
        this.searchForPlayer();
    }

    radioButtonHandlerer(e) {
        this.setState((prevState) => {
            return {
                optionChoose: e.target.value.split(" ").join("_")
            }
        }
        )
        this.setState((prevState) => {
            return {
                displayChamps: false
            }
        }
        )

    }

    render() {
        const { retrievedData, player, rankedStats, filterData } = this.state;
        let statsRetrieved = false;
        if (rankedStats !== null) {
            try {
                let indexFlex = rankedStats.findIndex((element) => {
                    return element.queueType === "RANKED_FLEX_SR" || element.queueType === "Ranked Flex"
                })

                if (indexFlex >= 0) {
                    rankedStats[indexFlex].queueType = "Ranked Flex"
                }

                let indexSolo = rankedStats.findIndex((element) => {
                    return element.queueType === "RANKED_SOLO_5x5" || element.queueType === "Ranked Solo/Duo"
                })

                if (indexSolo >= 0) {
                    rankedStats[indexSolo].queueType = "Ranked Solo/Duo"
                }

                let matchsFlex = indexFlex >= 0 ? rankedStats[indexFlex].wins + rankedStats[indexFlex].losses : 0;
                let matchsSolo = indexSolo >= 0 ? rankedStats[indexSolo].wins + rankedStats[indexSolo].losses : 0;
                if ((matchsFlex + matchsSolo) <= (filterData[440].length + filterData[420].length)) {
                    statsRetrieved = true;
                }
            } catch (error) {
                console.log(error);
            }
        }
        return (
            <>
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
                    <div className="stats-container tabs-stats" onChange={e => this.radioButtonHandlerer(e)}>
                        {
                            retrievedData ?
                                rankedStats.map((elements, i) => {
                                    if (elements.queueType !== "RANKED_TFT_PAIRS") {
                                        let data;
                                        let functionForOrderedData;
                                        if (elements.queueType === "Ranked Flex" && statsRetrieved) {
                                            data = filterData[440];
                                            functionForOrderedData = this.setOrdererDataFlex.bind(this)
                                        } else if (statsRetrieved) {
                                            data = filterData[420];
                                            functionForOrderedData = this.setOrdererDataSolo.bind(this)
                                        }

                                        let checkedAtt = elements.queueType !== "Ranked Flex" ? { "defaultChecked": "defaultChecked" } : {};

                                        if (statsRetrieved) {
                                            return (
                                                <>
                                                    <input type="radio" id={"tab" + elements.queueType} name="Ranked-tabs"  {...checkedAtt} key={"radio" + elements.queueType} value={elements.queueType}></input>
                                                    <label htmlFor={"tab" + elements.queueType} key={"label" + elements.queueType}>{elements.queueType}</label>
                                                    <div className="tab" key={"tab" + elements.queueType}>
                                                        <RankedStatsBox key={elements.queueType} {...elements} statsRetrieved={statsRetrieved} stats={data} setOrdererData={functionForOrderedData} setDisplayChamps={this.setDisplayChamps.bind(this)} />
                                                    </div>
                                                </>
                                            )
                                        } else {
                                            return (
                                                <>
                                                    <input type="radio" id={"tab" + elements.queueType} name="Ranked-tabs" {...checkedAtt} key={"radio" + elements.queueType} value={elements.queueType}></input>
                                                    <label htmlFor={"tab" + elements.queueType} key={"label" + elements.queueType}>{elements.queueType}</label>
                                                    <div className="tab" key={"tab" + elements.queueType}>
                                                        <RankedStatsBox key={elements.queueType} statsRetrieved={statsRetrieved} {...elements} setDisplayChamps={this.setDisplayChamps.bind(this)} />
                                                    </div>
                                                </>
                                            )
                                        }
                                    };
                                    return null; //default return value
                                }) :
                                <RankedStatsBox {...{
                                    queueType: "Loading"
                                }} />
                        }
                    </div>
                </div>
                {
                    this.state.displayChamps ? (statsRetrieved ? (<>
                        <div className="champion-stats">
                            <p className="champion-headers">Champ</p>
                            <p>Role</p>
                            <p>Kills</p>
                            <p>Deaths</p>
                            <p>Assist</p>
                            <p>CS/min</p>
                        </div>
                        {
                            (this.state.orderedData440.length > 0 && this.state.optionChoose === "Ranked_Flex") ?
                                this.state.orderedData440.slice(this.state.orderedData440.length - 5, this.state.orderedData440.length).reverse().map((elem) => {
                                    return <ChampionStats key={elem.championName + "" + elem.teamPosition} {...elem} />
                                })
                                : ""
                        }
                        {
                            (this.state.orderedData420.length > 0 && this.state.optionChoose === "Ranked_Solo/Duo") ?
                                this.state.orderedData420.slice((this.state.orderedData420.length - 5 < 0 ? 0 : this.state.orderedData420.length - 5)).reverse().map((elem) => {
                                    return <ChampionStats key={elem.championName + "" + elem.teamPosition} {...elem} />
                                })
                                : ""
                        }
                    </>) : <div className="champion-stats">
                        <p>Loading...</p>
                    </div>) : ""
                }
            </>
        )
    }
}