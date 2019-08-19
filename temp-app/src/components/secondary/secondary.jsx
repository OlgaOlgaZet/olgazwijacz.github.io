import React from 'react';

class Secondary extends React.Component {
   
    changeTextInparent = (text) => {
        this.props.changeText(text);
    }
   
    render() {
        
        return(
            <div>
            <span>Text z Main Component {this.props.mainText}</span>
            <button onClick={()=>this.changeTextInparent('Nowy text')}>Change from Secondary Component</button>
            </div>
        )
    }
}
export default Secondary
