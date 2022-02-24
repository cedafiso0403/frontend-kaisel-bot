import Header from "../components/Header";
import Footer from '../components/Footer';
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
      <Header></Header>
      <div className="content-page">
        <h1>Kaisel: All-in-one gaming bot</h1>
        <h2>Connecting Twitch to Popular Games</h2>
        <hr></hr>
        <div className="gamecards">
          <GameCard {...propsForGameCardLeague} />
          <GameCard {...propsForGameCardValorant} />
        </div>
        <div className="form-box">
          <form>
            <div className="form-container">
              <input type="text" placeholder="Search.." />
              <select name="region" id="region">
                <option value="NA">NA</option>
                <option value="LAN">LAN</option>
                <option value="LAS">LAS</option>
                <option value="EUN">EUN</option>
                <option value="EUW">EUW</option>
                <option value="OC">OC</option>
                <option value="TR">TR</option>
                <option value="RU">RU</option>
                <option value="JP">JP</option>
                <option value="KR">KR</option>
              </select>
            </div>
            <div  className="form-container2">
              <select name="game" id="game">
                <option value="league">League of Legends</option>
                <option value="valorant">Valorant</option>
              </select>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
