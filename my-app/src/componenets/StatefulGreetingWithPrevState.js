import React from 'react';

class StatefulGreeting extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,
        };
    }

    handeClick(){
        this.setState((prevState, prevProps) => {
            return{
                introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            };
    });
};

    increment(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
            };
        });
       }


    render(){
        return(
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.handeClick()}>{this.state.buttonText}</button> 
                <button onClick={() => this.increment()}>{this.state.increment}increment</button>
                <p>You've clicked: {this.state.count} times</p>
            </div>
        );
    }
}


export default StatefulGreeting;