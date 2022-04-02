import TwitchIntro from "../../components/TwitchIntro";
import {render, screen} from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom';
import '@testing-library/jest-dom';


test('Render without crashing', ()=>{
    render(<BrowserRouter><TwitchIntro /></BrowserRouter>)
})

test('Render heading for element', ()=>{
    render(<BrowserRouter><TwitchIntro /></BrowserRouter>)
    const heading = screen.getByText("Get notified for your favorite streamers").closest('h2');
    expect(heading).toBeInTheDocument();
})

test('Render content feature for element', ()=>{
    render(<BrowserRouter><TwitchIntro /></BrowserRouter>)
    const line1 = screen.getByText(/Kaisel can display/i).closest('p');
    expect(line1).toBeInTheDocument();
})

test('Render image for intro twitch', ()=>{
    render(<BrowserRouter><TwitchIntro /></BrowserRouter>)
    const imgStreamer = screen.getByAltText(/streamers/i).closest('img');
    expect(imgStreamer).toBeInTheDocument();
})

test('Render link to twitch', ()=>{
    render(<BrowserRouter><TwitchIntro /></BrowserRouter>)
    const anchorToTwitch = screen.getByText("See Features").closest('a');
    expect(anchorToTwitch).toBeInTheDocument();
    expect(anchorToTwitch).toHaveAttribute("href", "/Twitch");
})

