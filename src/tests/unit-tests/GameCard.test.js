import GameCard from "../../components/GameCard";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';

const propsForGameCardLeague = {
    gameName: "League of Legends",
    features: ['View current rank', 'View current winrate', 'View current Season KDA', 'Most played role', 'Most played champion']
}

test('Render without crashing', ()=>{
    render(<GameCard {...propsForGameCardLeague}/>)
})

