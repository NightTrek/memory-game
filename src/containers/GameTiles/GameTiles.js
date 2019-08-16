import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class GameTiles extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgSRC:props.src,
            clicked:false
        }

        //sephan martelli
        //daria friend
        //
        //
        //kieren hyland
        //
        //frank z
        //
        //probebly
        //707-338-0671
        //
        //
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        console.log(this.props);
        console.log(`you clicked tile ${this.props.index}`);
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
