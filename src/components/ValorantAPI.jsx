import React from 'react';
import axios from 'axios';
import { UserStatsBox } from './UserStatsBox';
import "../styles/components/valorant.css";

var validRegions = ['AP', 'BR', 'EU', 'KR', 'LATAM', 'NA'];
let heightAndWidth = 150;

const controller = new AbortController();

export default class ValorantAPI extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			usernames: [],
			correctRegionChosen: false,
		}
		this._isMounted = false;
	}

	componentDidMount() {
		this._isMounted = true;
		const riotKeys = UserStatsBox.returnApiKey();
		const region = this.props.region;
		let playerMax = parseInt(this.props.user);

		if (isNaN(playerMax) || playerMax === "")
			playerMax = 10;

		this.setState({ correctRegionChosen: false });
		for (let i = 0; i < validRegions.length; i++) {
			if (region.toUpperCase() === validRegions[i]) {
				this.setState({ correctRegionChosen: true });
				i = validRegions.length;
			}
		}

		axios.get(`https://${region}.api.riotgames.com/val/ranked/v1/leaderboards/by-act/d929bc38-4ab6-7da4-94f0-ee84f8ac141e?size=${playerMax}&startIndex=0&api_key=${riotKeys}`,
			{ signal: controller.signal })
			.then(res => {
				const usernames = res.data;
				this.setState({ usernames: usernames });
			}).catch((err)=>{

			})
	}

	componentWillUnmount() {
		this._isMounted = false;
		controller.abort()
	}

	getPlayers() {
		if (Array.isArray(this.state.usernames)) { //check if the array is empty first
			return [];
		}
		let listPlayers = this.state.usernames.players; //gets the list of players
		let players = [];
		for (let i = 0; i < listPlayers.length; i++) { //puts the list of players into a players array
			players.push(listPlayers[i]);
		}
		return players;
	}

	render() {
		return (
			<div>
				{this.state.correctRegionChosen ? <h2>You have chosen the {(this.props.region).toUpperCase()} region.</h2> : <h2>Sorry, your inquiry was not recognized.</h2>}
				<section className='valorantPlayers'>
					{this.getPlayers().map(item => {
						return (
							<article className='valorantUser' key={item.leaderboardRank}>
								<img src="images/radiant.png" width={heightAndWidth} height={heightAndWidth} alt="Competitive rank"></img>
								<div>
									<div className='userTitleAndRank'>
										<h2>{item.leaderboardRank}</h2>
										<h3>{item.gameName ? item.gameName : "Unknown User Found"}</h3>
									</div>
									<p>Tagline: {item.tagLine ? item.tagLine : "Tag line could not be found"}</p>
									<p>Ranked Rating: {item.rankedRating}</p>
									<p>Number of Wins: {item.numberOfWins}</p>
								</div>


							</article>
						)
					})}
				</section>
			</div>

		)
	}
}
