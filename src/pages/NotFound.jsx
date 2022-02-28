import Header from '../components/Header';
import Footer from '../components/Footer';

function NotFound() {
    return (
        <div>
        <Header />
        <div className="content-page">
            <div className="container-notFound">
                <div>
                        <h1 className="notFound-h1">404</h1>
                        <h1 className="notFound-h2">Sorry the page you are trying to <br></br>access does not exist.</h1>
                        <h2 className="features-subtitle">Return to the <a href="/">home page</a>.</h2>
                </div>
                <div className="beruSad">
                </div>
            </div>
        </div>
        <Footer />
        </div>
    );
}

//<img className="features-img" alt="beru sad" hieght="400px" width="400px" src="/images/beruSad.png"></img>
export default NotFound;