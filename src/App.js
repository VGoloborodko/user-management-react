import React from 'react';
import './css/App.css';
import Users from "./Users"

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Users />
      </div>
    );
  }
}

export default App;
