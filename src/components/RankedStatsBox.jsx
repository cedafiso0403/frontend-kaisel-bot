import React from "react";
import "../styles/components/rankedStatsBox.css";
import axios from 'axios';

//string[0].toUpperCase() + string.substring(1)
let queueIds;
axios.get('https://static.developer.riotgames.com/docs/lol/queues.json').then((response) =>{
    queueIds = response.data;
})

export class RankedStatsBox extends React.Component {
    render() {
        return (
            <div className="rankedstatsbox">
                <div className="emblem-container">
                    <img  alt="Tier emblem" src={this.props.tier !== undefined ? `/images/ranked-emblems/Emblem_${this.props.tier}.png`: "/images/Loading.gif"}></img>
                </div>
                <div className="info-container">
                    <h3>{this.props.queueType.replaceAll("_", " ")}</h3>
                    <h4>{this.props.tier} {this.props.rank} </h4>
                    <p>{this.props.leaguePoints} LP</p>
                    <p>{this.props.wins} W {this.props.losses} L</p>
                    <p>Win rate: {parseInt(this.props.wins * 100 / (this.props.wins + this.props.losses))}%</p>
                </div>
            </div>
        )
    }
}