import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import store from './TodoStore';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList store={store} />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur quidem neque cumque provident quae ullam est facilis officiis maiores. Sint, tenetur obcaecati non natus rerum tempora alias itaque iure reprehenderit.</p>
        <p>mobx test</p>
      </div>
    );
  }
}

export default App;
