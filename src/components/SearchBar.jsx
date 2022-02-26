import "../styles/components/searchbar.css"

export default function SearchBar() {
    return (
        <div>
            <div className="form-box">
                <form className="searchBar" action="/TestStats" method="GET">
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
                    <div className="form-container2">
                        <select name="game" id="game">
                            <option value="league">League of Legends</option>
                            <option value="valorant">Valorant</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    )
}