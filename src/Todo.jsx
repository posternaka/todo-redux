import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getValue} from './redux/actions/getValueAction';
import {setValue} from './redux/actions/setInputValueAction';
import {getValueTrue} from './redux/actions/getValueActionTrue';
import {deleted} from './redux/actions/delete';


function Todo() {
    const dispatch = useDispatch();
    const {value, arr} = useSelector(state => state);

    const addInputValueInTodo = () => {
      dispatch(setValue(''));
      dispatch(getValue(value));
    }

  return (
    <div>
        <input type="text" value={value} onChange={(e) => dispatch(setValue(e.target.value))}/>
        <button onClick={() => addInputValueInTodo()}>Добавить</button>
        {arr.map((item, index, arr) => (
            <div key={index} className='container'>
              <div className='wrapper-todo'>
                <label className={item.status ? 'check' : ''} >
                  <input type="checkbox" onChange={() => dispatch(getValueTrue(item.id))}/>
                   {item.text}
                </label>
                <button onClick={() => dispatch(deleted(item.id))}>Delete</button>
              </div>
            </div>
          ))}
    </div>
  )
}

export default Todo;