import Header from "../components/Header";
import Footer from '../components/Footer';
import SearchBar from "../components/SearchBar";
import Features from "../components/Features";
import TwitchIntro from "../components/TwitchIntro";

import { GameCard } from "../components/GameCard";

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
  features: ['View current rank', 'View current winrate', 'View current Season KDA', 'Most played role', 'Most played champion']
}

const propsForGameCardTFT = {
  gameName: "Teamfight Tactics",
  features: ['View current rank', 'View current winrate', 'View current Season KDA', 'Most played role', 'Most played champion']
}

const propsForGameCardValorant = {
  gameName: "Valorant",
  features: ['View current rank', 'View current winrate', 'View current Season KDA', 'Most played role', 'Most played champion']
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
            All-in-one Riot Games statistics page
          </p>
          <p className="features-subtitle">
            Integrated with the Riot games and Twitch API,
            Kaisel <br></br>supports statistics for <a className="intro-page" href="https://www.leagueoflegends.com/" target="_blank" rel="noreferrer" >
            League of Legends</a>, <a className="intro-page" href="https://teamfighttactics.leagueoflegends.com/en-us/" target="_blank" rel="noreferrer">
            TFT</a> and <a className="intro-page" href="https://playvalorant.com/en-us/" target="_blank" rel="noreferrer">VALORANT</a>.
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
          <TwitchIntro />
        </section>
           
      </main>
      <Footer />
    </div>
  );
}

export default Home;