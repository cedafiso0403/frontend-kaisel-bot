import '@testing-library/jest-dom';
import {render, screen, waitFor} from '@testing-library/react';
import TwitchGames from "../../components/twitch/TwitchGames";
import axios from 'axios';

jest.mock("axios");

const mockResponseTwitchGames = {
    data: {
        data: [
            {
                name: 'Player',
                box_art_url: "https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-{width}x{height}.jpg"
            },
            {
                name: 'Just Chatting',
                box_art_url: 'https://static-cdn.jtvnw.net/ttv-boxart/509658-{width}x{height}.jpg'
            },
            {
                name: 'League of Legends',
                box_art_url: 'https://static-cdn.jtvnw.net/ttv-boxart/21779-{width}x{height}.jpg'
            },
            {
                name: 'Fortnite',
                box_art_url: 'https://static-cdn.jtvnw.net/ttv-boxart/33214-{width}x{height}.jpg'
            },
            {
                name: 'Grand Theft Auto V',
                box_art_url: 'https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-{width}x{height}.jpg'
            }
        ]
    }
}

describe('Testing Twitch API Feature #2', ()=>{

    beforeEach(() => {
        // RUNS BEFORE EACH TEST
        axios.get.mockImplementation(() => Promise.resolve(mockResponseTwitchGames));
    })

    test('Renders without crashing', async ()=>{
        await waitFor(() => {
            render(<TwitchGames/>);
        });

    })

    test('Renders heading Top Categories', async ()=>{
        await waitFor(() => {
            render(<TwitchGames/>);
        });
        let topCategoriesHeading = screen.getByText("Top Categories").closest('h1');
        expect(topCategoriesHeading).toBeInTheDocument();
    })

    test('Renders Game 1', async ()=>{
        render(<TwitchGames/>);
        let topCategoriesHeading = await screen.findByText("Fortnite");
        expect(topCategoriesHeading).toBeInTheDocument();
    })

    test('Renders Game 2', async ()=>{
        render(<TwitchGames/>);
        let topCategoriesHeading = await screen.findByText("Player");
        expect(topCategoriesHeading).toBeInTheDocument();
    })

    test('Renders Game 3', async ()=>{
        render(<TwitchGames/>);
        let topCategoriesHeading = await screen.findByText("Just Chatting");
        expect(topCategoriesHeading).toBeInTheDocument();
    })

    test('Renders Game 4', async ()=>{
        render(<TwitchGames/>);
        let topCategoriesHeading = await screen.findByText("League of Legends");
        expect(topCategoriesHeading).toBeInTheDocument();
    })

    test('Renders Game 5', async ()=>{
        render(<TwitchGames/>);
        let topCategoriesHeading = await screen.findByText("Grand Theft Auto V");
        expect(topCategoriesHeading).toBeInTheDocument();
    })

    test('Renders 5 images', async ()=>{
        render(<TwitchGames/>);
        for(let i = 0; i < 5; i++){
            let topCategoriesHeading = await screen.findByAltText("game card"+i)
            expect(topCategoriesHeading).toBeInTheDocument();
        }
    })
})