import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/twitch.css";


export default class TwitchIntro extends React.Component {
    render() {
        return (
            <section className="twitch-content">
                <h2 className="content-h2">Get notified for your favorite streamers</h2>
                <p className="features-subtitle">
                    Kaisel can display the top streamers and active players for the supported games.
                    <br></br>
                    You can setup alerts to your server to any streamer including yourself!
                </p>
                <img alt="streamers" className="imgStyle" src="images/streamers.png" height="300px" width="500px" />
                <div className="form-box">
                    <Link to="/Twitch" className="big-add-server-button">See Features</Link>
                </div>
            </section>
        );
    }
}