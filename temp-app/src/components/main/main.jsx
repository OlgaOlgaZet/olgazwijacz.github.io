import React from 'react';
import Secondary from '../secondary/secondary';


class Main extends React.Component {
    state = {
        mainText: 'Main text',
    }

    changeTextMain  = () => {
        this.setState({
            mainText:"text zmianiony w Main",
        })
    }
    changeText = (text) => {
        this.setState({
            mainText: text,
        })
    }


    render() {
        return(
            <div>
                 <h1>To jest glowny text: {this.state.mainText}</h1>
            <button onClick={this.changeTextMain}>Zmień text w main</button>
            <Secondary mainText={this.state.mainText} changeText={this.changeText}/>
               
          
            </div>
        )
    }
}
export default Main;