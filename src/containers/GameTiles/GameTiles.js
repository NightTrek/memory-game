import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class GameTiles extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgSRC:props.src,
            clicked:false
        }
    }
    handleClick(){
        console.log('you clicked a Tile')
        // if(this.state.clicked === false) {
        //     this.setState((prevState, props) => {
        //         return {
        //             imgSRC: prevState.imgSRC,
        //             clicked: true
        //         };
        //     });
        // }else{
        //     //if you click on a title for a second time do this
        // }
    }
    //     componentDidUpdate(prevProps, prevTileState, snapshot) {
    //     console.log("component did update");
    //
    //         this.setState((prevState, props) => {
    //             console.log(props.src);
    //                     return {
    //                         imgSRC: props.src,
    //                         clicked: prevState.clicked
    //                     };
    //                 });
    //
    //     }

    // componentDidMount() {
    //
    //
    // }

    render() {
        console.log(this.state.imgSRC);
        console.log(this.props.src);
        return (
            <div className="gameTile" onClick={this.handleClick}>
                <img src={this.props.src} alt={"clicky img"} width={"200px"}/>
            </div>
        );
    }
}

GameTiles.propTypes = {};

export default GameTiles;
