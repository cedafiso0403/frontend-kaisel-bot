import { render, screen } from "@testing-library/react";
import { RankedStatsBox } from "../../components/RankedStatsBox";
import '@testing-library/jest-dom';

const getOcurrencies = (dataArray) => {
    let summaryData = [];
    dataArray.forEach(elem => {
        let founded = false;
        summaryData.forEach(sumElem => {
            if (sumElem.championName === elem.championName && sumElem.teamPosition === elem.teamPosition) {
                founded = true;
                sumElem.assists += elem.assists;
                sumElem.deaths += elem.deaths;
                sumElem.kills += elem.kills;
                sumElem.totalMinionsKilled += elem.totalMinionsKilled;
                sumElem.matchLength += elem.matchLength;
                sumElem.matchPlayed = sumElem.matchPlayed + 1;
            }
        })
        if (!founded) {
            summaryData.push({ ...elem, matchPlayed: 1 });
        }
    })
    for (let i = 0; i < summaryData.length; i++) {
        for (let j = 0; j < summaryData.length - i - 1; j++) {
            if (summaryData[j].matchPlayed > summaryData[j + 1].matchPlayed) {
                let temp = summaryData[j];
                summaryData[j] = summaryData[j + 1];
                summaryData[j + 1] = temp;
            }
        }
    }
    return summaryData;

}

const props = {
    queueType: "Ranked Flex",
    tier: "Gold",
    leaguePoints: 12,
    wins: 5,
    losses: 5,
    rank: "III",
    statsRetrieved: true,
    stats: [
        {
            championName: "Senna",
            teamPosition: "BOTTOM",
            kills: 10,
            deaths: 4,
            assists: 2,
            totalMinionsKilled: 2,
            matchLength: 200,
        },
        {
            championName: "Fizz",
            teamPosition: "BOTTOM",
            kills: 10,
            deaths: 4,
            assists: 2,
            totalMinionsKilled: 2,
            matchLength: 200,
        }
    ]
}


describe("Testing RIOT API Feature #2", () => {
    test('Renders without crashing', () => {
        render(<RankedStatsBox {...props} />);
        let img = screen.getByAltText("Tier emblem");
        expect(img).toBeInTheDocument();
    });

    test('Renders queue type', () => {
        render(<RankedStatsBox {...props} />);
        let queueHeading = screen.getByText(props.queueType.replaceAll("_", " ")).closest('h3')
        expect(queueHeading).toBeInTheDocument();
    });

    test('Renders tier and rank', () => {
        render(<RankedStatsBox {...props} />);
        let tierAndRankHeading = screen.getByText(props.tier + " " + props.rank).closest('h4')
        expect(tierAndRankHeading).toBeInTheDocument();
    });

    test('Renders league points', () => {
        render(<RankedStatsBox {...props} />);
        let leaguePoints = screen.getByText(props.leaguePoints + " LP").closest('p')
        expect(leaguePoints).toBeInTheDocument();
    });

    test('Renders wins and losses', () => {
        render(<RankedStatsBox {...props} />);
        let winAndLosses = screen.getByText(props.wins + " W " + props.losses + " L").closest('p')
        expect(winAndLosses).toBeInTheDocument();
    });

    test('Renders Win rate', () => {
        render(<RankedStatsBox {...props} />);
        let winRatio = parseInt((props.wins * 100) / (props.wins + props.losses));
        let winAndLosses = screen.getByText("Win rate: " + winRatio + "%").closest('p')
        expect(winAndLosses).toBeInTheDocument();
    });

    test('Renders Most played lane heading', () => {
        render(<RankedStatsBox {...props} />);
        let mostPlayedLaneHeading = screen.getByText("Most played lane").closest('h3')
        expect(mostPlayedLaneHeading).toBeInTheDocument();
    });

    test('Renders Most played champion heading', () => {
        render(<RankedStatsBox {...props} />);
        let mostPlayedChampHeading = screen.getByText("Most played champion").closest('h3')
        expect(mostPlayedChampHeading).toBeInTheDocument();
    });

    test('Renders Most played lane images', () => {
        render(<RankedStatsBox {...props} />);
        let imgMostPlayedLane = screen.getAllByAltText("Team role");
        imgMostPlayedLane.forEach(element => {
            expect(element).toBeInTheDocument();
        });
    });

    test('Renders Most played champ images', () => {
        render(<RankedStatsBox {...props} />);
        let imgMostPlayedChamp = screen.getAllByAltText("Most played champ");
        imgMostPlayedChamp.forEach(element => {
            expect(element).toBeInTheDocument();
        });
    });

    test('Renders button for display stats for champ', () => {
        render(<RankedStatsBox {...props} />);
        let imgMostPlayedChamp = screen.getByText("Show 5 most played");
        expect(imgMostPlayedChamp).toBeInTheDocument();
    })

})