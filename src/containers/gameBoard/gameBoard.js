import React, {Component} from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';

// import TileOptions from "../../../public/ClickyOptions"
import Row from "../../components/gridComponents/row";
import Column from "../../components/gridComponents/column";
import Container from "../container/container";
import GameTiles from "../GameTiles/GameTiles";

class GameBoard extends Component {

    constructor(props) {
        super(props);
        this.state ={
            // TileArray:TileOptions.Tiles,
            imgSrcArray:["https://picsum.photos/200","https://picsum.photos/200","https://picsum.photos/200",
                "https://picsum.photos/200","https://picsum.photos/200","https://picsum.photos/200",
                "https://picsum.photos/200","https://picsum.photos/200","https://picsum.photos/200",
                "https://picsum.photos/200","https://picsum.photos/200","https://picsum.photos/200"],
            currentScore:0,
            highScore:0
        };

        this.StartGame = this.StartGame.bind(this);
        this.generateIMGArray = this.generateIMGArray.bind(this);
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
            });
        }

    }

    async StartGame(){
        try {
            let array = await this.generateIMGArray();

            console.log(array);
            this.setState((prevState, props) => {
                return {
                    imgSrcArray: array,
                    currentScore: prevState.currentScore,
                    highScore: prevState.highScore
                };
            });
            console.log(this.state);
        }catch(err){
            console.log(err);
        }
    }


    async generateIMGArray(length=9){
        // let output = await axios.get("https://picsum.photos/v2/list?page=1&limit=9");
        // // console.log(output.data)
        // return new Promise((resolve, reject)=>{
        //     if(output.data){
        //         let outputArray = [];
        //         output.data.forEach((item)=>{
        //             outputArray.push(item.url);
        //         });
        //         resolve(outputArray);
        //     }
        //     else{
        //         reject(output);
        //     }
        // })
        return [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1024px-Lion_waiting_in_Namibia.jpg",
            "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231413/Labrador-Retriever-MP.jpg",
            "https://ichef.bbci.co.uk/news/320/cpsprodpb/E9DF/production/_96317895_gettyimages-164067218.jpg",
            "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1001,w_1500,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Kitten_murder_Jeff_Merkley_2_copy_hdpoxd.jpg",
            "http://oxmg23usfvkkg5uy1jypi6w8-wpengine.netdna-ssl.com/wp-content/uploads/cats-animals-kittens-background.jpg",
            "http://synergybehavior.com/wp-content/uploads/2018/03/Kitten-on-Couch-banner.jpeg",
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cat-quotes-1543599392.jpg?crop=1.00xw:0.759xh;0,0&resize=980:*",
            "https://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg",
            "https://cdn.pixabay.com/photo/2018/11/13/16/14/puppy-3813386_960_720.jpg",
            "https://storage.needpix.com/rsynced_images/cachorro-14999408664eK.jpg",
            "https://cdn.pixabay.com/photo/2018/07/20/20/54/kitten-3551465_960_720.jpg",
            "https://www.maxpixel.net/static/photo/1x/Animals-Cats-Feline-Closeup-Kittens-Macro-Cute-1824367.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Red_Kitten_01.jpg/800px-Red_Kitten_01.jpg",
            "https://openphoto.net/volumes/sizes/miro/32057/2.jpg",
            "https://www.maxpixel.net/static/photo/1x/Kitten-Scotish-Fold-Kittens-Fluffy-Cat-Striped-2783536.jpg"]
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
                        <button onClick={this.StartGame}>Start</button>
                    </Row>
                    <Row>
                        <Column small={12}>
                            {/*+++++++++++++++++++  Game Board start ++++++++++++++++++++++++++++++++++++++++++++++++*/}
                            <Row>
                                {this.state.imgSrcArray.map((url,index)=>{
                                    console.log(url)
                                    console.log("=============")
                                    if(index<9) {
                                        return (
                                            <Column key={index} small={4} large={4}>

                                                <GameTiles src={url}/>
                                            </Column>
                                        )
                                    }
                                })}
                            </Row>
                        {/*   ========================== Game BOARD END =======================================*/}
                        </Column>
                    </Row>

                </Container>

            </div>
        );
    }
}

GameBoard.propTypes = {};

export default GameBoard;
