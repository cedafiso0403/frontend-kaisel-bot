import React from "react";
import "../styles/components/gamecard.css";
import "../styles/components/mediaquery.css";

export class GameCard extends React.Component {
    render() {
        let classNameForCards = "gamecard-background-"+this.props.gameName.toLowerCase().replaceAll(' ', '-');
        return (
            <div className="gamecard">
                <div className={"gamecard-background " + classNameForCards}></div>

            </div>)
    }
}

