import React, { Component } from 'react'

import Container from './container';
import { AnimatedCartoon } from 'images';
import { MainSection2DivContainer } from './style/style';

class FunAndInteraction extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        const { isJokeFetching, norrisJoke  } = this.props;
        console.log("norrisjoke", norrisJoke)
        return(
            <MainSection2DivContainer>
                <div className="jokes-heading-section">
                    <img src={AnimatedCartoon} alt="" />
                </div>
                <div className="jokes-content-section">
                     {isJokeFetching ? <>dwdw</> : <div>
                        <p >{norrisJoke.value}</p>
                        <button className="get-joke-btn">Get Single Joke</button>
                        <button className="get-joke-btn multiple-jokes">Get Multiple Jokes</button>
                    </div>}
                </div>
            </MainSection2DivContainer>
        )
    }
}

export default Container(FunAndInteraction);