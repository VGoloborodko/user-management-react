import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';

class Index extends React.Component {
  render() {
    return (
      <>
        <App />
      </>
    );
  }
}

const rootElement = document.querySelector('#root');
ReactDOM.render(<Index />, rootElement);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('#root')
// );