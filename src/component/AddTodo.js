import { useContext, useEffect} from "react";
import TodoContext from '../context/TodoContext';

function AddTodo() {
    const {inputValue, setInputValue, lists, setLists, isEdit, setEdit, editList}= useContext(TodoContext);

    function addItem(e) {
        e.preventDefault();       
        if ( '' === inputValue || undefined === inputValue ) {
            alert( 'Field can not be blank' );
            return;
        }
        setLists([...lists, {id:Math.random().toString(), title: inputValue, completed: false}])
        setInputValue("");
    }

    function editItem(e) {
        e.preventDefault();
        setLists(
            lists.map((list) => {
            if(list.id === editList) {
                return {...list, title: inputValue}
            }
            return list;
        }));
        setInputValue("");
        setEdit(false);
    }

    useEffect( () => {
        localStorage.setItem( 'lists', JSON.stringify( lists ) );
    }, [lists] );

    return(
        <div className="form-input-container">
            {isEdit ? (<form>
                <input value={ inputValue } className="form-input" onChange={ e => setInputValue( e.target.value ) } placeholder="Add todo..." />
                <button type="button"  className="form-btn-edit" onClick={ editItem }>Update</button>
            </form>) 
            : (<form>
                <input value={ inputValue } className="form-input" onChange={ e => setInputValue( e.target.value ) } placeholder="Add todo..." />
                <button type="button"  className="form-btn" onClick={ addItem }>Add</button>
            </form>)
            }                   
        </div>
    );
}

export default AddTodo;