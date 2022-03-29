import React from 'react';
import axios from 'axios';
import { UserStatsBox } from './UserStatsBox';
import "../styles/components/valorant.css";

var validRegions = ['AP', 'BR', 'EU', 'KR', 'LATAM', 'NA'];

export default class ValorantAPI extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			usernames: [],
			correctRegionChosen: true,
		}
	}

	componentDidMount() {
		const riotKeys = UserStatsBox.returnApiKey();
		const region = this.props.region;
		let playerMax = parseInt(this.props.user);
		
		if(isNaN(playerMax) || playerMax==="")
			playerMax=10;
		
		this.setState({ correctRegionChosen: false });
		for(let i = 0; i < validRegions.length; i++) {
			if(region.toUpperCase() === validRegions[i]) {
				this.setState({ correctRegionChosen: true });
				i = validRegions.length;
			}
		}

		axios.get(`https://${region}.api.riotgames.com/val/ranked/v1/leaderboards/by-act/d929bc38-4ab6-7da4-94f0-ee84f8ac141e?size=${playerMax}&startIndex=0&api_key=${riotKeys}`)
			.then(res => {
			const usernames = res.data;
			this.setState({ usernames: usernames });
		})
	}

	getPlayers() {
		if(Array.isArray(this.state.usernames)) { //check if the array is empty first
			return [];
		}
		let listPlayers = this.state.usernames.players; //gets the list of players
		let players = [];
		for(let i = 0; i < listPlayers.length; i++) { //puts the list of players into a players array
			players.push(listPlayers[i]);
		}
		return players;
	}

	displayError(error) {
		if(!error) {
			return <h2>Something went wrong with your query. Please select a valid region.</h2>;
		}
		return "";
	}

	render() {
		return (
			<section>
				{this.displayError(this.state.correctRegionChosen)}
				{this.getPlayers().map(item => {
					return (
						<article className='valorantUser' key={item.leaderboardRank}>
							<h3>{item.leaderboardRank}: {item.gameName ? item.gameName : "Unknown User Found"}</h3>
							<p>Tagline: {item.tagLine ? item.tagLine : "Tag line could not be found"}</p>
							<p>Ranked Rating: {item.rankedRating}</p>
							<p>Number of Wins: {item.numberOfWins}</p>
						</article>
					)
				})}
			</section>
		)
	}
}