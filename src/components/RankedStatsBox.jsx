import React from "react";
import "../styles/components/rankedStatsBox.css";
// import axios from 'axios';

//string[0].toUpperCase() + string.substring(1)
// let queueIds;
// axios.get('https://static.developer.riotgames.com/docs/lol/queues.json').then((response) => {
//     queueIds = response.data;
// })

const getOcurrencies = (dataArray) => {
    let count = {}
    let max = ["UNRANKED", 0];
    dataArray.forEach(element => {
        count[element] = count[element] ? count[element] + 1 : 1;
    });

    for (const [key, value] of Object.entries(count)) {
        if (max[1] <= value) {
            max[0] = key;
            max[1] = value;
        }
    }

    return max[0];
}

const formatResult = (dataToFormat) => {
    switch (dataToFormat) {
        case "BOTTOM":
            return "Bot";
        case "TOP":
            return "Top";
        case "UTILITY":
            return "Support";
        case "JUNGLE":
            return "Jungle";
        case "MIDDLE":
            return "Mid";
        case "UNRANKED":
            return dataToFormat;
        default:
            return "Rank Cannot Be Compiled";
    }
}

export class RankedStatsBox extends React.Component {

    render() {
        return (
            <article className="rankedstatsbox">
                <section className="emblem-container">
                    <img alt="Tier emblem" src={this.props.tier !== undefined ? `/images/ranked-emblems/Emblem_${this.props.tier}.png` : "/images/Loading.gif"}></img>
                </section>
                <section className="info-container">
                    <h3>{this.props.queueType.replaceAll("_", " ")}</h3>
                    <h4>{this.props.tier} {this.props.rank} </h4>
                    <p>{this.props.leaguePoints} LP</p>
                    <p>{this.props.wins} W {this.props.losses} L</p>
                    <p>Win rate: {parseInt(this.props.wins * 100 / (this.props.wins + this.props.losses))}%</p>
                </section>
                <section className="info-container">
                    <h3>Most played lane</h3>
                    {
                        this.props.statsRetrieved ?
                            <img alt="Team role" width="50" src={this.props.tier !== "Unranked" ? `/images/ranked-positions/Position_${this.props.tier}-${formatResult(getOcurrencies(this.props.stats[3].teamPosition))}.png` :
                                `/images/ranked-positions/Position_Unranked-UNRANKED.png`}></img> :
                            <img alt="Loading Team role" width="25" src="/images/ranked-positions/Loading-position.gif"></img>
                    }
                </section>
                <section className="info-container">
                    <h3>Most played champion</h3>
                    {
                        this.props.statsRetrieved ?
                            <img alt="Most played champ" width="50" src={this.props.tier !== "Unranked" ? `http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${(getOcurrencies(this.props.stats[4].champions))}.png` :
                                `/images/ranked-positions/Position_Unranked-UNRANKED.png`}></img> :
                            <img alt="Loading Team role" width="25" src="/images/ranked-positions/Loading-position.gif"></img>
                    }
                </section>
            </article>
        )
    }
}