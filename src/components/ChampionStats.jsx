import React from "react";
import './../styles/components/champion.css';
import "../styles/components/mediaquery.css";

export default class ChampionStats extends React.Component {
    render() {
        return (
            <div className="champion-stats">
                <img alt="Most played champ" width="50" src={this.props.tier !== "Unranked" ? `http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${this.props.championName}.png` :
                                    `/images/ranked-positions/Position_Unranked-UNRANKED.png`}></img>
                <p>{this.props.championName}</p>
                <p>{this.props.teamPosition}</p>
                <p>{(this.props.kills/this.props.matchPlayed).toFixed(1)}</p>
                <p>{(this.props.deaths/this.props.matchPlayed).toFixed(1)}</p>
                <p>{(this.props.assists/this.props.matchPlayed).toFixed(1)}</p>
                <p>{(this.props.totalMinionsKilled/this.props.matchLength).toFixed(1)} CS</p>
            </div>
        );
    }
}