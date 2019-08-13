import React, {Component} from 'react';
// import PropTypes from 'prop-types';

// import TileOptions from "../../../public/ClickyOptions"
import Row from "../../components/gridComponents/row";
import Column from "../../components/gridComponents/column";
import Container from "../container/container";
import GameTiles from "../GameTiles/GameTiles";

class GameBoard extends Component {
    state ={
        // TileArray:TileOptions.Tiles,
        GameBoardArray:[],
        currentScore:0,
        highScore:0
    }

    componentDidMount() {
        if(localStorage.getItem("highScore") !== null){
            console.log(localStorage.getItem("highScore"));
            this.setState((prevState, props) => {
                return {
                    GameBoardArray: prevState.GameBoardArray,
                    currentScore: prevState.currentScore,
                    highScore: localStorage.getItem("highScore")
                };
            })
        }
    }

    createGameBoardArray(maxLength=9){

        return (
            <div>
                <Row>
                    <Column small={3}>
                        <GameTiles src={"https://www.webfx.com/blog/images/cdn.designinstruct.com/files/582-how-to-image-placeholders/generic-image-placeholder.png"}/>
                    </Column>
                    <Column small={3}>

                </Column>
                    <Column small={3}>

                </Column>
                </Row>
                <Row>
                    <Column small={3}></Column><Column small={3}></Column><Column small={3}></Column>
                </Row>
                <Row>
                    <Column small={3}></Column><Column small={3}></Column><Column small={3}></Column>
                </Row>
            </div>
        )
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Column small={6} large={12}>
                            <p>
                                Clickly Game is a memory game where you try to click as many unique squares on the board without clicking a duplicate.
                                The more squares you click the higher the score but watch out if you click on a square you have clicked on before you'll lose!
                            </p>
                        </Column>
                        <Column small={6} large={12}>
                            <Row>
                                <p>
                                    Current Score: {this.state.currentScore}
                                </p>
                            </Row>
                            <Row>
                                <p>
                                    High Score: {this.state.highScore}
                                </p>
                            </Row>
                        </Column>
                    </Row>
                    <Row>
                        <Column small={12}>
                            {this.createGameBoardArray()}
                        </Column>
                    </Row>
                </Container>

            </div>
        );
    }
}

GameBoard.propTypes = {};

export default GameBoard;
