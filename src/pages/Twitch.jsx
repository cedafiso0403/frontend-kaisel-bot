import Header from '../components/Header';
import Footer from '../components/Footer';
import TwitchGames from '../components/twitch/TwitchGames';
import TwitchStreamers from '../components/twitch/TwitchStreamers';

function NotFound() {
    return (
        <div>
            <Header />
            <main>
                <section>
                    <TwitchGames /> 
                </section>

                <section>
                    <TwitchStreamers />
                </section>
            </main>
            <Footer />
        </div>
    );
}

//<img className="features-img" alt="beru sad" hieght="400px" width="400px" src="/images/beruSad.png"></img>
export default NotFound;