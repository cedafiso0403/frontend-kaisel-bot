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
        <h1 className="content-h1">PROJECT KAISEL</h1>
        <p>
          All-in-one discord gaming bot that displays stastics for a given username.
        </p>
        <p>
          Kaisel will display the user's winrate, kill/death ratio and even their rank.
        </p>
        <hr></hr>
        <h2>Games Supported</h2>
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
