import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TwitchStreamers from '../../components/twitch/TwitchStreamers';
import axios from 'axios';

jest.mock("axios");


const mockResponseTwitchStreamers = {
    data: {
        data: [
            {
                title: "2022 LCK 스프링 결승전 | T1 vs GEN",
                user_name: "LCK_Korea",
                user_login: "lck_korea",
                thumbnail_url: "https://static-cdn.jtvnw.net/previews-ttv/live_user_lck_korea-{width}x{height}.jpg",
                viewer_count: 263351
            },
            {
                thumbnail_url: "https://static-cdn.jtvnw.net/previews-ttv/live_user_lck-{width}x{height}.jpg",
                title: "T1 vs GEN | 2022 LCK Spring FINALS",
                user_login: "lck",
                user_name: "LCK",
                viewer_count: 143453,
            },
            {
                thumbnail_url: "https://static-cdn.jtvnw.net/previews-ttv/live_user_lol_woolf-{width}x{height}.jpg",
                title: "울챔스 / T1 vs GEN - 결승전 #LCKWatchParty",
                user_login: "lol_woolf",
                user_name: "울프",
                viewer_count: 40485
            }

        ]
    }
}

describe('Testing Twitch API Feature #3', () => {

    beforeEach(() => {
        // RUNS BEFORE EACH TEST
        axios.get.mockImplementation(() => Promise.resolve(mockResponseTwitchStreamers));
    })

    test('Renders without crashing', async () => {
        await waitFor(() => {
            render(<TwitchStreamers />);
        });
    })

    test('Renders input element working', async () => {
        await waitFor(() => {
            render(<TwitchStreamers />);
        });
        const selectOne = screen.getByTestId("select-option");
        const inputNumber = screen.getByPlaceholderText("5");
        await waitFor(() => {
            fireEvent.change(selectOne, {
                target: { value: "League of Legends" }
            });
        });
        await waitFor(() => {
            fireEvent.change(inputNumber, {
                target: { value: "3" }
            });
        });
        expect(selectOne.value).toBe("League of Legends");
        expect(inputNumber.value).toBe("3");

    })

    test('Renders username for first streamer', async () => {
        await waitFor(() => {
            render(<TwitchStreamers />);
        });
        const selectOne = screen.getByTestId("select-option");
        const inputNumber = screen.getByPlaceholderText("5");
        await waitFor(() => {
            fireEvent.change(selectOne, {
                target: { value: "League of Legends" }
            });
        });
        await waitFor(() => {
            fireEvent.change(inputNumber, {
                target: { value: "3" }
            });
        });

        let streamer = await screen.findByText("LCK_Korea");
        expect(streamer).toBeInTheDocument();
    })

    test('Renders username for second streamer', async () => {
        await waitFor(() => {
            render(<TwitchStreamers />);
        });
        const selectOne = screen.getByTestId("select-option");
        const inputNumber = screen.getByPlaceholderText("5");
        await waitFor(() => {
            fireEvent.change(selectOne, {
                target: { value: "League of Legends" }
            });
        });
        await waitFor(() => {
            fireEvent.change(inputNumber, {
                target: { value: "3" }
            });
        });

        let streamer = await screen.findByText("LCK");
        expect(streamer).toBeInTheDocument();
    })

    test('Renders username for third streamer', async () => {
        await waitFor(() => {
            render(<TwitchStreamers />);
        });
        const selectOne = screen.getByTestId("select-option");
        const inputNumber = screen.getByPlaceholderText("5");
        await waitFor(() => {
            fireEvent.change(selectOne, {
                target: { value: "League of Legends" }
            });
        });
        await waitFor(() => {
            fireEvent.change(inputNumber, {
                target: { value: "3" }
            });
        });

        let streamer = await screen.findByText("울프");
        expect(streamer).toBeInTheDocument();
    })


})