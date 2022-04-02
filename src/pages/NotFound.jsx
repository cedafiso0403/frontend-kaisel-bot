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
                        <h2 className="features-subtitle">Return to the <Link to="/" className="intro-page" >home page</Link>.</h2>
                    </section>
                    <div className="beruSad"></div>
                </article>
            </main>
            <Footer />
        </div>
    );
}

export default NotFound;