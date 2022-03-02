import Header from '../components/Header';
import Footer from '../components/Footer';

function NotFound() {
    return (
        <div>
            <Header />
            <main>
                <article className="container-notFound">
                    <section>
                        <h1 className="notFound-h1">404</h1>
                        <h2 className="notFound-h2">Sorry the page you are trying to <br></br>access does not exist.</h2>
                        <h2 className="features-subtitle">Return to the <a href="/">home page</a>.</h2>
                    </section>
                    <div className="beruSad"></div>
                </article>
            </main>
            <Footer />
        </div>
    );
}

//<img className="features-img" alt="beru sad" hieght="400px" width="400px" src="/images/beruSad.png"></img>
export default NotFound;