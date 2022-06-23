import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getValue} from './redux/actions/getValueAction';
import {setValue} from './redux/actions/setInputValueAction';
import {getValueTrue} from './redux/actions/getValueActionTrue';
import {deleted} from './redux/actions/delete';
import { changeInput } from './redux/actions/changeInputAction';
import { setEditValue } from './redux/actions/setEditValueAction';
import { editNameTask } from './redux/actions/editNameTaskAction';
import { setNewTaskValue } from './redux/actions/setTaskNewValueAction';


function Todo() {

    const dispatch = useDispatch();
    const {value, arr} = useSelector(state => state);
    console.log( value);

    const addInputValueInTodo = () => {
      dispatch(setValue(''));
      dispatch(getValue(value));
    }

    const addNewTaskValue = (e) => {
      dispatch(changeInput(e))
    }

    const hadleEditValue = (id) => {
      dispatch(setEditValue(id))
      dispatch(editNameTask(id))
    }


  return (
    <div className='wrapper_sides'>
      <div className="first_side">
        <input type="text" value={value.initValue} onChange={(e) => dispatch(setValue(e.target.value))}/>
        <button onClick={() => addInputValueInTodo()}>Добавить</button>
      </div>
      <div className="second_side">
        {/* <div className="wrapper_secondSide">
          {arr.map((item, index) => (
              <div key={index} className='container'>
                <div className='wrapper-todo'>
                  <label className={item.status ? 'check' : ''} >
                    <input type="checkbox" onChange={() => dispatch(getValueTrue(item.id))}/>
                      {item.text}
                    <input type="text" value={item.text} onChange={(e) => dispatch(changeInput(e.target.value))}/>
                  </label>
                  <button onClick={() => editTask()}>Edit</button>
                  <button onClick={() => dispatch(deleted(item.id))}>Delete</button>
                  
                </div>
              </div>
            ))}
          </div> */}

          <div className="card">
            <div className="card__background-circle circle1"></div>
            <div className="card__background-circle circle2"></div>
            <div className="card__content">
              {arr.map((item, index) => (
              <div key={index} className='container'>
                <div className='wrapper-todo'>
                  <label>
                    {/* <input  type="checkbox" onChange={() => dispatch(getValueTrue(item.id))}/> */}
                      {/* <p className={item.status ? 'check' : ''} onClick={() => hadleEditValue(item.id)}>{item.text}</p> */}
                      <p className={item.editNameTask ? 'show_input' : 'close_input'} onClick={() => hadleEditValue(item.id)}>{item.text}</p>
                    <input className={item.classShowEdit ? 'show_input' : 'close_input'} type="text" value={item.text} onChange={(e) => dispatch(setNewTaskValue(e.target.value))}/>
                  </label>
                  <button onClick={() => hadleEditValue(item.id)}>Edit</button>
                  <button onClick={() => dispatch(deleted(item.id))}>Delete</button>
                </div>
              </div>
            ))}

            </div>
          </div>
      </div>
    </div>
  )
}

export default Todo;