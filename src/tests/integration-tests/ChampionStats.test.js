import { render, screen } from "@testing-library/react";
import ChampionStats from "../../components/ChampionStats";
import '@testing-library/jest-dom';

const props = {
    tier: "Gold",
    championName: "Senna",
    teamPosition: "BOTTOM",
    kills: 10,
    deaths: 4,
    assists: 2,
    matchPlayed: 2,
    totalMinionsKilled: 200,
    matchLength: 60

}

const formatResult = (dataToFormat) => {
    switch (dataToFormat) {
        case "BOTTOM":
            return "Bot";
        case "TOP":
            return "Top";
        case "UTILITY":
            return "Support";
        case "JUNGLE":
            return "Jungle";
        case "MIDDLE":
            return "Mid";
        case "UNRANKED":
            return dataToFormat;
        default:
            return "Rank Cannot Be Compiled";
    }
}

describe("Testing RIOT API Feature #1", () => {
    test('Renders without crashing', () => {
        render(<ChampionStats {...props} />);
    });

    test('Renders image for most played champ', () => {
        render(<ChampionStats {...props} />);
        const imgChamp = screen.getByAltText("Most played champ").closest('img');
        expect(imgChamp).toBeInTheDocument();
    });

    test('Renders name for most played champ', () => {
        render(<ChampionStats {...props} />);
        const nameChamp = screen.getByText(props.championName).closest('p');
        expect(nameChamp).toBeInTheDocument();
    });

    test('Renders team position for most played champ', () => {
        render(<ChampionStats {...props} />);
        const teamPositionChamp = screen.getByText(formatResult(props.teamPosition)).closest('p');
        expect(teamPositionChamp).toBeInTheDocument();
    });

    test('Renders kills average for most played champ', () => {
        render(<ChampionStats {...props} />);
        const killAverageChamp = screen.getByText((props.kills / props.matchPlayed).toFixed(1)).closest('p');
        expect(killAverageChamp).toBeInTheDocument();
    });

    test('Renders death average for most played champ', () => {
        render(<ChampionStats {...props} />);
        const deathAverageChamp = screen.getByText((props.deaths / props.matchPlayed).toFixed(1)).closest('p');
        expect(deathAverageChamp).toBeInTheDocument();
    });

    test('Renders assist average for most played champ', () => {
        render(<ChampionStats {...props} />);
        const assistAverageChamp = screen.getByText((props.assists / props.matchPlayed).toFixed(1)).closest('p');
        expect(assistAverageChamp).toBeInTheDocument();
    });

    test('Renders CS average for most played champ', () => {
        render(<ChampionStats {...props} />);
        const csAverageChamp = screen.getByText((props.totalMinionsKilled / props.matchLength).toFixed(1)).closest('p');
        expect(csAverageChamp).toBeInTheDocument();
    });
})

