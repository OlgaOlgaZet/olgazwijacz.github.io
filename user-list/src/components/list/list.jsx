import React from 'react';

class List extends React.Component {
    render() {
        const userList = this.props.userList.map((e,i) => <li key={i} data-index={i} >{e}
        <button onClick={this.props.removeUser}>X</button></li>)

        return(
            <div>
                <ul>{userList}</ul>
                </div>
        )
    }
}
export default List;




// const userList = this.props.userList.map((e,i) => {}  
// map - to nam robi tablice i zwraca e i czyli element i index 
/* <li key={i}>{e}</li> */ // i to dany index tablicy. w reakcie musi byc klucz