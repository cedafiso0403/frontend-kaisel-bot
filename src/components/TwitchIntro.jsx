import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/twitch.css";
import "../styles/components/mediaquery.css";


export default class TwitchIntro extends React.Component {
    render() {
        return (
            <section className="twitch-content">
                <h2 className="content-h2">Watch your favorite streamers live</h2>
                <p className="features-subtitle">
                    View the top streamers in the world and their viewer count for the supported games.
                    <br></br>
                    Explore other popular categories on Twitch!
                </p>
                <img alt="streamers" className="imgStyle" src="images/streamers.png" height="300px" width="500px" />
                <div className="form-box">
                    <Link to="/Twitch" className="big-add-server-button intro-page">See Features</Link>
                </div>
            </section>
        );
    }
}