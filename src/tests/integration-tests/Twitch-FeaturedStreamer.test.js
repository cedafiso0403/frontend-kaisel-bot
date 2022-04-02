import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TwitchStreamers from '../../components/twitch/TwitchFeatured';
import axios from 'axios';

jest.mock("axios");

const props = {
    featuredStreamer: {
        id: 41375541868,
        user_id: 459331509,
        user_name: 'auronplay',
        user_login: 'auronplay',
        game_name: 'VALORANT',
        title: 'Little Nighmares',
        viewer_count: 78365
    }
}

describe('Testing Twitch API Feature #1', ()=>{

    beforeEach(() => {
        // RUNS BEFORE EACH TEST
        axios.get.mockImplementation(() => Promise.resolve(props));
    })

    test('Render featured streamer', ()=>{
        render(<TwitchStreamers {...props}/>);
    })

    test("Check featured streamer's name and game", ()=>{
        render(<TwitchStreamers {...props}/>);
        let featuredTitle = screen.getByText(props.featuredStreamer.user_name + " is playing " + props.featuredStreamer.game_name).closest('h2');
        expect(featuredTitle).toBeInTheDocument();
    })

    test("Check stream title", ()=>{
        render(<TwitchStreamers {...props}/>);
        let streamTitle = screen.getByText(props.featuredStreamer.title);
        expect(streamTitle).toBeInTheDocument();
    })
})