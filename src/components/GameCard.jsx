import React from "react";
import "../styles/components/gamecard.css";
import "../styles/components/mediaquery.css";

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
                    </div>
                    <div className="gamecard-container">
                        <h4>Features</h4>
                        <ul>{
                            this.props.features.map((streamer, i) => {
                                return (<li key={streamer + i}>{streamer}</li>)
                            })
                        }</ul>
                    </div>
                </div>
            </div>)
    }
}

