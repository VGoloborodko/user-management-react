import React from 'react';
import './css/Users.css';
import User from "./User"

const data = [
    { id: 1, name: 'Victor', age: 20, gender: 'male' },
]

class Users extends React.Component {
    state = {
        id: 1,
        data: [...data],
        inputName: '',
        inputAge: '',
        inputGender: '',
    }

    addBbnHandler = () => {
        let copyData = Object.assign({}, this.state)
        copyData.data.push({id: copyData.id++, name: copyData.inputName, age: copyData.inputAge, gender: copyData.inputGender})
        this.setState(copyData)
    }

    changeName = (event) => {
        let copyData = Object.assign({}, this.state)
        copyData.inputName = event.target.value
        this.setState(copyData)
    }


    changeAge = (event) => {
        let copyData = Object.assign({}, this.state)
        copyData.inputAge = event.target.value
        this.setState(copyData)
    }

    shangeGender = (event) => {
        let copyData = Object.assign({}, this.state)
        copyData.inputGender = event.target.value
        this.setState(copyData)
    }

  render() {
    return (
        <div>
            <div className="users">
                <input onChange={(event) => this.changeName(event)} placeholder="Enter Your name"/>
                <input onChange={(event) => this.changeAge(event)} placeholder="Enter Your age"/>
                <input onChange={(event) => this.shangeGender(event)} placeholder="Gender (male or female)"/>
                <button onClick={this.addBbnHandler}>add</button>
            </div>

            <div>
                {this.state.data.map( (item, index) => {
                    return (
                        <User item={item} key ={index} index={index} />
                    )
                })}
            </div>
        </div>
    );
  }
}

export default Users;