import Features from "../../components/Features";
import { BrowserRouter } from "react-router-dom";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';


test('Render without crashing', ()=>{
    render(<BrowserRouter><Features /></BrowserRouter>)
})

test('Render image for intro twitch', ()=>{
    render(<BrowserRouter><Features /></BrowserRouter>)
    const imgRanks = screen.getAllByAltText(/ranks/i);
    imgRanks.forEach(element => {
       return expect(element).toBeInTheDocument();
    });
})

test('Render heading for league element', ()=>{
    render(<BrowserRouter><Features /></BrowserRouter>)
    const description = screen.getByText(/League of Legends Features/i).closest('p');
    expect(description).toBeInTheDocument();
})

test('Render heading for Valorant element', ()=>{
    render(<BrowserRouter><Features /></BrowserRouter>)
    const description = screen.getByText(/Valorant Features/i).closest('p');
    expect(description).toBeInTheDocument();
})

test('Render image for intro twitch', ()=>{
    render(<BrowserRouter><Features /></BrowserRouter>)
    const listedFeature = screen.getAllByRole("listitem");
    listedFeature.forEach(element => {
       return expect(element).toBeInTheDocument();
    });
})

