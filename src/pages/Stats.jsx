import Header from "../components/Header";
import Footer from '../components/Footer';
import SearchBar from "../components/SearchBar";
import { UserStatsBox } from "../components/UserStatsBox";

let testStats = {
    username : "Mighty",
    gamesPlayed: 9856,
    winRate: 34,
    rank: "Iron",
    kdr: 0.34,
    imageSource: "/images/TestImages.jpg"
}

function Stats() {
    return (
        <div>
            <Header />
            <div className="content-page">
                <SearchBar />
                <UserStatsBox {...testStats}/>
            </div>
            <Footer />
        </div>
    );
}

export default Stats;