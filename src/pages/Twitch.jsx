import Header from '../components/Header';
import Footer from '../components/Footer';
import TwitchSearch from '../components/twitch/TwitchSearch';
import TwitchGames from '../components/twitch/TwitchGames';
import TwitchStreamers from '../components/twitch/TwitchStreamers';

function NotFound() {
    return (
        <div>
            <Header />
            <main>
                <section>
                    <h1 className="content-h2">Twitch Statistics</h1>
                    <TwitchSearch />
                    <TwitchGames />
                    <TwitchStreamers />
                </section>
            </main>
            <Footer />
        </div>
    );
}

//<img className="features-img" alt="beru sad" hieght="400px" width="400px" src="/images/beruSad.png"></img>
export default NotFound;