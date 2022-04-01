import React from "react";
import "../styles/components/rankedStatsBox.css";
import "../styles/components/mediaquery.css";

const getOcurrencies = (dataArray) => {
    let summaryData = [];
    dataArray.forEach(elem => {
        let founded = false;
        summaryData.forEach(sumElem => {
            if (sumElem.championName === elem.championName && sumElem.teamPosition === elem.teamPosition) {
                founded = true;
                sumElem.assists += elem.assists;
                sumElem.deaths += elem.deaths;
                sumElem.kills += elem.kills;
                sumElem.totalMinionsKilled += elem.totalMinionsKilled;
                sumElem.matchLength += elem.matchLength;
                sumElem.matchPlayed = sumElem.matchPlayed + 1;
            }
        })
        if (!founded) {
            summaryData.push({ ...elem, matchPlayed: 1 });
        }
    })
    for (let i = 0; i < summaryData.length; i++) {
        for (let j = 0; j < summaryData.length - i - 1; j++) {
            if (summaryData[j].matchPlayed > summaryData[j + 1].matchPlayed) {
                let temp = summaryData[j];
                summaryData[j] = summaryData[j + 1];
                summaryData[j + 1] = temp;
            }
        }
    }
    return summaryData;

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
    constructor(props) {
        super(props);
        this.state = {
            statsRetrieved: this.props.statsRetrieved
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.statsRetrieved !== this.props.statsRetrieved){
            this.setStatsRetrieved(this.props.statsRetrieved);
        }
        if (prevState.statsRetrieved !== this.state.statsRetrieved && this.props.statsRetrieved) {
            this.props.setOrdererData(getOcurrencies(this.props.stats));
        }
    }

    setStatsRetrieved(data) {
        this.setState((prevState) => {
            return {
                statsRetrieved: data
            }
        })
    }

    render() {
        let allData;
        if (this.props.statsRetrieved) {
            allData = getOcurrencies(this.props.stats);
        }
        return (
            <>
                <article className="rankedstatsbox">
                    <section className="emblem-container">
                        <img alt="Tier emblem" src={this.props.tier !== undefined ? `images/ranked-emblems/Emblem_${this.props.tier}.png` : "images/Loading.gif"}></img>
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
                                <img alt="Team role" width="50" src={this.props.tier !== "Unranked" ? `images/ranked-positions/Position_${this.props.tier}-${formatResult(allData[allData.length - 1].teamPosition)}.png` :
                                    `images/ranked-positions/Position_Unranked-UNRANKED.png`}></img> :
                                <img alt="Loading Team role" width="25" src="images/ranked-positions/Loading-position.gif"></img>
                        }
                        {
                            this.props.statsRetrieved ?
                                <img alt="Team role" width="50" src={this.props.tier !== "Unranked" ? `images/ranked-positions/Position_${this.props.tier}-${formatResult(allData[allData.length - 2].teamPosition)}.png` :
                                    `images/ranked-positions/Position_Unranked-UNRANKED.png`}></img> :
                                <img alt="Loading Team role" width="25" src="images/ranked-positions/Loading-position.gif"></img>
                        }
                    </section>
                    <section className="info-container">
                        <h3>Most played champion</h3>
                        {
                            this.props.statsRetrieved ?
                                <img alt="Most played champ" width="50" src={this.props.tier !== "Unranked" ? `http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${allData[allData.length - 1].championName}.png` :
                                    `images/ranked-positions/Position_Unranked-UNRANKED.png`}></img> :
                                <img alt="Loading Team role" width="25" src="images/ranked-positions/Loading-position.gif"></img>
                        }
                        {
                            this.props.statsRetrieved ?
                                <img alt="Most played champ" width="50" src={this.props.tier !== "Unranked" ? `http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${allData[allData.length - 2].championName}.png` :
                                    `images/ranked-positions/Position_Unranked-UNRANKED.png`}></img> :
                                <img alt="Loading Team role" width="25" src="images/ranked-positions/Loading-position.gif"></img>
                        }
                    </section>
                </article>
                <button className="TopPlayedButton" onClick={e => this.props.setDisplayChamps()}>Show 5 most played</button>
            </>
        )
    }
}
