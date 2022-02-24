import React from "react";
import "../styles/components/userStatsBox.css"

export class UserStatsBox extends React.Component {
    render() {
        return (
            <div className="user-stats-box">
                <div className="profile-picture-container">
                    <img alt="For in game" src={this.props.imageSource}></img>
                </div>
                <div className="stats-container">
                    <div className="stat-container">
                    <h4>Username: </h4>
                    <p>{this.props.username}</p>
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