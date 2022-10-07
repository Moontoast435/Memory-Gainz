import { default as HomePage } from ".";
import { screen, render, within } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';

describe("HomePage", () => {
    // let getResultMock;
    
    beforeEach(() => {
        // getResultMock = jest.fn();
        render(
            <Router>
                <HomePage />
            </Router>
        );
    });

    test("it renders a title", () => {
        let title = screen.getByText("Memory Gainz");
        expect(title).toBeInTheDocument();
    })

    test("it renders a menu div" , () => {
        let parent = screen.getByTestId("parent-div");
        // const child = getByTestId('');
        expect(within(parent).queryByTestId('menu-div')).not.toBeNull();
    })
    test("it renders the play game button", () => {
        let playGame = screen.getByLabelText("play-game-button");
        expect(playGame.textContent).toContain("Play Game")
    })

    test("it renders the how to play button", () => {
        let playGame = screen.getByLabelText("how-to-play-button");
        expect(playGame.textContent).toContain("How to play")
    })

    test("it renders the options button", () => {
        let playGame = screen.getByLabelText("options-button");
        expect(playGame.textContent).toContain("Options")
    })

    test("it renders the leaderboard button", () => {
        let playGame = screen.getByLabelText("leaderboard-button");
        expect(playGame.textContent).toContain("Leaderboard")
    })

})