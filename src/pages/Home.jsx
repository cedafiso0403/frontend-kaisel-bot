import Header from "../components/Header";
import Footer from '../components/Footer';
import SearchBar from "../components/SearchBar";
import { GameCard } from "../components/GameCard";

const propsForGameCardLeague = {
  gameName: "League of Legends",
  activePlayers: 1234567,
  topStreamer: ["First streamer", "Second Streamer", "Third Streamer"]
}
const propsForGameCardValorant = {
  gameName: "Valorant",
  activePlayers: 1234567,
  topStreamer: ["First streamer", "Second Streamer", "Third Streamer"]
}

function Home() {
  return (
    <div>
      <Header />
      <div className="content-page-background">
      </div>
      <div className="content-page">
        <h1>Kaisel: All-in-one gaming bot</h1>
        <hr></hr>
        <div className="gamecards">
          <GameCard {...propsForGameCardLeague} />
          <GameCard {...propsForGameCardValorant} />
        </div>
        <SearchBar />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
