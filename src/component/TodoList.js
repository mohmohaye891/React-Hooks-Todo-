import Todo from './Todo';
import { useContext } from "react";
import TodoContext from '../context/TodoContext';

function TodoList() {

    const {lists, setLists}= useContext(TodoContext);
    console.log(lists);

    return(        
        1 <= lists.length ? lists.map( ( item ) => {
            return(
                <Todo key={ item.id } id={ item.id } title={ item.title } completed={ item.completed } />
            );
        } ) : ( <h4>No todo found. Please add some...</h4> )
    );
}

export default TodoList;