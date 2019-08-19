import React from 'react';
import './buttonsPanel.css';

class ButtonsPanel extends React.Component {
    resetOfReinitCounter = (reset) => {
        this.props.resetCounterValue(reset)

    }
    render() {
        return( <div>
            <button onClick={this.props.changeValue}>Add</button>
            <button onClick={()=>this.resetOfReinitCounter(false)}>ReInit</button>
            <button onClick={()=>this.resetOfReinitCounter(true)}>Rset</button>
            
        </div>
            ) 
        }
    }
export default ButtonsPanel;


