import Features from "../../components/Features";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';


test('Render without crashing', ()=>{
    render(<Features />)
})

test('Render image for intro twitch', ()=>{
    render(<Features />)
    const imgRanks = screen.getAllByAltText(/ranks/i);
    imgRanks.forEach(element => {
       return expect(element).toBeInTheDocument();
    });
})

test('Render heading for element', ()=>{
    render(<Features />)
    const description = screen.getByText(/Supported Features/i).closest('p');
    expect(description).toBeInTheDocument();
})

test('Render image for intro twitch', ()=>{
    render(<Features />)
    const listedFeature = screen.getAllByRole("listitem");
    listedFeature.forEach(element => {
       return expect(element).toBeInTheDocument();
    });
})

