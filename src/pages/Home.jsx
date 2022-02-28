import Header from "../components/Header";
import Footer from '../components/Footer';
import SearchBar from "../components/SearchBar";
import Features from "../components/Features";
import Information from "../components/Information";
import Twitch from "../components/Twitch";
import { GameCard } from "../components/GameCard";

const propsForGameCardLeague = {
  gameName: "League of Legends",
  activePlayers: 1234567,
  topStreamer: ["First streamer", "Second Streamer", "Third Streamer"]
}

const propsForGameCardTFT = {
  gameName: "Teamfight Tactics",
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
      <main className="content-page">
    
        <section>
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
            All-in-one Discord gaming bot
          </p>

          <p className="features-subtitle">
            Integrated with the Riot games and Twitch API,
            Kaisel<br></br> supports statistics for <a href="https://www.leagueoflegends.com/" target="_blank" rel="noreferrer" >
            League of Legends</a>, <a href="https://teamfighttactics.leagueoflegends.com/en-us/" target="_blank" rel="noreferrer">
            TFT</a> and <a href="https://playvalorant.com/en-us/" target="_blank" rel="noreferrer">VALORANT</a>.
            <br></br>
            Access statistics for supported games, Twitch alerts, server moderation, and more!
          </p>  
        </section>
        
        <section className="gamecards-container">
          <GameCard {...propsForGameCardLeague} />
          <GameCard {...propsForGameCardTFT} />
          <GameCard {...propsForGameCardValorant} />
        </section>

        <section>
          <h2 className="content-h2">Easily search up a player&apos;s stats</h2>
          <Information />
        </section>

        <section>
          <h2 className="content-h2">Search for a username</h2>
          <p className="features-subtitle">
            Test out how Kaisel can display your in game statistics.
            <br></br>
            View your KDA, winrate and other statistics for the current season.
          </p>
          <SearchBar />  
        </section>
        
        <section>
          <Twitch />
        </section>

        <section>
          <h2 className="content-h2">See the progress in your games</h2>
          <Features />  
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
