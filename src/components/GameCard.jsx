import React from "react";
import NumberFormat from 'react-number-format';
import "../styles/components/gamecard.css"

export class GameCard extends React.Component {
    render() {
        return (
            <div className="gamecard">
                <div className="gamecard-container">
                    <h2>{this.props.gameName}</h2>
                </div>
                <div className="gamecard-container">
                    <h4>Active Players</h4>
                    <NumberFormat
                        value={this.props.activePlayers}
                        className="active-players"
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={''}
                    />
                </div>
                <div className="gamecard-container">
                    <h4>Top Streamers</h4>
                    <ul>{
                        this.props.topStreamer.map((streamer, i) => {
                            return (<li key={streamer + i}>{streamer}</li>)
                        })
                    }</ul>
                </div>
            </div>)
    }
}

