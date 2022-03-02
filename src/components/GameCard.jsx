import React from "react";
import NumberFormat from 'react-number-format';
import "../styles/components/gamecard.css";
import "../styles/components/mediaquery.css";

/*
 id: "21779"
name: "League of Legends"

id: "516575"
name: "VALORANT"

"id": "513143"
"name": "Teamfight Tactics"
 */

export class GameCard extends React.Component {
    render() {
        let classNameForCards = "gamecard-background-"+this.props.gameName.toLowerCase().replaceAll(' ', '-');
        return (
            <div className="gamecard">
                <div className={"gamecard-background " + classNameForCards}></div>
                <div className="gamecard-information">
                    <div className="gamecard-container">
                        <h2>Learn more</h2>
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
                </div>
            </div>)
    }
}

