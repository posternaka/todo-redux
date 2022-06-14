import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getValue} from './redux/actions/getValueAction';
import {setValue} from './redux/actions/setInputValueAction';


function Todo() {
    const dispatch = useDispatch();
    const {value, arr} = useSelector(state => state);

    const handleShowTodoItem = () => {
      dispatch(setValue(''));
      dispatch(getValue(value));
    }

  return (
    <div>
        <input type="text" value={value} onChange={(e) => dispatch(setValue(e.target.value))}/>
        <button onClick={() => handleShowTodoItem()}>Добавить</button>
        {arr.map((item, index) => <p key={index}>{index + 1}. {item}</p>)}
    </div>
  )
}

export default Todo