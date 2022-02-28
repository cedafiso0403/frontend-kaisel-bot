import React from 'react';


export default class Twitch extends React.Component {
    render() {
        return (
            <div className="centre">
                <h2 className="content-h2">Get notified for your favorite streamers</h2>
                <p className="features-subtitle">
                    Kaisel can display the top streamers and active players for the supported games.
                    <br></br>
                    You can setup alerts to your server to any streamer including yourself!
                </p>
                <p>
                    <img alt="streamers" className="imgStyle" src="images/streamers.png" height="300px" width="500px" />
                </p>
            </div>
        );
    }
}