import { useContext } from "react";
import TodoContext from '../context/TodoContext';

function Todo(props) {

    const {lists, setLists, setInputValue, setEdit, setEditList}= useContext(TodoContext);

    function completeTodo ( e ) {
        const filterTodos = lists.map( ( item ) => {
            if ( item.id === e.target.value ) {
                item.completed = false;
                if ( e.target.checked ) {
                    item.completed = true;
                }
            }
            return item;
        } );

        setLists( filterTodos );
    }
            

    function editItem(id, title) {
        setEdit(true);
        setEditList(id);

        setInputValue(title);
    }

    function deleteItem(id) {
        setLists(lists.filter((list) => list.id !== id));
    }

    const isCompleted = props.completed ? 'checked' : '';

    return (
        <p className="todo-item">
            <input id={props.id} type="checkbox" checked={ isCompleted } value={ props.id } onChange={ e => completeTodo( e ) } />
            <label htmlFor={ props.id }>{ props.title }</label>
            <button type="button" className="btn-edit" id={ props.id } onClick={() => editItem(props.id, props.title)}>Edit</button>
            <button type="button" className="btn-delete" id={ props.id } onClick={() => deleteItem(props.id)}>Delete</button>
        </p>
    );
}

export default Todo;