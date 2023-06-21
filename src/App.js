import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState('');

  const inputTask = useRef(null);

  const addTaskToList = () => {
    if (!task) return;
    setTodoList([task, ...todoList]);
    setTask('');
    console.log(inputTask.current);
    inputTask.current.value = '';
  }

  const deleteTodo = (id) => {
    // we match with the filters to return everything other than the value at the index we clicked.
    setTodoList(todoList.filter(todo => todo !== todoList[id]));
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input type="text" placeholder='Task....' ref={inputTask} onChange={ (e) => setTask(e?.target?.value) } />
        <button className='add-button' onClick={addTaskToList}>Add</button>
      </div>
      <hr />
      <div className='todo-list'>
        {
          todoList && todoList.map((todo, index) => {
            return (
              <div className='task' key={index}>
                {todo}
                <button onClick={ () => deleteTodo(index) }>Delete</button>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
