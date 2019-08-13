import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class GameTiles extends Component {
    state = {
        clicked:false,
        imgSRC:this.props.src
    }
    handleClick(){
        console.log('you clicked a Tile')
        if(this.state.clicked === false) {
            this.setState((prevState, props) => {
                return {
                    imgSRC: prevState.imgSRC,
                    clicked: true
                };
            });
        }else{
            //if you click on a title for a second time do this
        }
    }

    render() {
        return (
            <div className="gameTile" onClick={this.handleClick()}>
                <img src={this.state.imgSRC} alt={"clicky img"}/>
            </div>
        );
    }
}

GameTiles.propTypes = {};

export default GameTiles;
