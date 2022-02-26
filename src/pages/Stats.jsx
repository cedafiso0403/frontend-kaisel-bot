import Header from "../components/Header";
import Footer from '../components/Footer';
import SearchBar from "../components/SearchBar";
import { UserStatsBox } from "../components/UserStatsBox";
import {useLocation} from "react-router-dom";

let testStats = {
    username : "Mighty",
    gamesPlayed: 9856,
    winRate: 34,
    rank: "Iron",
    kdr: 0.34,
    imageSource: "/images/TestImages.jpg"
}

function Stats() {
    const search = useLocation().search;
    let data = {
        user : new URLSearchParams(search).get('user'),
        region: new URLSearchParams(search).get('region'),
        game: new URLSearchParams(search).get('game')
    };

    return (
        <div>
            <Header />
            <div className="content-page">
                <h2 className="content-h2">Search for a username</h2>
                <SearchBar />
                <UserStatsBox {...data}/>
            </div>
            <Footer />
        </div>
    );
}

export default Stats;