import {render, screen} from "@testing-library/react";
import Header from "../../components/Header";
import {BrowserRouter} from 'react-router-dom';
import '@testing-library/jest-dom';

test('Renders without crashing',()=>{
    render(<BrowserRouter><Header/></BrowserRouter>);
});

test('Renders Header Home link element',()=>{
    render(<BrowserRouter><Header/></BrowserRouter>);
    const linkElement = screen.getByText(/Home/i).closest('a');
    expect(linkElement).toHaveAttribute("href", "/");
});

test('Renders Header Stats link element',()=>{
    render(<BrowserRouter><Header/></BrowserRouter>);
    const linkElement = screen.getByText(/Stats/i).closest('a');
    expect(linkElement).toHaveAttribute("href", "/Stats");
});

test('Renders Header Twitch link element',()=>{
    render(<BrowserRouter><Header/></BrowserRouter>);
    const linkElement = screen.getByText(/Twitch/i).closest('a');
    expect(linkElement).toHaveAttribute("href", "/Twitch");
});

test('Renders Header Contact Us link element',()=>{
    render(<BrowserRouter><Header/></BrowserRouter>);
    const linkElement = screen.getByText(/Contact Us/i).closest('a');
    expect(linkElement).toHaveAttribute("href", "/Contact");
});

test('Renders Header Logo element',()=>{
    render(<BrowserRouter><Header/></BrowserRouter>);
    const logoElement = screen.getByAltText(/Kaisel Logo/i).closest('img');
    expect(logoElement).toBeInTheDocument();
});

test('Renders Header Logo element has link to home',()=>{
    render(<BrowserRouter><Header/></BrowserRouter>);
    const logoElement = screen.getByTitle("Home_Link").closest('a');
    expect(logoElement).toBeInTheDocument();
});