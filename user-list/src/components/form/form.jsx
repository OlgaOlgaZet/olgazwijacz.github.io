import React from 'react';

class Form extends React.Component {

    // addUserFormInput = (event)=> {
    //     event.preventDefault();
    //     console.log(event.target);
    // }
    render() {
        return(
            <div>
                <form>
                    <label>
                        User name:
                        <input type="text" name="name" value={this.props.inputValue} onChange={this.props.changeValue}/>
                    </label>
                        <input type="submit" value="Add user to list" onClick={this.props.addUser} />
                </form>
            </div>
        )
    }
}

export default Form;