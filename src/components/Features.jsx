import React from "react";
import { Link } from "react-router-dom";
import './../styles/components/features.css';

export default class Features extends React.Component {
    render() {
        return (
            <article>
                <section className="features-container">
                    <div className="features-img">
                        <img alt="ranks" height="175px" width="175px" src="images/challengerRank.png" />
                        <img alt="ranks" height="175px" width="175px" src="images/radiant.png" />
                    </div>

                    <div>
                        <p className="features-subtitle">Kaisel Bot supports the following:</p>
                        <ul className="features-ul">
                            <li className="features-li">Displays statistics for games</li>
                            <li className="features-li">Displays top Twitch streamers</li>
                            <li className="features-li">Notifies users of new streams</li>
                            <li className="features-li">Moderates server</li>
                        </ul>
                    </div>
                </section>

                <section className="navbar-item-button">
                    <Link to="/Commands" className="navbar-item navbar-item-button">See Commands</Link>
                </section>
            </article>
        );
    }
}