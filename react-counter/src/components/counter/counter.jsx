import React from 'react';
import './counter.css';
import ButtonsPanel from '../buttonsPanel/buttonsPanel.jsx';
//clasa counter ktorea rozszerza nam nasz plik 
class Counter extends React.Component {


    // Stara metodda!!!!! :

    constructor(props) {
        super(props);
        let initValue = 0;
        if (!isNaN(this.props.initValue)) {

        this.state = {
            counterValue: parseInt(this.props.initValue),
        }
        } else {
            this.state = {
                counterValue: this.props.initValue,
            }
        }
    }


    //Nowa metoda:    można też dać counterValue: 0 czyli po porostu 
    state = {
        conunterValue: 0,
    }


    //metody przed renderem
    changeValue = () => {
        this.setState( (prevState) => {
        return({
        counterValue: prevState.counterValue + 1,
        })
        });
      
        }
    // changeValue = () => {
    //     this.setState( (prevState) => {
    //     return({
    //     counterValue: prevState.counterValueTwo + 1,
    //     })
    //     });
    //     console.log(this.state.counterValueTwo)
    //     }



    resetCounter = (resetCounter) => {
        let initValue = 0;
        if (!resetCounter) {
            if (!isNaN(this.props.initValue)) {
                initValue = parseInt(this.props.initValue)
            } 
        }
        this.setState({
            counterValue: initValue,
        })
    }
    render() {
       
        return(
            <div className="counter">Licznik:
            <span className ='value'>{this.state.counterValue}</span>
        {/* <div className="counter">Licznik: {this.state.counterValueTwo}</div> */}
        <ButtonsPanel changeValue={this.changeValue} resetCounterValue={this.resetCounter}/>
        {/* <button onClick={this.changeValueTwo}>B</button> */}
    </div>
        )
    }
}
export default Counter;
// const text = 'Licznik' i wtedy w divie zaiast Licznik!!! dajemy {text}