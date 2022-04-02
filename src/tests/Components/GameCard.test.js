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

test('Render learn more heading', ()=>{
    render(<GameCard {...propsForGameCardLeague}/>)
    const learnTitle = screen.getByText("Learn more").closest('h2');
    expect(learnTitle).toBeInTheDocument();
})

test('Render active player heading', ()=>{
    render(<GameCard {...propsForGameCardLeague}/>)
    const activePlayerTitle = screen.getByText("Active Players").closest('h4');
    expect(activePlayerTitle).toBeInTheDocument();
})

test('Render features heading', ()=>{
    render(<GameCard {...propsForGameCardLeague}/>)
    const featuresTitle = screen.getByText("Features").closest('h4');
    expect(featuresTitle).toBeInTheDocument();
})

test('Render feature list heading', ()=>{
    render(<GameCard {...propsForGameCardLeague}/>)
    const featuresTitle = screen.getAllByRole("listitem");
    featuresTitle.forEach(element => {
        expect(element).toBeInTheDocument();
    });
})