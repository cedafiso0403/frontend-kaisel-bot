import React from "react";
import './../styles/components/features.css';
import { Link } from "react-router-dom";

export default class Features extends React.Component {
    render() {
        return (
            <article>
                <section className="features-container">
                    <div className="features-img">
                        <img alt="ranks" height="175px" width="175px" src="images/challengerRank.png" />
                        <img alt="ranks" height="175px" width="175px" src="images/radiant.png" />
                        <div className="flex-container">
                            <div>
                                <p className="features-list">League of Legends Features:</p>
                                <ul className="features-ul">
                                    <li className="features-li">Rank, KDA, and Winrate</li>
                                    <li className="features-li">Most played champions</li>
                                    <li className="features-li">Most played roles</li>
                                    <li className="features-li">CS/per minute</li>
                                </ul>
                            </div>
                            <div>
                                <p className="features-list">Valorant Features:</p>
                                <ul className="features-ul">
                                    <li className="features-li">View ranked leaderboard of top players per region</li>
                                    <li className="features-li">View ranked points per player</li>
                                    <li className="features-li">View number of wins per player</li>
                                </ul>
                            </div>
                        </div>
                        <div className="form-box">
                            <Link to="/Statistics" className="big-add-server-button intro-page">View Statistics</Link>
                        </div>
                    </div>
                </section>
            </article>
        );
    }
}