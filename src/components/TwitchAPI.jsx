/*
This is just a testing page so I can learn how to use the API 
*/

import React from "react";
// import axios from 'axios';
import api from './api/api'

/*
 id: "21779"
name: "League of Legends"

id: "516575"
name: "VALORANT"

"id": "513143"
"name": "Teamfight Tactics"
 */

export default class TwitchAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            streamers: []
        };
    }

    componentDidMount() {
        const fetchData = async () => {
            // const result = await api.get('https://api.twitch.tv/helix/games/top');
            // console.log(result.data);
            const streams = await api.get('https://api.twitch.tv/helix/streams?first=5&game_id=21779');
            this.setState(state => {
                return {streamers: streams.data.data}
            });
            console.log(this.state.streamers);
        };
        fetchData();
    }

    render() {
        return (
            <div>
                <p className="features-subtitle">Current Top League of Legends Streamers:</p>
                {this.state.streamers.map((stream, index) => {
                    return <p key={index}>{stream.user_name}</p>
                })}
            </div>
        );
    }
}
