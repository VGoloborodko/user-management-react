import React from 'react';
import './css/User.css';

class User extends React.Component {
  render() {
    return (
      <div className="user_block">
        <div className="user">
          <p>Имя: {this.props.item.name}</p>
          <p>Возраст: {this.props.item.age}</p>
          <p>Пол: {this.props.item.gender}</p>
        </div>
        <div>
          <button>Удалить</button>
        </div>
      </div>
    );
  }
}

export default User;