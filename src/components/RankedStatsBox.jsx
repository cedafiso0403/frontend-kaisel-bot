import React from "react";
import "../styles/components/rankedStatsBox.css";

//string[0].toUpperCase() + string.substring(1)

export class RankedStatsBox extends React.Component {
    render() {
        return (
            <div >
                <img className="Emblem"alt="Tier emblem" src={`/images/ranked-emblems/Emblem_${this.props.tier}.png`}></img>
                <h3>{this.props.queueType.replaceAll("_", " ")}</h3>
                <h4>{this.props.tier} {this.props.rank} </h4>
                <p>{this.props.leaguePoints} LP</p>
                <p>{this.props.wins} W {this.props.losses} L</p>
                <p>Win rate: {parseInt(this.props.wins*100/(this.props.wins + this.props.losses))}%</p>
            </div>
        )
    }
}