import React, { Component } from 'react'
import LotteryBallBoard from './LotteryBallBoard';

class Lottery extends Component{

    constructor(props){
        super(props);
        this.state = {
            ballNum : 4
        }
    }


    render(){
        
        return(
            <div>
                <LotteryBallBoard number={this.state.ballNum} />
            </div>
        )

    }


}


export default Lottery;