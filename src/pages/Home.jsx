import Header from "../components/Header";
import Footer from '../components/Footer';
import { GameCard } from "../components/GameCard";

function Home() {
  return (
    <div>
      <Header></Header>
      <div>
        <h1>Kaisel: All-in-one gaming bot</h1>
        <hr></hr>
        <div>
          <h2>Connecting Twitch to Popular Games</h2>
          <GameCard dataFromParent={"League of Legends"} />
          <GameCard dataFromParent={"Valorant"} />
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Home;
