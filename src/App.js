import './App.css';
import {useState} from 'react';
import AddTodo from './component/AddTodo';
import TodoContext from './context/TodoContext';
import TodoList from './component/TodoList';


function App() {

  const getTodoLists = JSON.parse( localStorage.getItem( 'lists' ) );

  const [inputValue, setInputValue] = useState("");
  const [lists, setLists] = useState(getTodoLists ? getTodoLists : []);
  const [isEdit, setEdit] = useState(false);
  const [editList, setEditList] = useState("");

  return(
    <TodoContext.Provider value={{
      inputValue,
      setInputValue,
      lists, 
      setLists,
      isEdit,
      setEdit,
      editList,
      setEditList }}>
        <div className="container">
          <h1 className="app-title">Todo Application</h1>
          <AddTodo />
          <TodoList />
        </div>
    </TodoContext.Provider>
  );
}

export default App;
