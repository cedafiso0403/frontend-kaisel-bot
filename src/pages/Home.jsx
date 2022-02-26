import Header from "../components/Header";
import Footer from '../components/Footer';
import SearchBar from "../components/SearchBar";
import Features from "../components/Features";
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
      <div className="home-icon">
        <img 
          alt="Kaisel Circle" 
          src="images/KaiselCircle2.png"
          height="75px"
          width="75px" 
        />
        <h1 className="content-h1">PROJECT KAISEL</h1>
      </div>
        <p className="home-subtitle">
          All-in-one discord gaming bot
        </p>

        <hr></hr>

        <h2 className="content-h2">Games Supported</h2>
        <div className="gamecards">
          <GameCard {...propsForGameCardLeague} />
          <GameCard {...propsForGameCardValorant} />
        </div>

        <hr></hr>

        <h2 className="content-h2">See your progress in your games</h2>
        <Features />

        <hr></hr>

        <h2 className="content-h2">Instantly get statistics</h2>
        <SearchBar />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
