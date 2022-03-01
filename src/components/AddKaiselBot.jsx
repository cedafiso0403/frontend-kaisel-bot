import { Link } from "react-router-dom";

/** Used for the home page. Explicitly tells the user they can press the "add" button to do something.
 *  Only used because I need a section with the same colour as the background colour
 */
export default function AddKaiselBot() {
    return (
        <div class="form-box">
            <h2 className="content-h2">Add Kaisel Bot to your server</h2>
            <p className="features-subtitle">With a quick click of a button, invite Kaisel Bot to your Discord server!</p>
            <Link to="/Contact" className="big-add-server-button">Add to Server</Link>
        </div>
    );
}