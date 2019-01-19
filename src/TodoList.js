import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
 class TodoList extends Component {


  render() {
    return (
      <div>
        <p>this is coming from todolist</p>

      </div>
    )
  }
}

export default TodoList
