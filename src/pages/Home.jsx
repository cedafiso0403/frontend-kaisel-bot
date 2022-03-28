import Header from "../components/Header";
import Footer from '../components/Footer';
import SearchBar from "../components/SearchBar";
import Features from "../components/Features";
import Twitch from "../components/Twitch";
import TwitchAPI from "../components/TwitchAPI";

import { GameCard } from "../components/GameCard";


// import api from '../components/api/api'
// const fetchData = async () => {
//   const streams = await api.get('https://api.twitch.tv/helix/streams?first=3&game_id=21779');
//   const topStreamers = streams.data.data.map(stream => `${stream.user_name}`);         
//   return topStreamers;
// };

// Event listener used for the sections fade in
document.addEventListener("scroll", () => {
  let mainSections = document.querySelectorAll("main>section");
  let sectionPositions;
  const screenSize = window.innerHeight;
  for (let i = 0; i < mainSections.length; i++) {
    sectionPositions=mainSections[i].getBoundingClientRect().top;
    if(sectionPositions < screenSize && !mainSections[i].classList.contains("visible") ){
      mainSections[i].classList.add("visible");
    }    
  }
});

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
      <main>
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
            Kaisel <br></br>supports statistics for <a href="https://www.leagueoflegends.com/" target="_blank" rel="noreferrer" >
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
          <h2 className="content-h2">Search for a username</h2>
          <p className="features-subtitle">
            Test out how Kaisel can display your in game statistics.
            <br></br>
            View your KDA, winrate and other statistics for the current season.
          </p>
          <SearchBar />  
        </section>

        <section>
          <h2 className="content-h2">See the progress in your games</h2>
          <Features />
        </section>
          
        <section>
          <Twitch />
        </section>
        
        <section>
          <h1>Twitch API</h1>
          <div className="twitch-form">
            <form>
              <label>Search for streamers by game</label>
              <select onChange="" >
                <option>League of Legends</option>
                <option>VALORANT</option>
                <option>TFT</option>
              </select>
              <label>Search for a channel</label>
              <input type="text" placeholder="Search for a channel" name="channel" />
              <label>View top games</label>
              <input type="number" placeholder="5" name=""/>
            </form>
          </div>
          <TwitchAPI />
        </section>
            
      </main>
      <Footer />
    </div>
  );
}

export default Home;