import Header from "../components/Header";
import Footer from '../components/Footer';
import SearchBar from "../components/SearchBar";
import { UserStatsBox } from "../components/UserStatsBox";
import {useLocation} from "react-router-dom";
import ValorantAPI from "../components/ValorantAPI";

// let testStats = {
//     username : "Mighty",
//     gamesPlayed: 9856,
//     winRate: 34,
//     rank: "Iron",
//     kdr: 0.34,
//     imageSource: "/images/TestImages.jpg"
// }

function Stats() {
    const search = useLocation().search;
    let data = {
        user: new URLSearchParams(search).get('user'),
        region: new URLSearchParams(search).get('region'),
        game: new URLSearchParams(search).get('game')
    };

    function chosenGame() { //checks and returns which game should be displayed
        let game = data.game;
        if(game === 'valorant')
            return <ValorantAPI {...data}/>
        else
            return <UserStatsBox {...data}/>
    }

    return (
        <div>
            <Header />
            <main>
                <h2 className="content-h2">Search for a username</h2>
                <p className="features-subtitle">
                    Search a username for League of Legends or Valorant. <br></br>
                    Only current season statistics are shown.
                </p>
                <SearchBar />
                {chosenGame()}
            </main>
            <Footer />
        </div>
    );
}

export default Stats;