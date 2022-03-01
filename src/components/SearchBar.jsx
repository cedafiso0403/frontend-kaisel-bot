import "../styles/components/searchbar.css"

export default function SearchBar() {
    return (
        <div className="form-box">
            <form className="searchBar" action="/TestStats" method="GET">
                <div className="form-container">
                    <input type="text" placeholder="[Input a username here]" id="user" name="user"/>
                    
                    <button className="searchBarButton"><img src="images/search-icon.png" alt="search button" width="30" height="30"></img></button>
                </div>
                <div className="form-container2">
                    <select name="game" id="game">
                        <option value="league">League of Legends</option>
                        <option value="tft">Teamfight Tactics</option>
                        <option value="valorant">Valorant</option>
                    </select>
                    <select name="region" id="region">
                        <option value="na1">NA</option>
                        <option value="jp1">JP</option>
                        <option value="kr">KR</option>
                        <option value="eun1">EUN</option>
                        <option value="euw1">EUW</option>
                        <option value="la1">LAN</option>
                        <option value="la2">LAS</option>
                        <option value="oc1">OC</option>
                        <option value="ru">RU</option>
                        <option value="tr1">TR</option>
                    </select>
                </div>
            </form>
        </div>
    )
}