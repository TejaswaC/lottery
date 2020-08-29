import React, { Component } from 'react'
import Ball from './Ball';
import './LotteryBallBoard.css';


class LotteryBallBoard extends Component{

    static defaultProps = {

        title: 'Lottery',
        maxBalls: 6,
        maxNum: 40
    }

    constructor(props){
        super(props);
        var lotterA = [];
        for(var i =0; i< this.props.number;i++){

            var j = Math.floor(Math.random()* 100);
           lotterA.push(j);
        }
        this.state = {
            lotteryArray : lotterA
        }
       
        
    }

    generateBalls = (e) => {
        var lotterA = [];

        for(var i =0; i< this.props.number;i++){

            var j = Math.floor(Math.random()* 100);
           lotterA.push(j);
        }
        this.setState({lotteryArray: lotterA})

    }

    

    render(){

        return(
            <div className='LotteryBallBoard'>
                <h1>{this.props.title}</h1>
            {this.state.lotteryArray.map(number => {
            return <div className ='r2'><Ball number={number} />
            </div>
            })}
                      <br />  <button className='LButton' onClick={this.generateBalls}>Generate Balls</button>

            </div>


        );

    }

}

export default LotteryBallBoard;