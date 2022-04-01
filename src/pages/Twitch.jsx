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

export default NotFound;