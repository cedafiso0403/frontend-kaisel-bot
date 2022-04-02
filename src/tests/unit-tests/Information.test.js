import Information from "../../components/Information";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';


test('Render without crashing', ()=>{
    render(<Information />)
})

test('Render first line', ()=>{
    render(<Information />)
    const line1 = screen.getByText("Kaisel lets you search up any username from").closest('p');
    expect(line1).toBeInTheDocument();
})

test('Render second line', ()=>{
    render(<Information />)
    const line2 = screen.getByText("league of legend or valorant that shows your").closest('p');
    expect(line2).toBeInTheDocument();
})

test('Render third line', ()=>{
    render(<Information />)
    const line3 = screen.getByText("stats like rank, kda, win rate, and games played.").closest('p');
    expect(line3).toBeInTheDocument();
})

